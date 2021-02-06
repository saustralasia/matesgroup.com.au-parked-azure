<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailThankYouForYourEnquiry extends Mailable
{
    use Queueable, SerializesModels;

    public $contactUs;

    /**
     * Create a new message instance.
     *
     * @param $contactUs
     */
    public function __construct($contactUs)
    {
        //
        $this->contactUs = $contactUs;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.markdown-thank-you-for-your-enquiry')
            ->cc('enquiries@matesgroup.com.au', 'Mates Group')
            ->replyTo('enquiries@matesgroup.com.au', 'Mates Group')
            ->subject('Thank You For Your Enquiry')
            ;
    }
}
