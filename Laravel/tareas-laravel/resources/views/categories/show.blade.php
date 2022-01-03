<!--Realizando la extension de la pagina master llamada app-->
@extends('app')
<!--Creando una seccion que se llame igual al yield de la master-->
@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('categories.update',['category'=>$category->id])}}" method="POST">
            @method('PATCH')
            @csrf            
            @if(session('success'))
                <h6 class="alert alert-success">{{session('success')}}</h6>
            @endif        
            <!--Creando un mensaje de error relacionado al name del input (title)
            la variable message esta agregada a todas las vistas y muestra el mensaje
            de error en cuestion-->
            @error('name')
                <h6 class="alert alert-danger">{{$message}}</h6>
            @enderror            
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de la categoria</label>
                <input type="text" class="form-control" name="name" value="{{$category->name}}">                
            </div> 
            <div class="mb-3">
                <label for="color" class="form-label">Color de la categoria</label>
                <input type="color" class="form-control" name="color" value="{{$category->color}}">                
            </div>                      
            <button type="submit" class="btn btn-primary">Actualizar</button>
        </form>
    </div> 
    
    @endsection
     