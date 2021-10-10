<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::where('role_id', '!=', 1)->get();
        return view('pages.user.index', [
            'users' => $user
        ]);
    }

    public function detail(User $user)
    {
        return view('pages.user.detail', [
            'user' => $user
        ]);
    }

    public function verified()
    {
        User::where('id', request('id'))->update([
            'user_status_id' => 3
        ]);
        Session::flash('message', 'Verification User Successfull');
        return redirect()->back();
    }

    public function unverified()
    {
        User::where('id', request('id'))->update([
            'user_status_id' => 1
        ]);
        Session::flash('message', 'Unverification User Successfull');
        return redirect()->back();
    }
}
