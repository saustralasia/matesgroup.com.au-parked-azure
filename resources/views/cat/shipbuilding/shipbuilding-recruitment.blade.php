@extends('layouts.page')

@section('title', 'Shipbuilding/Submarine Recruitment Agency Brisbane Australia')
@section('meta_description', 'Australian company Mates Group provides shipbuilding, submarine hire services in Adelaide, Brisbane, Perth and Tasmania.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/shipbuilding1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Ship Construction & Labour Hire Specialist Across Australia</h1>
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
                        <img src="/images/blogs/shipbuilding2.jpg" class="figure-img img-fluid rounded" alt="Shipbuilding or Submarine Recruitment Agency Brisbane Australia">
                    </figure>
                    <p>The shipbuilding industry is an important sector for Australia’s economic development. We are a shipbuilding staff hire agency and provide our staff in many reputed ship construction and repair companies. So, if you are looking for experienced and smart staff for your company please go through our contact section and feel free to contact us. We provide our excellent and strong labours in Adelaide, Brisbane, Perth, and, Tasmania. We are a proud maritime recruitment agency in Australia. </p>
                    <p>We know, how hard the process the shipbuilding staff recruitment is. It will make you insane and waste your valuable time to find out the best-fit candidates for your company. That’s why we Mates Group, the shipbuilding hire company, with our specialist team, are ready to help you.</p>
                    <p>Our specialist team is smart enough and expert in ensuring the talent search and grabbing the capable one using the latest technology and process. Our team offers you submarine worker recruitment as well as marine staff recruitment.</p>

                    <h2>Job Description:</h2>
                    <p>Reporting to the shipbuilding manager the successful applicants will be a hands-on, energetic team player who wants the learning curve, the experience, and opportunities that this position will offer.</p>

                    <h2>Applicants should have:</h2>
                    <ul>
                        <li>High School Diploma or equivalent.</li>
                        <li>Additional licenses, certificates, and degrees (If any).</li>
                        <li>Qualification and relevant experience.</li>
                        <li>Hard worker and enthusiastic.</li>
                        <li>Able to carry or move objects up to 50 pounds.</li>
                        <li>Frequently working ability in cramped and awkward positions.</li>
                        <li>Observation and quick learning quality. </li>
                        <li>Ability to see at distance.</li>
                    </ul>

                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.ship-building')
            </aside>

        </div>
    </div>
@endsection

