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

//mailing test: aAlways commented
//Route::get('/email', function (){
//    Mail::to('captcha2002@gmail.com')->send(new WelcomeMail());
//    return new WelcomeMail();
//});

// Basic pages
Route::get('/approach',         function () { return view('approach'); });
Route::get('/career',           function () { return view('career'); });
Route::get('/commitment',       function () { return view('commitment'); });
Route::get('/contact', 'ContactUsController@index')->name('contact');
Route::post('/contact', 'ContactUsController@store')->name('contactus_store');
Route::get('/',                 function () { return view('index'); });
Route::get('/matesglobal',      function () { return view('matesglobal'); });
Route::get('/mission',          function () { return view('mission'); });
Route::get('/privacy',          function () { return view('privacy'); });
Route::get('/safety',           function () { return view('safety'); });
Route::get('/safety_policy',    function () { return view('safety_policy'); });
Route::get('/team',             function () { return view('team'); });
Route::get('/terms',            function () { return view('terms'); });
Route::get('/vision',           function () { return view('vision'); });
Route::get('/why_choose',       function () { return view('why_choose'); });
Route::get('/workforce',        function () { return view('workforce'); });


//.............>>>Category MG AGRICULTURE STAFF<<<..................
Route::get('/agriculture-recruitment',              function () { return view('cat/agriculture/agriculture-recruitment'); });
//.............>>>Category MG CONSTRUCTION STAFF<<<..................
Route::get('/construction-recruitment',              function () { return view('cat/construction/construction-recruitment'); });
//.............>>>Category MG ENGINEERING STAFF<<<..................
Route::get('/engineering-recruitment',              function () { return view('cat/engineering/engineering-recruitment'); });
//.............>>>Category MG MAINTENANCE STAFF<<<..................
Route::get('/maintenance-recruitment',              function () { return view('cat/maintenance/maintenance-recruitment'); });
//.............>>>Category MG OFFICE STAFF<<<..................
Route::get('/assistant-accountant-recruitment',         function () { return view('cat/office-staff/assistant-accountant-recruitment'); });
Route::get('/executive-assistant-recruitment',          function () { return view('cat/office-staff/executive-assistant-recruitment'); });
Route::get('/financial-analyst-recruitment',            function () { return view('cat/office-staff/financial-analyst-recruitment'); });
Route::get('/payroll-recruitment',                      function () { return view('cat/office-staff/payroll-recruitment'); });
Route::get('/office-support-recruitment',               function () { return view('cat/office-staff/office-support-recruitment'); });
Route::get('/executive-recruitment',                    function () { return view('cat/office-staff/executive-recruitment'); });
Route::get('/receptionist-recruitment',                 function () { return view('cat/office-staff/receptionist-recruitment'); });
Route::get('/it-recruitment',                           function () { return view('cat/office-staff/it-recruitment'); });
//.............>>>Category MG SHIPBUILDING<<<..................
Route::get('/shipbuilding-staff-recruitment',           function () { return view('shipbuilding-staff-recruitment'); });  //is this okay???check it
Route::get('/shipbuilding-recruitment',                 function () { return view('cat/shipbuilding/shipbuilding-recruitment'); });
//.............>>>Category MG TRANSPORT STAFF<<<..................
Route::get('/forklift-driver-recruitment',              function () { return view('forklift-driver-recruitment'); });
Route::get('/truck-driver-recruitment',                 function () { return view('truck-driver-recruitment'); });
Route::get('/transport-staff-recruitment',              function () { return view('transport-staff-recruitment'); });
Route::get('/transport-recruitment',                    function () { return view('cat/transport/transport-recruitment'); });
//.............>>>Category MG WAREHOUSE STAFF<<<..................
Route::get('/warehouse-recruitment',                    function () { return view('cat/warehouse/warehouse-recruitment'); });
//.............>>>Category RECRUITMENT<<<..................
Route::get('/casual-labour-hire',                       function () { return view('cat/recruitment/casual-labour-hire'); });
Route::get('/international-recruitment',                function () { return view('cat/recruitment/international-recruitment'); });
Route::get('/recruitment-gold-coast',                   function () { return view('cat/recruitment/recruitment-gold-coast'); });




//...............................Accounting
Route::get('/accounts-payable-officer-recruitment',     function () { return view('accounts-payable-officer-recruitment'); });

Route::get('/bookkeeping-recruitment',                  function () { return view('bookkeeping-recruitment'); });
//...............................Administration
Route::get('/office-administrator-recruitment',         function () { return view('office-administrator-recruitment'); });
Route::get('/customer-services-officer-recruitment',    function () { return view('customer-services-officer-recruitment'); });
//...............................IT and Technology
Route::get('/it-business-analyst-recruitment',          function () { return view('it-business-analyst-recruitment'); });
Route::get('/systems-engineer-recruitment',             function () { return view('systems-engineer-recruitment'); });
Route::get('/network-administrator-recruitment',        function () { return view('network-administrator-recruitment'); });
Route::get('/database-developer-recruitment',           function () { return view('database-developer-recruitment'); });
//...............................Recruitment and selection


Route::get('/payroll-officer-recruitment',              function () { return view('payroll-officer-recruitment'); });

Route::get('/construction-staff-recruitment',           function () { return view('construction-staff-recruitment'); });


Route::get('/office-staff-recruitment',                 function () { return view('office-staff-recruitment'); });
Route::get('/international-staff-recruitment',          function () { return view('international-staff-recruitment'); });
Route::get('/coordinator-recruitment',                  function () { return view('coordinator-recruitment'); });

Route::get('/helpdesk-officer-recruitment',             function () { return view('helpdesk-officer-recruitment'); });
Route::get('/mail-sorter-recruitment',                  function () { return view('mail-sorter-recruitment'); });
//.............>>>Category MG IT STAFF<<<.................
//.............>>>Category Industries<<<..................
Route::get('/warehouse-staff-recruitment',              function () { return view('warehouse-staff-recruitment'); });

Route::get('/garden-maintenance-staff-recruitment ',    function () { return view('garden-maintenance-staff-recruitment'); });
Route::get('/process-worker-recruitment',               function () { return view('process-worker-recruitment'); });



//.............>>>Category MG GLOBAL STAFF<<<..................
//.............>>>Category MG MAINTENANCE STAFF<<<..................
//.............>>>Category MG LABOURER<<<..................


//.............>>>Category: Parking / temporaty<<<..................
Route::get('/security-guard-recruitment',               function () { return view('security-guard-recruitment'); });
Route::get('/land-surveyor-recruitment',                function () { return view('land-surveyor-recruitment'); });
Route::get('/electrical-lineman-recruitment',           function () { return view('electrical-lineman-recruitment'); });

Route::get('/labour-hire-company',              function () { return view('labour-hire-company'); });
Route::get('/farm-hand-recruitment',                    function () { return view('farm-hand-recruitment'); });
Route::get('/fruit-picking-recruitment',                function () { return view('fruit-picking-recruitment'); });
Route::get('/chicken-catcher-recruitment',              function () { return view('chicken-catcher-recruitment'); });
Route::get('/agriculture-staff-recruitment',            function () { return view('agriculture-staff-recruitment'); });

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

