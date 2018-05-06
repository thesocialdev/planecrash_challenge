<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\RestControllerTrait;

use App\Map;

class MapController extends Controller
{
    use RestControllerTrait;
    
    const MODEL = 'App\Map';

    public function getFeatures (Request $request){
    	
    	$params = $request->all();

        $coordinates = (new Map())->getFeatureCollectionByExtent($params);

        return $this->listResponse($coordinates);
    }
}
