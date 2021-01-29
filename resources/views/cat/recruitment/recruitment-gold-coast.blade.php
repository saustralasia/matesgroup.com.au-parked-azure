@extends('layouts.page')

@section('title', 'Recruitment Agency Gold Coast | Temp & Labour Hire Queensland (QLD)')
@section('meta_description', 'Australian company Mates Group provides part-time, executive, construction labour-hire solutions in Gold Coast and Queensland (QLD) area.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/RecruitmentDarwin1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Mates Group: Your Recruitment Agency of Choice for Gold Coast</h1>
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
                        <img src="/images/RecruitmentGoldcoast1.jpg" class="figure-img img-fluid rounded" alt="Recruitment Agency Gold Coast">
                    </figure>
                    <p>If you are looking for Labour hire and Recruitment solutions in Gold Coast and Queensland (QLD) then you are in the right place. Mates Group is one of the leading labour hire solution provider in Gold Coast. Recruitment of an organization is a tough process. Many companies face problems enlisting workers. Therefore, we are suggesting you leave that job in our hands. We will find employees as you need. We will consult with you and find your need.</p>
                    <h2>Why Mates Group is different from others?</h2>
                    <p>We have a long term relationship with our client companies and we are always ready to support them. We got an extensive network of staff and clients so that we can help you providing economists or financial staff in a short time. We retain our talented employees who can work with the unique requirements of our clients. Your success is our success. Our job is to make you happy by providing our expert employees and make you hassle-free.</p>
                    <p>We have an experienced skilled team to recruit talented people. Their enlisting process is modern. They have many years’ experience in recruiting office executive person. They always keep in touch with our motivated, determined, and strong employees who are the main key to our success. We always try to fulfil your need because we consider your success as ours’.</p>
                    <h2>Mates Group provides you with staffing solutions within the following sectors:</h2>
                    <ul>
                        <li>Manufacturing</li>
                        <li>Administration Jobs</li>
                        <li>Industry workers</li>
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

                    <p>So, if you are looking for a recruitment agency in Gold Coast or Queensland, do not late to contact us.</p>
                    <h2>Job Description:</h2>
                    <p>Mates Group can offer employment with the following skill which has been describing below in the full job description. We can provide One to Ten years of industry experience employees. If you are a candidate you need to have the following qualities:</p>
                    <ul>
                        <li>Physically fit.</li>
                        <li>Quick observation quality.</li>
                        <li>Proficiency in handling field related materials.</li>
                        <li>Be a dedicated & potential person.</li>
                        <li>Finding any kind of technical fault if you are searching for technical jobs.</li>
                        <li>Any kind of technical fault and failure finding. </li>
                        <li>Experienced people will be given preference.</li>
                        <li>Freshers are also encouraged to apply.</li>
                    </ul>
                    <h2>Our Commitment:</h2>
                    <p>We believe that your success is our success and your failure is also ours’. So, if you are a company owner we will provide any kind of supports you need when working with our selected candidates. We are ready to help you with any kind of urgency. Side by side, if you are a candidate, we are also responsible to offer you the perfect job field. So, if you are a new job seeker, you can start your career challenge with us. We are ready to hear that from you!</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection
