<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CovidController;
use App\Http\Controllers\EkonomiController;
use App\Http\Controllers\JasaController;
use App\Http\Controllers\PanganController;

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

Route::group(['middleware' => 'auth'], function () {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/user', UserController::class);

    Route::get('/covid', [CovidController::class, 'covid_index'])->name('help.covid');
    Route::post('/covid/{id}/pending', [CovidController::class, 'setPendingCovid'])->name('covid.pending');
    Route::post('/covid/{id}/accepted', [CovidController::class, 'setAcceptedCovid'])->name('covid.accepted');
    Route::post('/covid/{id}/rejected', [CovidController::class, 'setRejectedCovid'])->name('covid.rejected');
    Route::get('/covid/{id}', [CovidController::class, 'detailCovid'])->name('covid.detail');

    Route::get('/ekonomi', [EkonomiController::class, 'ekonomi_index'])->name('help.ekonomi');
    Route::post('/ekonomi/{id}/pending', [EkonomiController::class, 'setPendingEkonomi'])->name('ekonomi.pending');
    Route::post('/ekonomi/{id}/accepted', [EkonomiController::class, 'setAcceptedEkonomi'])->name('ekonomi.accepted');
    Route::post('/ekonomi/{id}/rejected', [EkonomiController::class, 'setRejectedEkonomi'])->name('ekonomi.rejected');
    Route::get('/ekonomi/{id}', [EkonomiController::class, 'detailEkonomi'])->name('ekonomi.detail');

    Route::get('/pangan', [PanganController::class, 'pangan_index'])->name('help.pangan');
    Route::post('/pangan/{id}/pending', [PanganController::class, 'setPendingPangan'])->name('pangan.pending');
    Route::post('/pangan/{id}/accepted', [PanganController::class, 'setAcceptedPangan'])->name('pangan.accepted');
    Route::post('/pangan/{id}/rejected', [PanganController::class, 'setRejectedPangan'])->name('pangan.rejected');
    Route::get('/pangan/{id}', [PanganController::class, 'detailPangan'])->name('pangan.detail');

    Route::get('/jasa', [JasaController::class, 'jasa_index'])->name('help.jasa');
    Route::post('/jasa/{id}/pending', [jasaController::class, 'setPendingjasa'])->name('jasa.pending');
    Route::post('/jasa/{id}/accepted', [jasaController::class, 'setAcceptedjasa'])->name('jasa.accepted');
    Route::post('/jasa/{id}/rejected', [jasaController::class, 'setRejectedjasa'])->name('jasa.rejected');
    Route::get('/jasa/{id}', [JasaController::class, 'detailJasa'])->name('jasa.detail');

});
