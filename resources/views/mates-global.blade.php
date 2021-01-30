@extends('layouts.page')

@section('title', 'Staff Recruitment Service & Labour Hire Australia')
@section('meta_description', 'Mates Global is an innovative Australian recruitment company provides highly skilled shipbuilding, construction, electrical workers to different organizations worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/approach.png')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Mates Global</h1>
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
                        <img src="/images/mates-global2.jpg" class="figure-img img-fluid rounded" alt="Staff Recruitment Service and Labour Hire Australia">
                    </figure>
                    <h2><strong>Ship and Submarine Building workers</strong></h2>
                    <p>Mates provides ship and submarine building facilities with the assistance of highly qualified employees who specialise in the field.</p>
                    <p><strong>Why choose us?<br/></strong>Our aim is to provide customers with outstanding value through quality ship construction and repair services that are delivered on schedule while setting the industry standard for operational reliability and maintainability. We have qualified staff who finish the job to perfection.</p>

                    <table class="table table-bordered">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Pre-building</th>
                            <th scope="col">Building process</th>
                            <th scope="col">Post building</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Naval Architect</td>
                            <td>Welders</td>
                            <td>Quality Control Inspectors</td>
                        </tr>
                        <tr>
                            <td>Ship/Submarine designers</td>
                            <td>Solderers</td>
                            <td>Painters</td>
                        </tr>
                        <tr>
                            <td>Mechanical Engineer</td>
                            <td>Structural Fabricators</td>
                            <td>Interior Plasterers</td>
                        </tr>
                        <tr>
                            <td>Electrical Engineers</td>
                            <td>Plumbers</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Electricians</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Carpenters</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Riggers</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Supervisors</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Marine Surveyors</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>

                    <h2><strong>Skilled Construction Workers </strong></h2>
                    <p>Mates global supply skilled construction workers to various sites from around the world. We hire International high skill workers, allocating them to jobs to fill local shortages. Mates provide construction services, managing and developing production.</p>
                    <p><strong>Why choose us?<br /> </strong>We provide superior carpentry labour and building components to the commercial construction industry with a team of qualified and experienced members. Sourcing high skilled workers from overseas allow a person with a different perspective to be able to contribute to a project.</p>
                    <h2><strong>Highly skilled Electrical Trades</strong></h2>
                    <p>Mates global source and recruit highly skilled electrical trades staff. Whether you need&nbsp;a qualified electrician for long term or short term, we can provide.</p>
                    <p><strong>Why choose us?<br /> </strong>Our service is fast and effective, this allows our clients to achieve their project objectives and rely on us to find staff.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>

@endsection
