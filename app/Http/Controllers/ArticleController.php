<?php

namespace App\Http\Controllers;

use App\Article;
use App\Map;
use Illuminate\Http\Request;
use App\Http\Traits\RestControllerTrait;
use App\Http\Traits\PostgisTrait;

class ArticleController extends Controller
{
    use PostgisTrait, RestControllerTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $params = $request->all();

        $article = Article::find(1);

        $article->title = $params['title'];
        $article->content = $params['content'];
        $article->has_map = $params['hasMap'];

        $article->save();

        foreach ($params['points'] as $key => $point) {
            $coordinate = new Map(['geo_coordinate' => $this->getGeomFromLatLon($point[1], $point[0])]);

            $article->coordinates()->save($coordinate);
        }
        return $this->showResponse($article);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $article = Article::first();

        $title = $article->title;
        $content = $article->content;
        $hasMap = $article->has_map;

        $this->_fibonnacci(34);
        return view('latest_plane_crash', compact(['title', 'content', 'hasMap']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $article = Article::first();

        $title = $article->title;
        $content = $article->content;
        $hasMap = $article->has_map;

        $this->_fibonnacci(34);
        return view('latest_plane_crash_edit', compact(['title', 'content', 'hasMap']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
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
