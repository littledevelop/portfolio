@component('mail::message')
# New Contact Form Submission

**Name:** {{ $contact->name }}
**Email:** {{ $contact->email }}

**Message:**
{{ $contact->message }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent 