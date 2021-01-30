@extends('layouts.page')

@section('title', 'Mates Group: Why Choose Us')
@section('meta_description', 'Mates Group is an innovative Australian recruitment company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/WhyChoose1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Why Choose Us">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Why Choose Us</h1>
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
                        <img src="/images/why-choose.jpg" class="figure-img img-fluid rounded" alt="Why Choose Us">
                    </figure>
                    <p>We’re confident that we are the only international business support & services company that provides following benefits to your company.</p>

                    <ul class="choose">
                        <li><b>Committed to Quality.</b></li>
                        <p>Mates Group is committed to maintain 100% service quality. We ensure that the products and services we provide completely fulfil our client’s expectations. </p>
                        <li><b>High Touch Communication.</b></li>
                        <p>Our target is to handle every call and mails instantly with a LIVE person. Forget being in automated menu hell. We are always here for responding your queries within a while.</p>
                        <li><b>We Help Solve Your Business Problems.</b></li>
                        <p>We have experienced & successful business analyst to guide you a new profitable business track. Our prime goal is to make our clients flourish.</p>
                        <li><b>Business savvy – </b></li>
                        <p>We provide complete business solutions along with job placement service, IT, VISA consultancy and assures from a thorough understanding of the business benefit for your company.</p>
                        <li><b>A Proven Track Record.</b></li>
                        <p>Unlike others in our industry, we can prove and show you how we ensure our service quality; because we keep promises what we deliver. </p>
                        <li><b>Satisfaction Guaranteed.</b></li>
                        <p>We ensure 100% Satisfaction Guarantee – We want you to be fully satisfied with our services. We will manage whatever it takes to make you pleased. </p>

                    </ul>
                    <p>
                        The safety method is Associate in nursing integral a part of our business operation and basic to our current business success. The success of the health and safety program ultimately depends on the disposition of management, supervisors and workers to collaborate and work conjointly as a team to attain our goal of getting work environments that square measure wholly freed from injuries and incidents.
                    </p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
