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

Route::get('/', 'Matesgroup@index')->name('index');
Route::get('/approach', 'Matesgroup@approach')->name('approach');
Route::get('/commitment', 'Matesgroup@commitment')->name('commitment');
Route::get('/vision', 'Matesgroup@vision')->name('vision');
Route::get('/mission', 'Matesgroup@mission')->name('mission');
Route::get('/safety', 'Matesgroup@safety')->name('safety');
Route::get('/team', 'Matesgroup@team')->name('team');
Route::get('/why_choose', 'Matesgroup@why_choose')->name('why_choose');
Route::get('/workforce', 'Matesgroup@workforce')->name('workforce');
Route::get('/matesglobal', 'Matesgroup@matesglobal')->name('matesglobal');
Route::get('/career', 'Matesgroup@career')->name('career');
Route::get('/safety_policy', 'Matesgroup@safety_policy')->name('safety_policy');
Route::get('/privacy', 'Matesgroup@privacy')->name('privacy');
Route::get('/terms', 'Matesgroup@terms')->name('terms');

Route::get('/contact', 'MatesgroupController@contact')->name('contact');
Route::post('/contact', 'MatesgroupController@create');
