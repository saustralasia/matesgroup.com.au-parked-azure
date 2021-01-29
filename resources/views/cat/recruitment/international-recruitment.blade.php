@extends('layouts.page')

@section('title', 'Overseas Recruitment Agency Australia, International Labour Hire')
@section('meta_description', 'Australian company Mates Group provides overseas, global worker hire services in Perth, Sydney, Brisbane & Melbourne.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/InternationalRecruitment2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Foreign Worker Employment Agency Australia</h1>
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
                        <img src="/images/InternationalRecruitment1.jpg" class="figure-img img-fluid rounded" alt="Overseas Recruitment Agency Australia">
                    </figure>
                    <p>To increase the rate of Australia’s economic development it is very important to recruit international candidates. Understanding this issue we Mates Group, the international recruitment agency, recruit a large number of overseas candidates every year.</p>
                    <p>We have a strong and skilled selection team to grab the enthusiastic and qualified foreign worker candidates. Our process is scientific and very much effective. We do hire global staff for many top-ranked companies in Brisbane, Perth, Sydney, and Melbourne.</p>
                    <p>As a global hire company Mates Group is proudly holding a top position in Australia. So many companies in Australia offer international recruitment services but we do it in a specialized way with our recruitment team. We always try to find out the best fit working sectors for our international candidates. There are many multinational companies in Australia that need global candidates.</p>

                    <h2>Job Description:</h2>
                    <p>Reporting to our international recruitment manager the successful applicants will be a hands-on, energetic team player who wants the learning curve, the experience, and opportunities that this position will offer.</p>
                    <p>As an Applicant you should have the following qualities:</p>

                    <ul>
                        <li>You should have a passion for delivering excellent work.</li>
                        <li>You need to be a responsive and active person.</li>
                        <li>We need you as a motivated and positive team player.</li>
                        <li>You need to be an expert in your own field.</li>
                        <li>Have the quality of leadership.</li>
                        <li>Time management skills.</li>
                        <li>Good communication skills.</li>
                        <li>Previous experience in your own field will be a plus point.</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection

