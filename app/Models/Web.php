<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Web extends Model
{
    /** @use HasFactory<\Database\Factories\WebFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'image',
        'url',
        'price',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
