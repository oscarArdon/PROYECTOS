<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//Importando modelo al controlador
use App\Models\Todo;
use App\Models\Category;

class TodosController extends Controller
{
    /**
     * Index para mostrar todos los registros de la tabla
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos = Todo::all();
        $categories = Category::all();
        return view('tareas.index',['todos'=>$todos,'categories'=>$categories]);
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
        $todo->category_id=$request->category_id;        
        $todo->save();
        //redireccionando a la ruta nombrada en web.php
        //y se crea una Flashed Session Data para el mensaje de exito
        return redirect()->route('todos')->with('success','Tarea creada correctamente!');
    }

    /**
     * Muestra formulario de edicion con el objeto a actualizar
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo = Todo::find($id);
        $categories = Category::all();
        return view('tareas.show',['todo'=>$todo,'categories'=>$categories]);
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
        //validando dato que viene desde form
        $request->validate([
            'title'=>'required|min:3'
        ]);
        $todo = Todo::find($id);
        $todo->title=$request->title;
        $todo->category_id=$request->category_id;        
        $todo->save();
        return redirect()->route('todos')->with('success','Tarea actualizada correctamente!');
    }

    /**
     * Elimina una tarea segun el id
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::destroy($id);
        return redirect()->route('todos')->with('success','Tarea eliminada correctamente!');
    }
}
