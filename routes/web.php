<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('category')->group(function(){
    Route::get('/json_index', [CategoryController::class, 'json_index']);
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/store', [CategoryController::class, 'store']);
    Route::get('/{slug}/edit', [CategoryController::class, 'edit']);
    Route::post('/{slug}/update', [CategoryController::class, 'update']);
    Route::delete('/{slug}/delete', [CategoryController::class, 'delete']);
});

