<?php

namespace App\Http\Controllers;

use App\Events\ContactFormSubmittedByTheVisitorEvent;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('contact-us');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:40|min:2',
            'email' => 'required',
            'phone' => 'nullable|numeric',
            'message' => 'required|max:1024|min:2',
            'newsletter' => 'nullable|boolean'
        ]);

        $case_number = rand ( 10000000 , 19999999 );
        $contactUs = ContactUs::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'newsletter' => $request->has('newsletter'),
            'case_number' => $case_number,
            'ip_address' => $request->ip()
        ]);
//dd($contactUs);

        event(new ContactFormSubmittedByTheVisitorEvent($contactUs));





//       Mail::send('emails.thank-you-for-your-enquiry', $contactUs, function ($mail) use ($contactUs){
//           $mail->from($contactUs['email'], $contactUs['name'])
//               ->to('md.talatcse@gmail.com', 'Talat')
//               'reply_to' => ['address' => 'example@example.com', 'name' => 'App Name'],
//               ->subject('Thank you for your enquiry')
//           ;
//       });

        return redirect()->route('ContactUs_index')->with('status', 'Thank you for your enquiry. One of our friendly account managers will be in touch with you shortly.');



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function show(ContactUs $contactUs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function edit(ContactUs $contactUs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactUs $contactUs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactUs $contactUs)
    {
        //
    }
}
