<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string'
        ]);

        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]);

        // Send email notification
        Mail::to('latarana4u@gmail.com')->send(new \App\Mail\ContactFormSubmission($contact));

        return response()->json([
            'message' => 'Message sent successfully!',
            'contact' => $contact
        ], 201);
    }
}