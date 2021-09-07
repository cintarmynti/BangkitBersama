<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HelpRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'help_id',
        'user_id',
        'reason',
        'help_request_status_id'
    ];
}
