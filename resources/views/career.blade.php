@extends('layouts.page')

@section('title', 'Mates Group: Career | Leading Global Recruitment Agency')
@section('meta_description', 'As a leading global recruitment agency, Mates Group has built a positive, full work environment designed to improve your career.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/blogs/career2.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Career</h1>
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
                        <img src="/images/blogs/career.jpg" class="figure-img img-fluid rounded" alt="Career">
                    </figure>
                    <p>We wanted our candidates to get a sense of who we are, no matter how they were interacting with us.

                        Mates Group is a great platform that enables you to really communicate our brand clearly and directly to potential candidates.</p>

                    <h2>Guidance for job seekers</h2>
                    <p>We understand that searching for a job can be challenging. In order to find the right position for you, you need to be able to prove that you are the best candidate for the advertised role.</p>
                    <p>By following the tips below, you will ensure that you improve your chances of succeeding at the interview stage.</p>
                    <p>Tips and guidelines:</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Research the industry and company</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Arrive on time</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Practice!</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Dress appropriately for the job you are applying for</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Be confident and assertive</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Bring a copy of your resume</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Dress appropriately</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Make eye contact</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Give a firm handshake</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Have good posture</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Speak clearly</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Don&#39;t wear perfume or cologne!</li>

                    </ul>
                    <h2>Our industry specialisations</h2>
                    <p>We specialise in labour hire services for the following industries:</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Construction</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Transport &amp; Logistics</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Manufacturing &amp; Engineering</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Agribusiness</li>
                    </ul>

                    <h2>Job application</h2>
                    <p>If you are interested to work with mates group. Please fill up the below form. One of our placement office will contact with you for further details and interview you for the future job vacancy.</p>
                    <p>Warehouse Industry:</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check" aria-hidden="true"> </i> forklift drivers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> truck drivers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> van drivers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> warehouse general hands</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> supervisors</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> pick-packers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> quality control supervisors</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> container unloading</li>
                    </ul>
                    <p>Construction Industry:</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Builder labourers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Truck drivers for the transportation of construction materials</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> On-site forklift drivers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Plumbers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Steel fixers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Earth moving plant operators</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Carpenters</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Bricklayers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Traffic controllers</li>
                        <li><i class="fa fa-check" aria-hidden="true"> </i> Scaffolders</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>

@endsection
