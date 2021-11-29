<!--Realizando la extension de la pagina master llamada app-->
@extends('app')
<!--Creando una seccion que se llame igual al yield de la master-->
@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('todos')}}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="title" class="form-label">Título de la tarea</label>
                <input type="text" class="form-control" name="title">                
            </div>            
            <button type="submit" class="btn btn-primary">Crear nueva tarea</button>
        </form>
    </div>
@endsection