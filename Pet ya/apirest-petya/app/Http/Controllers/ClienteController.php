<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Cliente;

use Illuminate\Http\Request;

class ClienteController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $clientes = Cliente::all();
        if(is_null($clientes) || $clientes == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($clientes,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Cliente para guardar nuevo registro
        $cliente = new Cliente();
        //asignando datos del request al objeto
        $cliente->nombre = $request->input('nombre');
        $cliente->correo = $request->input('correo');
        $cliente->foto_perfil = $request->input('foto_perfil');
        $cliente->telefono = $request->input('telefono');
        $cliente->password = $request->input('password');
        $cliente->categoria = $request->input('categoria');
        //guardando cliente
        if($cliente->save()){
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
        $cliente = Cliente::find($id);
        return json_encode($cliente);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $cliente = Cliente::find($id);
        //asignando datos del request al objeto
        $cliente->nombre = $request->input('nombre');
        $cliente->correo = $request->input('correo');
        $cliente->foto_perfil = $request->input('foto_perfil');
        $cliente->telefono = $request->input('telefono');
        $cliente->password = $request->input('password');
        $cliente->categoria = $request->input('categoria');
        //guardando cambios en el registro
        if($cliente->save()){
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
        $cliente = Cliente::find($id);
        if($cliente->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
