@extends('layouts.page')

@section('title', 'Mates Group: Best Company for Labour Hire Solutions Australia')
@section('meta_description', 'Mates Group is an innovative Australian recruitment company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/team2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Team">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Our Team</h1>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">
                    <h2>Mates Group: Get Quality Labour Hire Service </h2>
                    <img src="{{asset('images/team.jpg')}}" class="rounded img-fluid" alt="">
                    <p>Our team members are trained in their field. They have confidence in what they do and do so with no mistake. Our team at Mates Group ensure that our clients receive a comprehensive labour-hire service.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
