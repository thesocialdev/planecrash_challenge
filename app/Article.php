<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'content',
        'has_map',
    ];

    public function coordinates () {
		return $this->hasMany('App\Map', 'id_article', 'id');
    }
}
