<?php

namespace App\Http\Traits;

use Illuminate\Database\Eloquent\Model;
use DB;

trait PostgisTrait
{
	
    public function getGeomFromLatLon ($latitude, $longitude)
    {
    	return DB::select('SELECT ST_SetSrid(ST_MakePoint('. $longitude .', '. $latitude .'), 4326)::geography as geom')[0]->geom;
    }
}