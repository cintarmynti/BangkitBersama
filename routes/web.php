<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelpController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function(){

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/help', HelpController::class);
    Route::resource('/user', UserController::class);
    Route::get('/covid', [HelpController::class, 'covid_index'])->name('help.covid');
    Route::get('/ekonomi', [HelpController::class, 'ekonomi_index'])->name('help.ekonomi');
    Route::get('/pangan', [HelpController::class, 'pangan_index'])->name('help.pangan');
    Route::get('/jasa', [HelpController::class, 'jasa_index'])->name('help.jasa');



});
