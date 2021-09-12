<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\IOFileController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('profile', [UserController::class, 'profile']);
    Route::put('update', [UserController::class, 'update']);

    Route::post('iofile/upload-photo-profile', [IOFileController::class, 'uploadPhotoProfile']);
    Route::post('iofile/upload-document', [IOFileController::class, 'uploadDocument']);
});
