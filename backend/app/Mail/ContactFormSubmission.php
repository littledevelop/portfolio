<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Mail\Mailable;

class ContactFormSubmission extends Mailable
{
    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->markdown('emails.contact-form')
                    ->subject('New Contact Form Submission');
    }
} 