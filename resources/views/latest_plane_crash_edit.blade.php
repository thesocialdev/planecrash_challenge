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
					Edit Plane Crash Article
				</h5>
				<div class="card-text">
					<div class="row">
						<div class="col-10">
							<label for="article-title">Title</label>
							<input id="article-title" class="form-control" name="title" value="{{ $title }}">
						</div>
						<div class="col">
							<div class="enable-map">
								<div class="row">
									<label>Enable Map</label>
								</div>
								<div class="row">
									<div class="btn-group btn-group-toggle float-left" data-toggle="buttons">
									  	<label class="btn btn-secondary {{ $hasMap ? 'active' : ''}}">
									    	<input type="radio" name="enable-map" id="option1" autocomplete="off" value="true" {{ $hasMap ? 'checked' : ''}}> On
									  	</label>
									  	<label class="btn btn-secondary {{ !$hasMap ? 'active' : ''}}">
									    	<input type="radio" name="enable-map" id="option2" autocomplete="off" value="false" {{ !$hasMap ? 'checked' : ''}}> Off
									  	</label>
									</div>
								</div>
							</div>		
						</div>						
					</div>
					<label for="article-content">Content</label>
					<textarea id="article-content" class="form-control">{{ $content }}</textarea>
				</div>
				<div id="map"></div>
				<button id="save" class="btn float-right">Save Article</button>
			</div>
    </body> 
	<script src="{{ URL::asset('js/app.js') }}"></script>
</html>
