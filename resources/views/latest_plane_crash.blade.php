<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" type="text/css"></link>
        <link rel="stylesheet" href="{{ URL::asset('css/all.css') }}" type="text/css"></link>
    	<script src="https://openlayers.org/en/v4.5.0/build/ol.js"></script>
    </head>
    <body>
		<div class="card"></div>
			<div class="card-body">
				<h5 class="card-title">
					<div class="row">
						<div class="col-8">{{ $title }}</div>
						<div class="col"><a href="/edit" class="btn btn-info float-right">Edit</a></div>
						
					</div>
				</h5>
				<div class="card-text">
				    {{ $content }}
					
				</div>
				@if ($hasMap)
				<div class="map-container">
					<div id="map"></div>
				</div>
				@endif
			</div>
    </body> 
	<script src="{{ URL::asset('js/app.js') }}"></script>
</html>
