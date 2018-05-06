<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
	
class Map extends Model
{
    protected $table = 'map_coordinates';

	protected $fillable = [
        'id_article',
        'geo_coordinate',
    ];

    public function article () 
    {
    	return $this->belongsTo('App\Article', 'id_article');
    }

    public function getFeatureCollectionByExtent($params)
    {
        if (!isset($params['extent']))
            return;

        $envelope = $this->_makeEnvelope($params['extent'], true);

        $coordinates = DB::select("
            SELECT row_to_json(fc) as fc
            FROM (SELECT 'FeatureCollection' As type, f.id_layer, array_to_json(array_agg(f)) As features
                FROM (
                    SELECT 'Feature' As type,
                    		ST_AsGeoJSON(geo_coordinate)::json As geometry,
                        	mc.id_article as id_layer, mc.id
                    FROM " . $this->table . " mc
                    WHERE ST_Intersects(geo_coordinate::geometry, $envelope)
                ) As f
                group by f.id_layer
                )  As fc;
            ");

        foreach ($coordinates as $key => $value) {
            $value->fc = json_decode($value->fc);
        }

        return $coordinates;
    }

    private function _makeEnvelope($extent, $isUTM)
    {
        return $envelope = "ST_Transform(ST_MakeEnvelope(" . implode(',', $extent) . ", 3857), 4326)";
        // return $envelope = "ST_MakeEnvelope(" . implode(',', $extent) . ", 4326)";
    }
}
