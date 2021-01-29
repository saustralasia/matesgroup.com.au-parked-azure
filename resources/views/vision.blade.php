@extends('layouts.page')

@section('title', 'Mates Group: Our Vision')
@section('meta_description', 'Mates Group is an innovative Australian recruitment company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/vsn2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Our Vision</h1>
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
                        <img src="/images/vision2.jpg" class="figure-img img-fluid rounded" alt="Our Vision">
                    </figure>
                    <p>Our vision is to put Mates Group on the map as one of the leading recruitment organisations. We wish to engage in sustainable practices and anticipate the needs of our clients, while still maintaining quality services.</p>
                    <p>Diversity and inclusion are important to us, we ensure a discrimination free environment and look out for specific skills in candidates.</p>
                    <p>Our commitment to the Total Quality Management philosophy ensures continuity and client satisfaction. Our highly experienced and skilled team enables Mates Group to seamlessly plan and provide solutions for labour requirements.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
