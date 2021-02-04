<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmittedByTheVisitorEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contactUs;

    /**
     * Create a new event instance.
     *
     * @param $contactUs
     */
    public function __construct($contactUs)
    {
        //
        $this->contactUs = $contactUs;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
