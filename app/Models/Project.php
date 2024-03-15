<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function categories(){
        return $this->belongsTo(Category::class);
    }


    protected $fillable = [
        'name',
        'descripcion',
        'url',
        'image',
        'start_date',
        'end_date',
        'estado',
        'category_id',
    ];
}
