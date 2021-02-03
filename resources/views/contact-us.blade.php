@extends('layouts.master', ['title' => 'Contact Us'])

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
        <div class="row">
            <div class="col-md-6">
                <div class="address">
                    <h5>HEAD OFFICE</h5>
                    <p>Level 1, 35 39 Auburn Road</p>
                    <p>Auburn Nsw 2144, Australia</p>
                    <p>Landline: <a href="tel:+612"></a>(02) 8733 3549</p>
                    <p>Email: <a href="mailto:enquiries@matesgroup.com.au">enquiries@matesgroup.com.au</a></p>
                </div>

            </div>
            <div class="col-md-6">
                <div class="address">
                    <h5>NEW ZEALAND OFFICE</h5>
                    <p>Level 8, West Plaza Business Center</p>
                    <p>3 Albert St, Auckland 1010, New Zealand</p>
                    <p>Landline: (64) 9930 1278</p>
                    <p>Email: <a href="mailto:enquiries@matesgroup.com.au">enquiries@matesgroup.com.au</a></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="address">
                    <h5>SINGAPORE OFFICE</h5>
                    <p>30 Roberts Lane, #02 01</p>
                    <p>Singapore 218309</p>
                    <p>Landline: (65) 6396 6293 / 6341 5238</p>
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
                        <input type="number" class="form-control @error('phone') border-danger @enderror" value="{{ old('phone') }}" id="phone" name="phone" aria-describedby="phoneHelp">
                        @error('phone') <div id="phoneHelp" class="text-danger small">{{ $message }}</div> @enderror
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control @error('message') border-danger @enderror" id="message" name="message" aria-describedby="messageHelp" rows="3" required>{{ old('message') }}</textarea>
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
{{--                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.495641443278!2d151.03051191520967!3d-33.851115280661105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdb04dce39ef%3A0xb5f33454a7428244!2sMates+Group!5e0!3m2!1sen!2sbd!4v1551854555296" width="600" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>--}}
            </div>
        </div>
    </div>

@endsection
