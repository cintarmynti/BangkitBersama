<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\HelpCategory;
use App\Models\HelpStatus;

class Help extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'help_category_id',
        'user_id',
        'photo',
        'name',
        'description',
        'quota',
        'end_date',
        'help_status_id'
    ];


    public function user()
    {

        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function category()
    {
        return $this->hasOne(HelpCategory::class, 'id', 'help_category_id');
    }

    public function status()
    {
        return $this->hasOne(HelpStatus::class, 'id', 'help_status_id');
    }
}
