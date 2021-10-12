<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\IOFileController;
use App\Http\Controllers\API\HelpController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('profile', [UserController::class, 'profile']);
    Route::put('update', [UserController::class, 'update']);

    Route::post('help/store', [HelpController::class, 'store']);
    Route::get('help/get-by-inisiator', [HelpController::class, 'getByInisiator']);
    Route::get('help/get-detail/{id}', [HelpController::class, 'getDetail']);

    Route::post('iofile/upload-photo-profile', [IOFileController::class, 'uploadPhotoProfile']);
    Route::post('iofile/upload-photo-help', [IOFileController::class, 'uploadPhotoHelp']);
    Route::post('iofile/upload-document', [IOFileController::class, 'uploadDocument']);
});
