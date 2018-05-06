<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_coordinates', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->integer('id_article');
            $table->timestamps();

            $table->foreign('id_article')
            ->references('id')->on('articles');
        });

        DB::statement("CREATE EXTENSION postgis");
        DB::statement("ALTER TABLE map_coordinates ADD column geo_coordinate GEOGRAPHY(POINT, 4326)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('map_coordinates');
        DB::statement("DROP EXTENSION postgis");
    }
}
