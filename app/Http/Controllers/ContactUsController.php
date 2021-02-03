<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;

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
            'message' => 'required|max:2000|min:10',
//            'newsletter' => 'nullable'
        ]);

        ContactUs::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'newsletter' => $request->has('newsletter'),
            'ip_address' => $request->ip()
        ]);

        // Mail::to('email@email.com')->send(new WelcomeMail());
//       Mail::send('emails.welcome', $contact, function ($mail) use ($contact){
//           $mail->from($contact['email'], $contact['name'])
//               ->to('md.talatcse@gmail.com', 'Talat');
//               //->subject
//       });

        return redirect()->route('ContactUs_index')->with('status', 'Thank you for your message!');
        //Mailing code
//        $inputs=[
//            'name' => $data->input('name'),
//            'email' => $data->input('email'),
//            'phone' => $data->input('phone'),
//            'nationality' => $data->input('nationality'),
//            'bodyMessage' => $data->input('message'),
//        ];

//        Mail::send('emails.contactmsg', $contact, function ($mail) use ($contact){
//            $mail->from($contact['email'], $contact['name'])
//                ->to('md.talatcse@gmail.com', 'Talat');
//                //->subject
//        });
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
