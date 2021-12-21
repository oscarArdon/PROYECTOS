<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_cliente');
            $table->string('nombre_mascota');
            $table->date('fecha_cita');
            $table->string('hora');
            $table->string('tipo_cita');
            $table->text('especificaciones');
            $table->string('estado');
            $table->integer('id_empleado');
            $table->integer('id_formulario');            
            $table->timestamps();
            $table->engine = "InnoDB";
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
}
