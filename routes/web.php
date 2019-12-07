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

Route::get('/', function () {
    return view('index');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/requirement', function () {
    return view('requirement');
});
Route::get('/specialisasion', function () {
    return view('specialisasion');
});
Route::get('/submit', function () {
    return view('submit');
}); 
Route::get('/contact', function () {
    return view('contact');
});

//Contacts / feedback form
Route::post('/feedback', 'FeedbackController@store')->name('feedbackForm.store');