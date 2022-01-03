<!--Realizando la extension de la pagina master llamada app-->
@extends('app')
<!--Creando una seccion que se llame igual al yield de la master-->
@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('todos')}}" method="POST">
            @csrf

            @if(session('success'))
                <h6 class="alert alert-success">{{session('success')}}</h6>
            @endif        
            <!--Creando un mensaje de error relacionado al name del input (title)
            la variable message esta agregada a todas las vistas y muestra el mensaje
            de error en cuestion-->
            @error('title')
                <h6 class="alert alert-danger">{{$message}}</h6>
            @enderror            
            <div class="mb-3">
                <label for="title" class="form-label">Título de la tarea</label>
                <input type="text" class="form-control" name="title">                
            </div>            
            <div class="mb-3">
                <label for="category_id" class="form-label">Categoria de la tarea</label>
                <select name="category_id" class="form-select">
                    @foreach ($categories as $category)
                        <option value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Crear nueva tarea</button>
        </form>
    </div> 
    <div class="container mt-2 w-50">
        <table class="table caption-top">
            <caption>Lista de tareas</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Categoria</th> 
                    <th scope="col">Acciones</th>                
                </tr>
            </thead>
            <tbody>
                @foreach ($todos as $i)
                <tr>
                    <th scope="row">{{$i->id}}</th>
                    <td>{{$i->title}}</td> 
                    @foreach($categories as $category)
                        @if($i->category_id == $category->id)
                            <td>{{$category->name}}</td>
                        @endif
                    @endforeach                     
                    <td class="row">
                        <div class="col align-items-center d-flex">

                            <form action="{{route('todos-destroy',['id'=>$i->id])}}" method="POST">
                                @method('DELETE')
                                @csrf
                                <button class="btn btn-danger btn-sm">Eliminar</button>
                            </form>

                            <a href="{{route('todos-show',['id'=>$i->id])}}" class=" mx-1 btn btn-info btn-sm text-white">Editar</a>
                        </div>
                        <div class="col">
                            
                        </div>
                    </td>                                       
                </tr> 
                @endforeach                               
            </tbody>
        </table>
    </div>  
    @endsection    