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

                    <figure class="figure">
                        <img src="/images/team.jpg" class="figure-img img-fluid rounded" alt="Best Company for Labour Hire Solutions Australia">
                    </figure>
                    <p>Our team members at Mates Group are well trained in their respective fields.</p>
                    <p>We have an experienced and diverse team who follow current market trends and employment requirements for all industries, therefore we can recruit the best candidates.</p>
                    <p>The management team has accumulated a wealth of industry experience and expertise. The depth of experience of our team covers all facets of recruitment and short-term hire.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
