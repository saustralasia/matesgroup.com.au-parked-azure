<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

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
//Route::get('/', 'index');
//Route::get('/', function () {
//    return view('index');
//});
//Route::get('/approach', function () {
//    return view('approach');
//});
Route::get('/email', function (){

    Mail::to('email@email.com')->send(new WelcomeMail());
    return new WelcomeMail();
});

Route::get('/test', function () {
    return view('test');
});
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

Route::get('/contact', 'ContactUsController@index')->name('contact');
Route::post('/contact', 'ContactUsController@store')->name('contactus_store');
//changed code here


//Route::post('/contact', 'ContactUsController@send')->name('');

