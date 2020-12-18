@extends('layouts.page')

@section('title', 'Agriculture/Agribusiness Recruitment Agency, Rural Hire Australia')
@section('meta_description', 'Australian company Mates Group provides agriculture, agribusiness, farm staff hire services in Adelaide, Brisbane, Sydney & Melbourne.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/blog.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">Agribusialist</h1>
                <p>December 18, 2020 by <a href="#">Mark</a></p>
                <hr>
            </div>
            <div class="col-md-4">

            </div>
        </div>
    </div>



    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">
                    <p>Agriculture is a part and parcel of Australia’s economy.
                        Once upon a timness is a very profitable business in
                        Australia because of its fertile land and a large number of domestic
                        animal resources.
                    </p>
                    <p><strong>Job Description:</strong><br>Reporting to our agribusiness manager the successful
                        applicants will be a hands-on, energetic team player who wants
                        the learning curve, the experience, and opportunities
                        that this position will offer.
                    </p>
                    <p><strong>Applicants should be:</strong><br></p>
                    <ul>
                        <li>Always ready and available to work</li>
                        <li>Physically fit</li>
                        <li>Have a strong motivation to work</li>
                        <li>Be hygiene</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
