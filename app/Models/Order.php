<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'webs_id',
        'domain_name',
        'status',
        'price',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function web()
    {
        return $this->belongsTo(Web::class);
    }
}
