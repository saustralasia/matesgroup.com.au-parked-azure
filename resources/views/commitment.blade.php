@extends('layouts.page')

@section('title', 'Mates Group: Our Commitment')
@section('meta_description', 'Mates Group provides candidates that meet client requirements.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <!-- Header - set the background image for the header in the line below -->
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/commitment2.jpg')}}');">
{{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="">
    </header>

    <!-- Header - set the background image for the header in the line below -->
{{--    <header class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1076');">--}}
{{--        <img class="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" alt="">--}}
{{--    </header>--}}


{{--<div class="page-head-area mb-2">--}}
{{--    <img class="img-fluid" src="{{asset('images/commitment.jpg')}}" alt="">--}}
{{--    <div class="page-text">    </div>--}}
{{--</div>--}}

<div class="container">
    <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Our Commitment</h1>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</div>

<div class="container">
    <div class="row">

        <div class="col-md-8 blog-main text-justify">
            <div class="blog-post">

                <figure class="figure">
                    <img src="/images/commitment2.jpg" class="figure-img img-fluid rounded" alt="Our Commitment">
                </figure>
                <p>Our commitment is to gather and select the best candidates which meet our clients criteria.
                    “We deliver what we promise”, we dedicate ourselves to make sure our valued clients are successful, and their requirements are met.
                </p>
                <p><strong>We are committed to:</strong></p>
                <ul>
                    <li><p>Having labour-market knowledge- we seek to learn as much as possible about the labour-markets we specialise in, so that we are always up to date on the current trends and the latest developments.</p></li>
                    <li><p>Being proactive - Client satisfaction is at the top of our list of priorities, if a problem arises you can rest assured that we will do our utmost to resolve it as a matter of immediacy.</p></li>
                    <li><p>Upholding workplace health and safety obligations - we ensure that we work with our clients to make the workplace as safe and hygienic as possible for the employees.</p></li>
                    <li><p>Having on-site monitoring and assessment - by having a delegated Mates Group on-site supervisor, our clients are assured that we constantly monitor and assess our on-hire staff so that only the most competent and suitable persons are provided.</p></li>
                </ul>
            </div>
        </div>

        <aside class="col-md-4 blog-aside">
            @include('layouts.asides.aboutus')
            {{--            <div class=" blog-aside-body">--}}
{{--                <h4 class="blog-aside-title mb-2">Agriculture</h4>--}}
{{--                <ol class="list-unstyled">--}}
{{--                    <li><a href="/fruit-picking-recruitment">FRUIT-PICKING-RECRUITMENT</a></li>--}}
{{--                    <li><a href="/agriculture-recruitment">agriculture-recruitment</a></li>--}}
{{--                    <li><a href="/agriculture-staff-recruitment">agriculture-staff-recruitment</a></li>--}}
{{--                    <li><a href="/farm-hand-recruitment">farm-hand-recruitment</a></li>--}}
{{--                    <li><a href="/chicken-catcher-recruitment">chicken-catcher-recruitment</a></li>--}}
{{--                </ol>--}}
{{--            </div>--}}
        </aside>

    </div>
</div>


@endsection
