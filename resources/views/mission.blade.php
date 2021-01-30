@extends('layouts.page')

@section('title', 'Mates Group: Our Mission')
@section('meta_description', 'Mates Group is a reputable Agency that provides labour hire solutions in Australia and also worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/OurMission2.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Our Mission</h1>
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
                        <img src="/images/hand-shake.jpg" class="figure-img img-fluid rounded" alt="Our Mission">
                    </figure>
                    <p>Our companies’ mission is to assist our clients to achieve organisation success by providing the right labour solutions. We aim to recruit employees in the required fields as well as look after their wellbeing.
                        Our services should leave clients stress free about the recruitment process giving them more time to focus on other important commitments.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>

@endsection
