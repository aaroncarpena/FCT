<?php

use App\Http\Controllers\API\ApiControllerTaller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthApiController;
use App\Http\Controllers\API\ApiControllerReceta;
use App\Http\Controllers\API\ApiControllerProducto;
use App\Http\Controllers\API\ApiControllerApuntados;
use App\Http\Controllers\API\ApiControllerUser;
use App\Http\Controllers\API\ApiControllerArticulo;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthApiController::class, 'register']);
Route::post('/login', [AuthApiController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthApiController::class, 'logout'])->name('logout');


    Route::get('/recetas', [ApiControllerReceta::class, 'index']);
    Route::get('/recetas/{id}', [ApiControllerReceta::class, 'show']);
    Route::post('/recetas', [ApiControllerReceta::class, 'store']);
    Route::put('/recetas/{id}', [ApiControllerReceta::class, 'update']);
    Route::delete('/recetas/{id}', [ApiControllerReceta::class, 'destroy']);

    Route::get('/productos', [ApiControllerProducto::class, 'index']);
    Route::get('/productos/{id}', [ApiControllerProducto::class, 'show']);
    Route::post('/productos/{id}', [ApiControllerProducto::class, 'store']);
    Route::put('/productos/{id}', [ApiControllerProducto::class, 'update']);
    Route::delete('/productos/{id}', [ApiControllerProducto::class, 'destroy']);

    Route::get('/taller', [ApiControllerTaller::class, 'index']);
    Route::get('/taller/{id}', [ApiControllerTaller::class, 'show']);
    Route::post('/taller', [ApiControllerTaller::class, 'store']);
    Route::put('/taller/{id}', [ApiControllerTaller::class, 'update']);
    Route::delete('/taller/{id}', [ApiControllerTaller::class, 'destroy']);

    Route::get('/apuntados', [ApiControllerApuntados::class, 'index']);
    Route::get('/apuntados/{id}', [ApiControllerApuntados::class, 'show']);
    Route::post('/apuntados', [ApiControllerApuntados::class, 'store']);
    Route::put('/apuntados/{id}', [ApiControllerApuntados::class, 'update']);
    Route::delete('/apuntados/{id}', [ApiControllerApuntados::class, 'destroy']);

    Route::get('/usuarios', [ApiControllerUser::class, 'index']);
    Route::get('/usuarios/{id}', [ApiControllerUser::class, 'show']);
    Route::post('/usuarios', [ApiControllerUser::class, 'store']);
    Route::put('/usuarios/{id}', [ApiControllerUser::class, 'update']);
    Route::delete('/usuarios/{id}', [ApiControllerUser::class, 'destroy']);

    Route::get('/articulos', [ApiControllerArticulo::class, 'index']);
    Route::get('/articulos/{id}', [ApiControllerArticulo::class, 'show']);
    Route::post('/articulos', [ApiControllerArticulo::class, 'store']);
    Route::put('/articulos/{id}', [ApiControllerArticulo::class, 'update']);
    Route::delete('/articulos/{id}', [ApiControllerArticulo::class, 'destroy']);
});
