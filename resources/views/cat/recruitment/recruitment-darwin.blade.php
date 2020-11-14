@extends('layouts.page')

@section('title', 'Mates Group: Our Vision')
@section('meta_keywords', 'recruitment darwin,recruitment expert darwin,recruitment agency darwin,labour hire darwin,recruitment agency northern territory,labour solutions darwin')
@section('meta_des', 'Australian company Mates Group provides temporary, permanent staff hires solution in Darwin and the Northern Territory.')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/vision.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="display-4 mb-4 blog-post-title border-bottom">Mates Group: Recruitment Solution & Labour Hire Specialist</h1>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">
                    <h2>Are you searching for a Recruitment expert in Darwin? Then congratulations! You are in the right place.</h2>
                    <p>Mates Group is one of the top-most recruitment agencies in Darwin and Northern Territory (NT). We offer enlistment needs of both Industrial and office work on a temporary and permanent premise. Our accomplished group work in staffing answers for customers across most industry areas including, accounting and finance, call centre and customer service, sales and marketing, executive, industrial, manufacturing and operations, office, government, transportation and logistics, civil and construction, engineering and technical, events and all your business trades necessities.</p>
                    <p>Our committed Darwin enlistment group understand the requirements of neighbourhood organizations. They have solid associations with the neighbourhood network ensuring that we have top ability accessible to address the issues of our customers. </p>

                    <h2>Why Mates Group?</h2>
                    <p>We are providing services to many leading organizations in Darwin and Northern Territory. We advise our staff and offer them training. We have a specialist team who consults with our employees and try to know what kinds of abilities they have. Then, we provide them to suitable companies. We realize the importance of getting the perfect person to solve challenges. </p>
                    <p>Through this process, we try to get strong candidates who are looking for their next job. These people are ready to engage to offer their best service and express their value to your organizations. This is a talent pool where our staffs are always ready to hear from us about new challenges and opportunities. </p>
                    <p>Hence, if you are looking for workers for your administration then please feel free to contact us. We are ready to help you here.</p>

                    <h2>Mates Group provides you with staffing solutions within the following sectors:</h2>
                    <ul>
                        <li>Manufacturing</li>
                        <li>Travail labour</li>
                        <li>Grind work</li>
                        <li>Office support</li>
                        <li>Transport, Logistics & Warehousing</li>
                        <li>Medical & Healthcare</li>
                        <li>Customer care service</li>
                        <li>Administration jobs</li>
                        <li>Plumbers</li>
                        <li>Plasterers</li>
                        <li>Painters</li>
                        <li>Finance</li>
                        <li>Engineering</li>
                        <li>Electricians</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection
