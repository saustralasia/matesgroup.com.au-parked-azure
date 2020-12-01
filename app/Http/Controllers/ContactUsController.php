<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactUs;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

use App\Mail\WelcomeMail;



class ContactUsController extends Controller
{
    public function index ()
    {
        return view('contact-us');
    }

    public function store(Request $data)
    {

        $data->validate([
            'name' => 'required|regex:/^[a-z A-Z]+$/u|max:25|min:3',
            'email' => 'required',
            'phone' => 'nullable|numeric',
            'nationality' => 'nullable|required',
            'message' => 'required|max:2000|min:10'
        ]);
        $contact = new ContactUs();
        $contact->name = $data->name;
        $contact->email = $data->email;
        $contact->phone = $data->phone;
        $contact->nationality = $data->nationality;
        $contact->message = $data->message;
        $contact->save();

       // Mail::to('email@email.com')->send(new WelcomeMail());
//       Mail::send('emails.welcome', $contact, function ($mail) use ($contact){
//           $mail->from($contact['email'], $contact['name'])
//               ->to('md.talatcse@gmail.com', 'Talat');
//               //->subject
//       });

        return redirect()->route('contactus_index')->with('status', 'Thank you for your message!');
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

//    public function send(Request $request)
//    {
//        $this->validate($request,[
//            'name' => 'required',
//            'email' => 'required',
//            'phone' =>'required',
//            'nationality' =>'required',
//            'message' =>'required',
//        ]);
//
//        $data = array(
//          'name'=>$request->name,
//          'message'  =>$request->message
//        );
//
//        Mail::to('md.talatcse@yahoo.com')->send(new SendMail($data));
//        return view('contact');
//    }
}
