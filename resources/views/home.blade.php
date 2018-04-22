<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" type="text/css"></link>
        
    </head>
    <body>
        <div id='app'>
            @include('quiz')
        </div>
    </body> 
<script src="{{ URL::asset('js/app.js') }}"></script>
</html>
