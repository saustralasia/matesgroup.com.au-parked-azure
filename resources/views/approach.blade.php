@extends('layouts.page')

@section('title', 'Our Approach')
@section('meta_description', 'Mates Group is an innovative Australian recruitment company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
<header class="py-5 bg-image-full" style="background-image: url('{{asset('images/approach.png')}}');">
    {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
    <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
</header>

<div class="container">
    <div class="row">
        <div class="col-md-8">
            <h1 class="display-4 mb-4 blog-post-title border-bottom">Our Approach</h1>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</div>

<div class="container">
    <div class="row">

        <div class="col-md-8 blog-main text-justify">
            <div class="blog-post">
                <p>Our approach is to conduct our business in an honest and ethical manner and respecting all.</p>
                <p><strong>Producing enduring connections</strong><br>
                    We are focused on creating connections that last. Our approach is to be an association that individuals are pleased to work for, has the trust of their customers and the networks they serve.</p>
                <p><strong>Serving our clients</strong><br>
                    We do all the groundwork, so our clients don’t have to worry about a thing, from advertising the position to coordinating the interviews and reference checking. Mates group have a network of employees who cover every aspect of the recruitment process.</p>
            </div>
        </div>

        <aside class="col-md-4 blog-aside">
            <div class="mb-4 blog-aside-card">
                <div class="blog-aside-card-body">
                    @include('layouts.asides.aboutus')
                </div>
            </div>
        </aside>

    </div>
</div>
@endsection
