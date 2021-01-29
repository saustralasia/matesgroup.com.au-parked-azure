@extends('layouts.page')

@section('title', 'Mates Group: Safety Policy')
@section('meta_description', 'Mates Group takes the safety of our employees and provides a strong workplace health and safety program.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/SafetyPolicy3.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Safety Policy</h1>
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
                        <img src="/images/safety.png" class="figure-img img-fluid rounded" alt="Safety Policy">
                    </figure>
                    <p>Security is our first need. It is basic for our industry and we trust that each worker ought to hope to return home securely toward the finish of every day. We ceaselessly endeavor to enhance our execution while moving in the direction of damage free workplace for our representatives and competitors.</p>
                    <h4>Safety Methods</h4>
                    <p>We comprehend that our administration frameworks assume a basic job in our business and our tasks. Our Safety, Quality and Environmental administration frameworks are on the whole expertly licensed and ensured to the accompanying principles;</p>
                    <p>In the occasion an occurrence or if a worry is raised, Mates Group has a committed health and protection team in charge of working with the concerned gatherings to locate a suitable arrangement.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
