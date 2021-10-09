<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Help;

class HelpCategory extends Model
{
    use HasFactory;

    protected $fillable = ['id','name'];


}
