<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormularioCitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formulario_citas', function (Blueprint $table) {
            $table->increments('id');
            $table->date('fecha_cita');
            $table->string('hora');
            $table->string('nombre_mascota');
            $table->string('especie');
            $table->string('raza');
            $table->string('edad');
            $table->string('sexo');
            $table->string('color');
            $table->string('vacunacion');
            $table->text('motivo');
            $table->text('vacunas_realizadas');
            $table->integer('id_empleado');
            $table->string('peso');
            $table->string('pulso');
            $table->string('temperatura');
            $table->integer('cliente_id');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formulario_citas');
    }
}
