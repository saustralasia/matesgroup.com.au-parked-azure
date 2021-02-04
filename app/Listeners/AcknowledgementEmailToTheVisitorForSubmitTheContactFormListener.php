<?php

namespace App\Listeners;

use App\Mail\MailThankYouForYourEnquiry;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class AcknowledgementEmailToTheVisitorForSubmitTheContactFormListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        Mail::to($event->contactUs->email)->send(new MailThankYouForYourEnquiry($event->contactUs));
    }
}
