<?php

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

// Route::get('/', function () {
//     return view('website');
// });

Route::get('/','SiteController@index');
Route::get('/login', 'SiteController@login');
Route::get('/{vue?}','SiteController@index')->where('vue', '[\/\w\.-]*');