<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taller extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
        'starts_at',
        'ends_at',
        'seats_total',
        'seats_taken',
        'location',
        'status',
    ];

    protected $casts = [
        'price'     => 'decimal:2',
        'starts_at' => 'datetime',
        'ends_at'   => 'datetime',
    ];

    public function enrollments()
    {
        return $this->hasMany(Apuntados::class);
    }

    public function availableSeats(): int
    {
        return $this->seats_total - $this->seats_taken;
    }

    public function isFull(): bool
    {
        return $this->seats_total > 0 && $this->seats_taken >= $this->seats_total;
    }
}
