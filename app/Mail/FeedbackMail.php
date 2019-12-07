<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class FeedbackMail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Array $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->to(['matesglobal.it@gmail.com', 'gdpc2025@gmail.com'])
        ->from($this->data['email'], $this->data['name'])
        ->replyTo($this->data['email'], $this->data['name'])
        ->view('layouts.mail_templates.feedback_form')
        ->subject('New Customer Equiry from MatesWorkforce.com.au');
    }
}
