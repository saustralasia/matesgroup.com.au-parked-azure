@extends('layouts.page')

@section('title', 'Casual/Temporary Labour Hire Sydney, Recruitment Agency Melbourne')
@section('meta_description', 'Australian company Mates Group provides casual, part-time workers hire services in Melbourne, Sydney, Brisbane, Perth, Adelaide, and Gold Coast.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/CasualLaborHire2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Australia’s Casual Labour Hire Specialist</h1>
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
                        <img src="/images/CasualLaborHire1.png" class="figure-img img-fluid rounded" alt="Temporary Labour Hire Sydney">
                    </figure>
                    <h2>Casual Labour Hire Melbourne and Sydney</h2>
                    <p>Mates Group is an Australia’s casual labour-hire agency that is unlike from others’. We have reputation for the quick recruitment of labours in many famous companies. Our efficiency in recruitment is different from many other hire companies.</p>
                    <p>When it’s time for labour-hire, searching for the best-fit worker for your company can be very tough. In the pool of so many applicants, it is difficult to find out the perfect one. Mates Group hires only those labourers who can fulfil your company’s criteria so that you will be assured that your job will be all-good.</p>

                    <h2>Find Part-Time Labours for Short Time Length Projects</h2>
                    <p>Mates Group has a magnificent range of empowered labours who can handle your short-time length project. Whenever you feel the need for some extra hands to finish your job, our temporary workers are ready to help you.</p>

                    <h2>We Mates Group Have a Prominent Team of Workers</h2>
                    <p>Our skilled and prominent team is the cause of our pride. We are different from other companies and able to provide you employees for</p>

                    <ul>
                        <li>Construction hire</li>
                        <li>Tradesmen</li>
                        <li>Landscaping</li>
                        <li>Manufacturing</li>
                    </ul>

                    <h2>What Makes us Different from Other Temporary Staff Hire Company?</h2>
                    <p>We have a proficient and skilled team of recruiting employees. Our staffs are smart enough to make you happy with what you want. They are fully trained up and have safety courses. Our workers follow some rules when working including:</p>
                    <ul>
                        <li>Come with PPE</li>
                        <li>Spectacular appearance</li>
                        <li>Do not use mobile phones while working</li>
                    </ul>

                    <h2>The Sectors in Which We Can Help You</h2>
                    <p>In Australia, there are many roads, highways, and land development projects going on. The construction industry is rising. As Mates Group is one of the leading part-time hire company in Sydney, our workers are skilled in the following labour-hire areas:</p>
                    <ul>
                        <li>Demolition</li>
                        <li>Civil</li>
                        <li>Electrician</li>
                        <li>Riggers</li>
                        <li>Concreters</li>
                        <li>Scaffolding</li>
                        <li>Painters</li>
                        <li>Carpenters</li>
                        <li>Plumbers</li>
                        <li>Welders</li>
                    </ul>

                    <h2>Job Description </h2>
                    <p>Mates Group can arrange General & Skilled Labours with the following skill which has been described below in the full job description. We can provide One to Ten years of industry experience skilled labours. We can arrange staff for Melbourne, Sydney, Brisbane, Perth, Adelaide, and Gold Coast.</p>
                    <h2>Requirement for the Job:</h2>
                    <ul>
                        <li>A valid white card</li>
                        <li>Minimum 1-year experience in the construction sector</li>
                        <li>Enthusiastic and hard-working</li>
                        <li>Handling the power tools</li>
                        <li>Punctual</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection

