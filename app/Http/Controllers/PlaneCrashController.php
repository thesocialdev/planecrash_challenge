<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaneCrashController extends Controller
{
    public function show () {
    	$this->_fibonnacci(34);
    	return view('latest_plane_crash');
    }

    public function edit () {
    	$this->_fibonnacci(34);
    	return view('latest_plane_crash_edit');
    }

    private function _fibonnacci ($n) {
    	if ($n == 0)
    		return 1;
    	else if ($n == 1)
    		return 1;
    	else
    		return $this->_fibonnacci($n - 1) + $this->_fibonnacci($n - 2);
    }
}
