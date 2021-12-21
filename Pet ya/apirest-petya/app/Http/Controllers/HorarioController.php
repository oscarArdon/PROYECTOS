<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Horario;

use Illuminate\Http\Request;

class HorarioController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $horarios = Horario::all();
        if(is_null($horarios) || $horarios == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($horarios,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Horario para guardar nuevo registro
        $horario = new Horario();
        //asignando datos del request al objeto
        $horario->dia = $request->input('dia');
        $horario->hora_inicio = $request->input('hora_inicio');
        $horario->hora_fin = $request->input('hora_fin');
        $horario->empleado_id = $request->input('empleado_id');
        
        //guardando cliente
        if($horario->save()){
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
        $horario = Horario::find($id);
        return json_encode($horario);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $horario = Horario::find($id);
        //asignando datos del request al objeto
        $horario->dia = $request->input('dia');
        $horario->hora_inicio = $request->input('hora_inicio');
        $horario->hora_fin = $request->input('hora_fin');
        $horario->empleado_id = $request->input('empleado_id');
        //guardando cambios en el registro
        if($horario->save()){
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
        $horario = Horario::find($id);
        if($horario->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
