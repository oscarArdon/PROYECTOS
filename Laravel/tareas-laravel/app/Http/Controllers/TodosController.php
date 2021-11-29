<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//Importando modelo al controlador
use App\Models\Todo;

class TodosController extends Controller
{
    /**
     * Index para mostrar todos los elementos
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
     * Almacena una nueva tarea
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validando dato que viene desde form
        $request->validate([
            'title'=>'required|min:3'
        ]);
        //creando un nuevo objeto del modelo y almacenando registro en bd
        $todo = new Todo;
        $todo->title=$request->title;        
        $todo->save();
        //redireccionando a la ruta nombrada en web.php
        //y se crea una Flashed Session Data para el mensaje de exito
        return redirect()->route('todos')->with('success','Tarea creada correctamente!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Muestra el formulario de edicion
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Actualiza una tarea
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Elimina una tarea segun el id
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
