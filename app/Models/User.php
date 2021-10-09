<?php

namespace App\Models;
use App\Models\Help;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'photo',
        'name',
        'username',
        'address',
        'email',
        'password',
        'id_card',
        'contact'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getPhotoAttribute($value)
    {
        return url('storage/' . $value);
    }

    public function getIdCardAttribute($value)
    {
        return url('storage/' . $value);
    }

    public function Help(){
        //ngambil user dari user utama 1
        return $this->belongsTo(Help::class, 'user_id', 'id');
    }
}
