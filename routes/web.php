<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

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

//mailing part
Route::get('/email', function (){

    Mail::to('email@email.com')->send(new WelcomeMail());
    return new WelcomeMail();
});

//define routing
Route::get('/', function () { return view('index'); });
Route::get('/approach', function () { return view('approach'); });
Route::get('/commitment', function () { return view('commitment'); });
Route::get('/vision', function () { return view('vision'); });
Route::get('/team', function () { return view('team'); });
Route::get('/why_choose', function () { return view('why_choose'); });
Route::get('/matesglobal', function () { return view('matesglobal'); });
Route::get('/mission', function () { return view('mission'); });
Route::get('/safety', function () { return view('safety'); });
Route::get('/why_choose', function () { return view('why_choose'); });
Route::get('/workforce', function () { return view('workforce'); });
Route::get('/career', function () { return view('career'); });
Route::get('/safety_policy', function () { return view('safety_policy'); });
Route::get('/privacy', function () { return view('privacy'); });
Route::get('/terms', function () { return view('terms'); });


Route::get('/contact', 'ContactUsController@index')->name('contact');
Route::post('/contact', 'ContactUsController@store')->name('contactus_store');
//changed code here

//Route::get('test', function () {
//
//    $user = [
//        'name' => 'Mahedi Hasan',
//        'info' => 'Laravel Developer'
//    ];
//
//    \Mail::to('mail@codechief.org')->send(new \App\Mail\WelcomeMail($user));
//
//    dd("success");
//
//});
//Route::post('/contact', 'ContactUsController@send')->name('');

