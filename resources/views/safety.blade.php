@extends('layouts.page')

@section('title', 'Mates Group: Our Safety')
@section('meta_description', 'Mates Group is a quality recruitment agency and ensures a safe environment for employees for working in different companies.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/Safety3.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Our Safety</h1>
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
                        <img src="/images/safety-2.png" class="figure-img img-fluid rounded" alt="Our Safety">
                    </figure>
                    <p>Safety and hygiene are our number one priority when it comes to our workers. Regardless of which field they are working in, we expect a safe and healthy work environment. Mates Group focuses on preventing workplace injuries, by preparing workers with proper Work health and safety (WHS) inductions so they are familiar with the basic responsibilities and methods and are aware of correct PPE before entering the actual workplace.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
