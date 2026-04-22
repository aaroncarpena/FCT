<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receta extends Model
{
    use HasFactory;
    protected $table = 'recetas';
    protected $fillable = [
        'title',
        'slug',
        'except',
        'body',
        'prep_time',
        'cook_time',
        'servings',
        'difficulty',
        'ingredients',
        'status',
        'published_at',
    ];

    protected $casts = [
        'ingredients'  => 'array',
        'published_at' => 'datetime',
    ];
}
