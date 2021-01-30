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
Route::get('/contact-us', 'ContactUsController@index')->name('contactus_index');
Route::post('/contact-us', 'ContactUsController@store')->name('contactus_store');
Route::get('/',                 function () { return view('index'); });
Route::get('/mates-global',      function () { return view('mates-global'); });
Route::get('/mission',          function () { return view('mission'); });
Route::get('/privacy-policy',          function () { return view('privacy-policy'); });
Route::get('/safety',           function () { return view('safety'); });
Route::get('/safety-policy',    function () { return view('safety-policy'); });
Route::get('/team',             function () { return view('team'); });
Route::get('/terms-and-conditions',            function () { return view('terms-and-conditions'); });
Route::get('/vision',           function () { return view('vision'); });
Route::get('/why-choose',       function () { return view('why-choose'); });
Route::get('/mates-workforce',        function () { return view('mates-workforce'); });



//.............>>>Category MG AGRICULTURE STAFF<<<..................
Route::get('/agriculture-recruitment',                  function () { return view('cat/agriculture/agriculture-recruitment'); });

//.............>>>Category MG CONSTRUCTION STAFF<<<..................
Route::get('/construction-recruitment',                 function () { return view('cat/construction/construction-recruitment'); });

//.............>>>Category MG ENGINEERING STAFF<<<..................
Route::get('/engineering-recruitment',                  function () { return view('cat/engineering/engineering-recruitment'); });

//.............>>>Category MG MAINTENANCE STAFF<<<..................
Route::get('/maintenance-recruitment',                  function () { return view('cat/maintenance/maintenance-recruitment'); });


//.............>>>Category MG OFFICE STAFF<<<..................
Route::get('/office-support-recruitment',               function () { return view('cat/office-staff/office-support-recruitment'); });
Route::get('/executive-recruitment',                    function () { return view('cat/office-staff/executive-recruitment'); });
Route::get('/receptionist-recruitment',                 function () { return view('cat/office-staff/receptionist-recruitment'); });
//............................................Accounting
Route::get('/accounting-recruitment',                   function () { return view('cat/office-staff/accounting/accounting-recruitment'); });
Route::get('/assistant-accounting-recruitment',         function () { return view('cat/office-staff/accounting/assistant-accounting-recruitment'); });
Route::get('/financial-analyst-recruitment',            function () { return view('cat/office-staff/accounting/financial-analyst-recruitment'); });
Route::get('/payroll-recruitment',                      function () { return view('cat/office-staff/accounting/payroll-recruitment'); });
//............................................Administration
Route::get('/executive-assistant-recruitment',          function () { return view('cat/office-staff/administration/executive-assistant-recruitment'); });
//............................................IT and Technology
Route::get('/it-recruitment',                           function () { return view('cat/office-staff/it-and-technology/it-recruitment'); });


//.............>>>Category MG SHIPBUILDING<<<..................
Route::get('/shipbuilding-recruitment',                 function () { return view('cat/shipbuilding/shipbuilding-recruitment'); });

//.............>>>Category MG TRANSPORT STAFF<<<..................
Route::get('/transport-recruitment',                    function () { return view('cat/transport/transport-recruitment'); });

//.............>>>Category MG WAREHOUSE STAFF<<<..................
Route::get('/warehouse-recruitment',                    function () { return view('cat/warehouse/warehouse-recruitment'); });
//.............>>>Category RECRUITMENT<<<..................
Route::get('/casual-labour-hire',                       function () { return view('cat/recruitment/casual-labour-hire'); });
Route::get('/international-recruitment',                function () { return view('cat/recruitment/international-recruitment'); });
Route::get('/recruitment-darwin',                       function () { return view('cat/recruitment/recruitment-darwin'); });
Route::get('/recruitment-gold-coast',                   function () { return view('cat/recruitment/recruitment-gold-coast'); });
Route::get('/recruitment-parramatta',                   function () { return view('cat/recruitment/recruitment-parramatta'); });
Route::get('/recruitment-sunshine-coast',               function () { return view('cat/recruitment/recruitment-sunshine-coast'); });
Route::get('/temporary-recruitment',                    function () { return view('cat/recruitment/temporary-recruitment'); });


//.............>>>Category BLOG <<<..................
Route::get('/blog/benefits-of-contract-work',               function () { return view('cat/blog/benefits-of-contract-work'); });
Route::get('/blog/career-development-tips',                 function () { return view('cat/blog/career-development-tips'); });
Route::get('/blog/how-covid-19-will-reshape-the-future-of-recruitment',              function () { return view('cat/blog/how-covid-19-will-reshape-the-future-of-recruitment'); });
Route::get('/blog/how-to-get-a-new-job-quickly',            function () { return view('cat/blog/how-to-get-a-new-job-quickly'); });
Route::get('/blog/how-to-negotiate-the-salary-you-want',    function () { return view('cat/blog/how-to-negotiate-the-salary-you-want'); });
Route::get('/blog/how-to-prepare-for-a-job-interview',      function () { return view('cat/blog/how-to-prepare-for-a-job-interview'); });
Route::get('/blog/qualities-of-an-effective-leader',        function () { return view('cat/blog/qualities-of-an-effective-leader'); });
Route::get('/blog/resume-writing-tips',                     function () { return view('cat/blog/resume-writing-tips'); });
Route::get('/blog/why-upskilling-is-important',             function () { return view('cat/blog/why-upskilling-is-important'); });
Route::get('/blog/workplace-mental-health-strategy',        function () { return view('cat/blog/workplace-mental-health-strategy'); });
Route::get('/blog/how-disruptive-technology-affects-business',                       function () { return view('cat/blog/how-disruptive-technology-affects-business'); });
Route::get('/blog/how-to-effectively-review-resumes',       function () { return view('cat/blog/how-to-effectively-review-resumes'); });
Route::get('/blog/how-to-hire-human-resources-specialist',  function () { return view('cat/blog/how-to-hire-human-resources-specialist'); });
Route::get('/blog/how-to-start-your-own-business',          function () { return view('cat/blog/how-to-start-your-own-business'); });
Route::get('/blog/how-to-write-a-job-ad',                   function () { return view('cat/blog/how-to-write-a-job-ad'); });
Route::get('/blog/interview-questions-for-employers',       function () { return view('cat/blog/interview-questions-for-employers'); });
Route::get('/blog/recruitment-process-steps',               function () { return view('cat/blog/recruitment-process-steps'); });
Route::get('/blog/how-to-hire-an-employee',                 function () { return view('cat/blog/how-to-hire-an-employee'); });













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
Route::get('/shipbuilding-staff-recruitment',           function () { return view('shipbuilding-staff-recruitment'); });  //is this okay???check it

Route::get('/forklift-driver-recruitment',              function () { return view('forklift-driver-recruitment'); });
Route::get('/truck-driver-recruitment',                 function () { return view('truck-driver-recruitment'); });
Route::get('/transport-staff-recruitment',              function () { return view('transport-staff-recruitment'); });

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

