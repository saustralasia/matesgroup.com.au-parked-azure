<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactUs;

class ContactUsController extends Controller
{
    public function index ()
    {
        return view('contact');
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
        return redirect()->route('contact')->with('status', 'Thank you for your message!');
    }
}
