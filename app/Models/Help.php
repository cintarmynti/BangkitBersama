<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Help extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function getHelpCategory(){
        //dalam tabel help memiliki banyak properti dari HelpCategory
        return $this->hasMany('App\Models\HelpCategory', 'id', 'Help_category_id');
    }

    public function getHelpReview(){
        //tiap orang review 1 kali
        return $this->hasOne('App\Models\HelpReview', 'help_id', 'id');
    }

    public function getUserRelation(){
        //ngambil user dari user utama 1
        return $this->belongsTo('App\Models\User', 'id', 'user_id');
    }


}
