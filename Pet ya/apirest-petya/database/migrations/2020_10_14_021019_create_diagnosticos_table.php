<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiagnosticosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosticos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cliente_id');
            $table->string('nombre_mascota');
            $table->string('especie');
            $table->string('raza');
            $table->string('edad');
            $table->string('sexo');
            $table->string('color');
            $table->string('vacunacion');
            $table->text('motivo');
            $table->text('vacunas_realizadas');            
            $table->string('peso');
            $table->string('pulso');
            $table->string('temperatura');
            $table->text('diagnostico_final');
            $table->text('tratamiento');
            $table->integer('empleado_id');
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
        Schema::dropIfExists('diagnosticos');
    }
}
