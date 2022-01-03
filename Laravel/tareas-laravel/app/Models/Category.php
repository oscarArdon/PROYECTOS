<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//importando modelo todo
use App\Models\Todo;

class Category extends Model
{
    use HasFactory;

    //retornando todos que correspondan a una categoria
    public function todos(){
        return $this->hasMany(Todo::class);
    }
}
