<?php

use Illuminate\Support\Facades\Route;

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

Route::resource('users', 'UserController');

// Route::delete('users/{$id}', 'UserController@delete')->name('users.delete');
//Route::post('users', 'UserController@insert')->name('users.insert');
// Route::get('users/{id}', 'UserController@show')->name('users.show');
// Route::get('users', 'UserController@index')->name('users.index');

Route::get('/', function () {
    return view('welcome');
});
