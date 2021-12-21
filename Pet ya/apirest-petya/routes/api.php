<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Declarando controladores
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\FormularioCitaController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\CitaController;
use App\Http\Controllers\DiagnosticoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//***********ruta para acceder al backend

//ruta a metodos del controller cliente
Route::resource('petya-clientes', ClienteController::class);
//ruta a metodos del controller cliente
Route::resource('petya-formcita', FormularioCitaController::class);
//ruta a metodos del controller empleado
Route::resource('petya-empleados', EmpleadoController::class);
//ruta a metodos del controller horario
Route::resource('petya-horarios', HorarioController::class);
//ruta para ejecutar metodo de tabla de frmcitas 
Route::get('petya-formcita/tabla', [FormularioCitaController::class, 'tabla']);
//ruta a metodos del controller cita
Route::resource('petya-citas', CitaController::class);
//ruta a metodos del controller diagnostico
Route::resource('petya-diagnosticos', DiagnosticoController::class);