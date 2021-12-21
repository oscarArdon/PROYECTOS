<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\FormularioCita;

use Illuminate\Http\Request;

class FormularioCitaController extends Controller
{
    
    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $formCitas = FormularioCita::all();
        if(is_null($formCitas) || $formCitas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($formCitas,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Cliente para guardar nuevo registro
        $formCita = new FormularioCita();
        //asignando datos del request al objeto
        $formCita->fecha_cita = $request->input('fecha_cita');
        $formCita->hora = $request->input('hora');
        $formCita->nombre_mascota = $request->input('nombre_mascota');
        $formCita->especie = $request->input('especie');
        $formCita->raza = $request->input('raza');
        $formCita->edad = $request->input('edad');
        $formCita->sexo = $request->input('sexo');
        $formCita->color = $request->input('color');
        $formCita->vacunacion = $request->input('vacunacion');
        $formCita->motivo = $request->input('motivo');
        $formCita->vacunas_realizadas = $request->input('vacunas_realizadas');
        $formCita->id_empleado = $request->input('id_empleado');
        $formCita->peso = $request->input('peso');
        $formCita->pulso = $request->input('pulso');
        $formCita->temperatura = $request->input('temperatura');
        $formCita->cliente_id = $request->input('cliente_id');
        //guardando cliente
        if($formCita->save()){
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
        $formCita = FormularioCita::find($id);
        return json_encode($formCita); 
    }

    public function update(Request $request, $id)
    {
        //creando obj del modelo Cliente para guardar nuevo registro
        $formCita = FormularioCita::find($id);
        //asignando datos del request al objeto
        $formCita->fecha_cita = $request->input('fecha_cita');
        $formCita->hora = $request->input('hora');
        $formCita->nombre_mascota = $request->input('nombre_mascota');
        $formCita->especie = $request->input('especie');
        $formCita->raza = $request->input('raza');
        $formCita->edad = $request->input('edad');
        $formCita->sexo = $request->input('sexo');
        $formCita->color = $request->input('color');
        $formCita->vacunacion = $request->input('vacunacion');
        $formCita->motivo = $request->input('motivo');
        $formCita->vacunas_realizadas = $request->input('vacunas_realizadas');
        $formCita->id_empleado = $request->input('id_empleado');
        $formCita->peso = $request->input('peso');
        $formCita->pulso = $request->input('pulso');
        $formCita->temperatura = $request->input('temperatura');
        $formCita->cliente_id = $request->input('cliente_id');
        //guardando cliente
        if($formCita->save()){
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
        $formCita = FormularioCita::find($id);
        if($formCita->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($formCita,$code);
    }
    public function tabla(){//codigo para mostrar en la tabla de formCitas
        $tabla = DB::table('formulario_citas')
        ->join('clientes', 'clientes.id', '=', 'formulario_citas.cliente_id')
        ->join('empleados', 'empleados.id', '=', 'formulario_citas.id_empleado')
        ->select('formulario_citas.id','formulario_citas.nombre_mascota','formulario_citas.especie', 'formulario_citas.raza','formulario_citas.fecha_cita','formulario_citas.hora', 'clientes.nombre as nombre_cliente', 'empleados.nombres as nombre_emple','empleados.apellidos as apel_emple')
        ->get();
        return response()->json($tabla);
    }
}
