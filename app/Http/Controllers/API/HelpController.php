<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Help;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class HelpController extends Controller
{
    public function store()
    {
        $input = request()->all();

        $validator = Validator::make($input, [
            'help_category_id' => 'required',
            'photo' => 'required',
            'name' => 'required',
            'description' => 'required',
            'quota' => 'required',
            'end_date' => 'required',
        ]);

        if ($validator->fails()) {
            return ResponseFormatter::failed('Create New Help Failed!', 401, $validator->errors());
        }

        $user = Auth::user();
        $input['user_id'] = $user->id;
        $data = Help::create($input);

        return ResponseFormatter::success('Create New Help Success!', $data);
    }

    public function getByInisiator()
    {
        $user = Auth::user();

        $data = Help::where('user_id', $user->id)->get();

        return ResponseFormatter::success('Get Help By Inisiator Success!', $data);
    }

    public function getDetail($id)
    {
        $data = Help::where('id', $id)->with('user', 'category', 'status')->first();

        return ResponseFormatter::success('Get Help Detail Inisiator Success!', $data);
    }
}
