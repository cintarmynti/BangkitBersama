<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HelpCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function getHelpRelation(){
        //ngambil id category dari main
        return $this->belongsTo('App\Models\Help', 'help_category_id', 'id');
    }
}
