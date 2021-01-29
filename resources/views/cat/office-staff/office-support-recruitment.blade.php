@extends('layouts.page')

@section('title', 'Administration & Office Support Recruitment Agency Sydney')
@section('meta_description', 'Australian company Mates Group provides office staff support and administration hire services in Sydney, Melbourne, New South Wales (NSW) and Victoria.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/OfficeSupportRecruitment1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">We Are A Specialist In Office Staff Recruitment</h1>
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
                        <img src="/images/OfficeSupportRecruitment2.jpg" class="figure-img img-fluid rounded" alt="Administration & Office Support Recruitment Agency Sydney">
                    </figure>
                    <p>
                        We do office staff recruitment for Sydney,
                        Melbourne, New South Wales, and Victoria.
                    </p>

                    <p>
                        Organization and backing staff are popular.
                        Organizations progressively require short time and full-time staff.
                        For that, they want to maintain their relationships with them
                        for a long time. If you need to hire office support
                        workers for your company, we are here ready to find out
                        the right fix staff for you.
                    </p>
                    <p>We do every administration recruitment with our skilled recruiter.</p>
                    <p>
                        Recruiting qualified candidates is not so easy.
                        And we do that for you. We pick up only the perfect
                        candidates from a qualified pool.
                    </p>
                    <p>
                        Our specialized team rapidly choose the
                        ideal and faithful candidates. As a result,
                        our clients remain happy as well as our
                        candidates can find their next dream job.
                    </p>
                    <p>
                        Our applicants have amazing specialized and
                        revealing abilities. They can adapt to their job rapidly.
                    </p>

                    <h2>Expert Advice on Recruiting Patterns</h2>

                    <p>
                        Our consultants have special market knowledge
                        of business support salaries, work titles, and
                        hiring trends to guarantee you attract the best
                        talent at the appropriate remuneration.
                    </p>

                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.office-staff')
            </aside>

        </div>
    </div>
@endsection

