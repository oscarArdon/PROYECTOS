<!--Realizando la extension de la pagina master llamada app-->
@extends('app')
<!--Creando una seccion que se llame igual al yield de la master-->
@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('todos-update',['id'=>$todo->id])}}" method="POST">
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
                <input type="text" class="form-control" name="title" value="{{$todo->title}}">                
            </div>     
            <div class="mb-3">
                <label for="category_id" class="form-label">Categoria de la tarea</label>
                <select name="category_id" class="form-select">
                    @foreach ($categories as $category)
                        <option value="{{$category->id}}" {{$todo->category_id==$category->id ? 'selected':''}}>{{$category->name}}</option>
                    @endforeach
                </select>
            </div>       
            <button type="submit" class="btn btn-primary">Actualizar</button>
        </form>
    </div> 
    
    @endsection
     