<!--Realizando la extension de la pagina master llamada app-->
@extends('app')
<!--Creando una seccion que se llame igual al yield de la master-->
@section('content')
    <div class="container w-25 border p-4 mt-4">
        <form action="{{route('categories.store')}}" method="POST">
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
                <input type="text" class="form-control" name="name">                
            </div> 
            <div class="mb-3">
                <label for="color" class="form-label">Color de la categoria</label>
                <input type="color" class="form-control" name="color">                
            </div>             
            <button type="submit" class="btn btn-primary">Crear nueva categoria</button>
        </form>
    </div> 
    <div class="container mt-2 w-50">
        <table class="table caption-top">
            <caption>Lista de categorias</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categoria</th> 
                    <th scope="col">Color</th> 
                    <th scope="col">Acciones</th>                
                </tr>
            </thead>
            <tbody>
                @foreach ($categorias as $i)
                <tr>
                    <th scope="row">{{$i->id}}</th>
                    <td>{{$i->name}}</td> 
                    <td><span class="color-container" style="background-color:{{$i->color}}"></span></td> 
                    <td class="row">
                        <div class="col align-items-center d-flex">

                            <form action="{{route('categories.destroy',['category'=>$i->id])}}" method="POST">
                                @method('DELETE')
                                @csrf
                                <button class="btn btn-danger btn-sm">Eliminar</button>
                            </form>

                            <a href="{{route('categories.show',['category'=>$i->id])}}" class=" mx-1 btn btn-info btn-sm text-white">Editar</a>
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