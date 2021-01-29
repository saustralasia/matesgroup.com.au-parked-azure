@extends('layouts.page')

@section('title', 'Recruitment Agency Parramatta, Labour Hire Western Sydney & NSW')
@section('meta_description', 'Australian company Mates Group provides temporary, permanent staff hires solution in Parramatta, Western Sydney, Westfield and NSW.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/RecruitmentParramatta1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Get Talented Staff for your Team in Parramatta</h1>
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
                        <img src="/images/RecruitmentParramatta2.jpg" class="figure-img img-fluid rounded" alt="Recruitment Agency Parramatta">
                    </figure>
                    <h2>Are you keenly looking for a Recruitment agency in Parramatta or Western Sydney? Then you are in the right place!</h2>
                    <p>Our recruiting team will be your solution for permanent and temporary staffing. We, Mates Group have many years of the experienced enlisting team to supply workers in your organization. We keep a long-time relationship with our honourable clients and our employees. Therefore, we are able to find the best-fit employees for your organization in Parramatta, Western Sydney, Westfield, and NSW. It makes us happy when we see our clients are happy finding their potential employees for their administration. We can be your office employment solution. We are always ready to support our clients and employees.</p>
                    <p>There are so many labour-hire agencies in Western Sydney or in Parramatta but we always try to be different from them with our scientific modern process and our skilled masterminded recruitment team. To recruit the best-fit candidates is a tough process. We do not want you struggling with this. We are here ready to help you. Let our experienced recruiting team handle this awkward job for you. We grab skilled and dedicated workers for your company.</p>
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
                    <h2>Job Description:</h2>
                    <p>Mates Group can offer employment with the following skill which has been describing below in the full job description. We can provide One to Ten years of industry experience employees. We can arrange staff for Parramatta, Western Sydney, Westfield and NSW.</p>
                    <ul>
                        <li>Have a diploma/honours degree in a related field.</li>
                        <li>Physically fit.</li>
                        <li>Quick observation quality.</li>
                        <li>Proficiency in handling field related materials.</li>
                        <li>Be a dedicated & potential person.</li>
                        <li>Finding any kind of technical fault if you are searching for technical jobs.</li>
                        <li>Experienced people will be given preference.</li>
                        <li>Freshers are also encouraged to apply.</li>
                    </ul>
                    <h2>Our Commitment:</h2>
                    <p>Your success is our success and your failure is also ours’. So, if you are a company owner we will provide any kind of supports you need when working with our selected candidates. Side by side, if you are a candidate, we are also responsible to offer you the perfect job field. So, if you are a new job seeker, you can start your career challenge with us. We are ready to hear that from you!</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection
