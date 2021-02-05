@extends('layouts.page')

@section('title', 'Mates Group: Contact Us')
@section('meta_description', 'We are providing recruitment & labour hire solutions to meet any hiring needs you have. Mates Group provides services across Australia and worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')

    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/blogs/contact-us2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title border-bottom">Contact Us</h1>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="address">
                    <h5>HEAD OFFICE</h5>
                    <p>Level 1, 35 39 Auburn Road</p>
                    <p>Auburn NSW 2144, Australia</p>
                    <p>Landline: <a href="tel:+61287333549">(02) 8733 3549</a></p>
                    <p>Email: <a href="mailto:enquiries@matesgroup.com.au">enquiries@matesgroup.com.au</a></p>
                </div>

            </div>
            <div class="col-md-6">
                <div class="address">
                    <h5>NEW ZEALAND OFFICE</h5>
                    <p>Level 8, West Plaza Business Center</p>
                    <p>3 Albert St, Auckland 1010, New Zealand</p>
                    <p>Landline: <a href="tel:+6499301278">(64) 9930 1278</a></p>
                    <p>Email: <a href="mailto:enquiries@matesgroup.com.au">enquiries@matesgroup.com.au</a></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="address">
                    <h5>SINGAPORE OFFICE</h5>
                    <p>30 Roberts Lane, #02 01</p>
                    <p>Singapore 218309</p>
                    <p>Landline: <a href="tel:+6563966293">(65) 6396 6293</a> / <a href="tel:+6563415238">(65) 6341 5238</a></p>
                    <p>Email: <a href="mailto:enquiries@matesgroup.com.au">enquiries@matesgroup.com.au</a></p>
                </div>
            </div>
        </div>
    </div>

    <div class="container pb-5">
        <div class="row">
            <div class="col">
                <h5>Get in Touch</h5>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                @if (session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                @endif
                <form method="post" action="{{ route('ContactUs_store') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name:</label>
                        <input type="text" class="form-control @error('name') border-danger @enderror" value="{{ old('name') }}" id="name" name="name" aria-describedby="nameHelp" placeholder="Your name" required>
                        @error('name') <div id="nameHelp" class="text-danger small">{{ $message }}</div> @enderror
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control @error('email') border-danger @enderror" value="{{ old('email') }}" id="email" name="email" aria-describedby="emailHelp" placeholder="Your email" required>
                        @error('email') <div id="emailHelp" class="text-danger small">{{ $message }}</div> @enderror
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone:</label>
                        <input type="number" class="form-control @error('phone') border-danger @enderror" value="{{ old('phone') }}" id="phone" name="phone" aria-describedby="phoneHelp" placeholder="Phone number">
                        @error('phone') <div id="phoneHelp" class="text-danger small">{{ $message }}</div> @enderror
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control @error('message') border-danger @enderror" id="message" name="message" aria-describedby="messageHelp" rows="3" placeholder="Your message" required>{{ old('message') }}</textarea>
                        @error('message') <div id="messageHelp" class="text-danger small">{{ $message }}</div> @enderror
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" value="0" {{ old('newsletter') ? 'checked="checked"' : '' }} id="newsletter" name="newsletter">
                        <label class="form-check-label" for="newsletter">Sign me up to the newsletter.</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6626.991304659972!2d151.032701!3d-33.851115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5f33454a7428244!2sMates%20Group!5e0!3m2!1sen!2sbd!4v1612439566414!5m2!1sen!2sbd" width="450" height="700" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>

@endsection
