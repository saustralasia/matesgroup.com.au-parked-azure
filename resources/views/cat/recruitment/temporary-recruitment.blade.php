@extends('layouts.page')

@section('title', 'Temp/Temporary Recruitment Agency Sydney, Labour Hire Melbourne')
@section('meta_description', 'Australian company Mates Group provides temporary, contract, part time, admin staff hire solutions in Sydney, Melbourne, Brisbane & Gold Coast.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/TemporaryRecruitment1.png')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Temporary Staffing Services for Australia</h1>
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
                        <img src="/images/TemporaryRecruitment1.png" class="figure-img img-fluid rounded" alt="Temporary Recruitment Agency Sydney">
                    </figure>
                    <h2>Temporary Recruitment Agency Australia</h2>
                    <p>Are you looking for a pain-free and quick solution for part-time staff enrolment for your company?</p>
                    <p>Hiring workers for a short time is a time-consuming process. For a temporary enrolment, it’s not a great way to enlist employees interviewing one-by-one. This is a lengthy time and money consuming process. Mates Group offers you all kinds of support you need to make this process easy.</p>
                    <p>Whether you need some extra support during peak hours, we can support you in providing part-time workers in your organization. Some business farms need proxy workers. Hence, they need casual workers in some of the office departments for a limited period of time. They search for a temporary labour-hire agency in Brisbane, Sydney, or Melbourne area. Therefore, you need to find out some alternative ways to serve your clients. You need to get the support of a temp recruitment agency then. We offer quality casual staff for your company.</p>
                    <h2>Why Choosing Us?</h2>
                    <p>We have a specialist and potential team to recruit expedient temporary employees in a short period of time. </p>
                    <p>In a limited time, they are able to find out talented candidates from a talent pool. We have a long-term relationship and network with our potential employees so that in a short time we can manage worker rent.</p>
                    <p>Firstly, our team will consult with you and find out your need. After that, they will get the candidates who are the best fit for your office. Our job is to make you happy by providing our expert employees and make you hassle-free.</p>

                    <h2>Job Description</h2>
                    <p>Mates Group can offer employees the following skill which has been described below in the full job description. We can provide one to ten years of industry experience workers. We can arrange staff for Sydney, Melbourne, Brisbane, Gold Coast.</p>
                    <p>If you are a candidate you need to check the following requirements:</p>
                    <ul>
                        <li>Graduation Degree/Diploma in the relevant area</li>
                        <li>Support development and implementation</li>
                        <li>Productivity in problem-solving</li>
                        <li>Accuracy in time management</li>
                        <li>Strong arrangement power and strategy</li>
                        <li>Experience in related fields</li>
                        <li>Be dedicated</li>
                        <li>Take part in collaborating with the team</li>
                        <li>Take the challenge of any new task</li>
                        <li>Quick observation quality</li>
                        <li>Having your own transport is a plus point</li>
                    </ul>
                    <p>Your success is our success and your failure is also ours’. So, if you are a business owner we will produce all kinds of supports you require during working with our selected applicants. Side by side, if you are a candidate, we are also responsible to offer you the absolute job field. So, if you are a new job seeker, you can start your professional challenge with us.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection
