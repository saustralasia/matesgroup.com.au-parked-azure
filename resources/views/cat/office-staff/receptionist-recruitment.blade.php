@extends('layouts.page')

@section('title', 'Receptionist Recruitment Agency in Melbourne & Sydney')
@section('meta_description', 'Australian company Mates Group provides executive secretary, receptionist, medical receptionist hire services in Melbourne, Sydney, Perth, Brisbane, and Perth.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/ReceptionistRecruitment2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Hire Reception Experts in Australia </h1>
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
                        <img src="/images/blogs/receptionist-recruitment1.jpg" class="figure-img img-fluid rounded" alt="Receptionist Recruitment Agency in Melbourne & Sydney">
                    </figure>
                    <h2>Are you searching for Receptionist recruitment in Melbourne or Sydney?</h2>
                    <p>Receptionists are the most important persons in your company because customers contact them from first to last of a business. They deal with your valuable customers and manage their inquiries. Mates Group recruitment agency will help you to find a receptionist for your office. We have a strong network and relationship with our client companies and our employees. We always keep in touch with our qualified and outstanding candidates so that within a short period we are able to provide them to your administration. We are also able to find intern candidates for your company because they are the upcoming talent.</p>

                    <h2>Why we are separate from others?</h2>
                    <p>We have a specialist team in Mates Group. Firstly, our consulting team will talk to you and find out your company’s needs. They will find what kind of people will be the best fit for your company. After all, they will search for candidates from our talent pool. We like to find out those candidates who love to take new challenges. Hence, if you need to have a secretary, assistant, clerk, executive secretary, typist, dispatcher, or word processor experts then please feel free to contact us because we are ready to help you here. We will help you to find your organization’s best employees. We serve in Melbourne, Sydney, Perth, Brisbane, and Adelaide.</p>
                    <p>Always try to keep in mind that a first impression is the first thing to impress your customer. Therefore, this is very important to have someone in your company who can manage this job carefully. We always try to focus on what is the need of our customers. We try to find the skills we need to provide our customers to be successful in their business because their success is actually ours’. Be intelligent hiring a great receptionist who can perfectly represent your company.</p>
                    <p>So, do not wait. Find your perfect recruitment agency for getting your potential receptionist.</p>

                    <h2>Job Description</h2>
                    <p>Mates Group can arrange a Receptionist with the following skill which has been described below in the full job description. We can arrange staff for Melbourne, Sydney, Perth, Brisbane, and Perth.</p>

                    <h2>Job Responsibilities:</h2>
                    <p>Those people who can take the following responsibilities are welcome to apply as a receptionist:</p>

                    <ul>
                        <li>Handling and welcoming company visitors.</li>
                        <li>Answering phone calls.</li>
                        <li>Handling the administrator emails.</li>
                        <li>Distribution of deliveries.</li>
                        <li>Always ready to increase the helping hand.</li>
                        <li>Solving the problem of customers and visitors.</li>
                    </ul>



                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.office-staff')
            </aside>

        </div>
    </div>
@endsection

