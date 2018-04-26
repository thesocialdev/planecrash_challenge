<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizController extends Controller
{
    public function show (){
    	$json = '[{"id":"0","title":"Pergunta 1","options":[{"text":"Resposta 1","value":1,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 2","value":2,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 3","value":3,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"}]},{"id":"1","title":"Pergunta 2","options":[{"text":"Resposta 1","value":1,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 2","value":2,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 3","value":3,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"}]},{"id":"2","title":"Pergunta 2","options":[{"text":"Resposta 1","value":1,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 2","value":2,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 3","value":3,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"}]},{"id":"3","title":"Pergunta 2","options":[{"text":"Resposta 1","value":1,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 2","value":2,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"},{"text":"Resposta 3","value":3,"img":"https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3"}]}]';

    	return $json;
    }
}
