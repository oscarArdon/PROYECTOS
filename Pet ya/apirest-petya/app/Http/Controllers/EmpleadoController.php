<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Empleado;

use Illuminate\Http\Request;

class EmpleadoController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $empleados = Empleado::all();
        if(is_null($empleados) || $empleados == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($empleados,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Empleado para guardar nuevo registro
        $empleado = new Empleado();
        //asignando datos del request al objeto
        $empleado->nombres = $request->input('nombres');
        $empleado->apellidos = $request->input('apellidos');
        $empleado->correo = $request->input('correo');
        $empleado->foto_perfil = $request->input('foto_perfil');
        $empleado->telefono = $request->input('telefono');
        $empleado->password = $request->input('password');
        $empleado->categoria = $request->input('categoria');
        //guardando cliente
        if($empleado->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);

    }

    public function show($id)
    {
        $empleado = Empleado::find($id);
        return json_encode($empleado);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $empleado = Empleado::find($id);
        //asignando datos del request al objeto
        $empleado->nombres = $request->input('nombres');
        $empleado->apellidos = $request->input('apellidos');
        $empleado->correo = $request->input('correo');
        $empleado->foto_perfil = $request->input('foto_perfil');
        $empleado->telefono = $request->input('telefono');
        $empleado->password = $request->input('password');
        $empleado->categoria = $request->input('categoria');
        //guardando cambios en el registro
        if($empleado->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }

    public function destroy($id)
    {
        //buscando registro por id
        $empleado = Empleado::find($id);
        if($empleado->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
