<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apuntados extends Model
{
    use HasFactory;

    protected $fillable = [
        'workshop_id',
        'user_id',
        'name',
        'email',
        'phone',
    ];

    public function taller()
    {
        return $this->belongsTo(Taller::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
