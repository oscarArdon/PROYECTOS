<?php

use Illuminate\Support\Facades\Route;

//importando controladores a usar en routes
use App\Http\Controllers\TodosController;
use App\Http\Controllers\CategoriesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//ruta para vista principal (form y lista de tareas)
Route::get('/tareas',[TodosController::Class,'index'])->name('todos');
//ruta para enviar peticion post del form al controller
Route::post('/tareas',[TodosController::Class,'store'])->name('todos');
//Ruta para eliminar una tarea
Route::delete('/tareas/{id}',[TodosController::Class,'destroy'])->name('todos-destroy');
//Ruta para mostrar tarea a actualizar en el form de edicion
Route::get('/tareas/{id}',[TodosController::Class,'show'])->name('todos-show');
//Routa para enviar peticion post al controlador y actualizar registro
Route::post('/tareas/{id}',[TodosController::Class,'update'])->name('todos-update');

Route::resource('categories',CategoriesController::Class);
