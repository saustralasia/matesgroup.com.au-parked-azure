@extends('layouts.page')

@section('title', 'How COVID-19 Will Reshape the Future of Recruitment | Mates Group')
@section('meta_description', 'In this blog post, you will learn how COVID-19 will reshape the future of recruitment.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/covid-reshape1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">How Will COVID-19 Reshape Our Jobs?</h1>
                <p>December 18, 2020 by <a href="/contact-us">Mark</a></p>
                <hr>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-8 blog-main">
                <div class="blog-post">

                    <figure class="figure">
                        <img src="/images/blogs/covid-reshape2.jpg" class="figure-img img-fluid rounded" alt="How covid Will Reshape the Future of Recruitment">
                    </figure>
                    <p>Only a few months ago, the effect of the coronavirus changed the future of enrolment in ways almost unimagined. Social distancing has forced organizations to cancel in-person interview sessions and replace them with video calling, and as more individuals work from home, flexibility has become the norm today.</p>
                    <p>For the cause of severe acute respiratory syndrome coronavirus 2, the normal life of the people has been affected. As a result, people are suffering from multiple organ dysfunction syndromes, infectious disease, stroke, fever, and acute respiratory distress syndrome, etc.</p>
                    <p>And while the virus may be temporary, it will have anything beyond effects on hiring. So what are the key ways in which employment has been affected by these transformations? How should business leaders organize for this new area of employment? </p>
                    <dl class="row">
                        <dt class="col-xl-3">Video interview</dt>
                        <dd class="col-xl-9">Because of social distancing laws, organizations conduct job interviews via video calling. While it's not a new idea, it means that hiring executives will have to become more familiar with the technology and adjust their interviewing system to fit this new situation. Mobilization has been problematic in this situation.</dd>

                        <dt class="col-xl-3">Offer Part-time and contractual jobs</dt>
                        <dd class="col-xl-9">Part-time and contractual jobs will become more relevant: During the pandemic, temporary and/or contract hiring system has become a common technique in several businesses, enabling themselves both fast and cost-effective. In the coming days, as a way to make their company more flexible and profitable in a world of constant and sometimes unpredictable change, we should expect more workers to adopt flexibility in favour of temporary hires.</dd>

                        <dt class="col-xl-3">Recruiting spending plans should be more flexible</dt>
                        <dd class="col-xl-9">What does that imply? Essentially, organizations should be prepared to enlist if and when required. Therefore, to account for this ambiguity, it's necessary to organize your recruiting budget. It is often suggested to maintain some HR fund in stock, as this will help you to quickly search for and recruit new personnel. Firms will need to concentrate on developing a strong talent pool as part of this investment so that when the need to recruit comes up, they can respond immediately. This keeps the business competitive which is flexible and helps avoid circumstances where talent is hard to attract or manage.</dd>

                        <dt class="col-xl-3">A bigger emphasis will be on career development</dt>
                        <dd class="col-xl-9">Companies are expected to increase their emphasis on their current employees' professional growth with leaner HR budgets, in parallel with having new employees. With continuing digital change and changing consumer preferences and spending trends, it is important to retain a skilled workforce to have a good overview.</dd>

                        <dt class="col-xl-3">Remote job</dt>
                        <dd class="col-xl-9">Remote job is a great solution in this COVID-19 situation. Try to use your talent remotely. Have an online meeting with your workers. Your employees can be anywhere in the world. Outsourcing jobs are becoming popular.</dd>
                    </dl>
                    <p>Since both public health issues and emerging remote working technologies remain widespread, the future of recruiting looks more dynamic and uncertain.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>
        </div>
    </div>
@endsection
