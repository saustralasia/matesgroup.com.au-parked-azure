@extends('layouts.page')

@section('title', 'Best Accounts Payable Officer Recruitment/Hire Service Australia')

@section('meta_keywords', 'accounts payable officer recruitment australia,
    accounts payable officer recruitment service, accounts payable officer hire service worldwide,
    Accounts payable officer recruitment in Sydney,
    ')

@section('meta_des', 'worldwide.')

@section('content')
    <!-- Header - set the background image for the header in the line below -->
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/commitment.jpg')}}');">
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
    <div class="row">

        <div class="col-md-8 blog-main text-justify border">
            <h1 class="display-4 pb-4 mb-4 res-blog-post-title border-bottom">Our Commitment</h1>
            <div class="blog-post">

                <p>Our commitment is to provide candidates which meets out client requirements. “We deliver what we promise”, we dedicate ourselves to make sure our valued clients are successful and their requirements are met.</p>

                <p><strong>We are committed to:</strong></p>
                <ul>
                    <li><p>Having labour-market knowledge- we seek to learn as much as possible about the labour-markets we specialize in, so that we are always up to date on the current trends and the latest developments.</p></li>
                    <li><p>Being proactive - Client satisfaction is at the top of our list of priorities, if a problem arises you can rest assured that we will do our utmost to resolve it as a matter of immediacy.</p></li>
                    <li><p>Upholding workplace health and safety obligations - we ensure that we work with our clients to make the workplace as safe and hygienic as possible.</p></li>
                    <li><p>Having on-site monitoring and assessment - by having a delegated Mates Group on-site supervisor, our Clients are assured that we constantly monitor and assess our on-hire staff so that only the most competent and suitable persons are provided.</p></li>
                </ul>

            </div>

        </div>

{{--        @include('layouts.aside-links.agriculture')--}}
        <aside class="col-md-4 blog-sidebar border">
            <div class="p-4">
                <h4 class="font-italic">Agriculture</h4>
                <ol class="list-unstyled mb-0">
                    <li><a href="/fruit-picking-recruitment">FRUIT-PICKING-RECRUITMENT</a></li>
                    <li><a href="/agriculture-recruitment">agriculture-recruitment</a></li>
                    <li><a href="/agriculture-staff-recruitment">agriculture-staff-recruitment</a></li>
                    <li><a href="/farm-hand-recruitment">farm-hand-recruitment</a></li>
                    <li><a href="/chicken-catcher-recruitment">chicken-catcher-recruitment</a></li>
                </ol>
            </div>
        </aside>




    </div>
</div>


@endsection
