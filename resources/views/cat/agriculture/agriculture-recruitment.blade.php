@extends('layouts.page')

@section('title', 'Agriculture/Agribusiness Recruitment Agency, Rural Hire Australia')
@section('meta_description', 'Australian company Mates Group provides agriculture, agribusiness, farm staff hire services in Adelaide, Brisbane, Sydney & Melbourne.')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/agriculture-header.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="display-4 mb-4 blog-post-title border-bottom">Agribusiness Recruitment Specialist</h1>
            </div>
            <div class="col-md-4">

            </div>
        </div>
    </div>



    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">
                    <p>Agriculture is a part and parcel of Australia’s economy.
                        Once upon a time, agriculture was the main key to the development of
                        human civilisation. Agribusiness is a very profitable business in
                        Australia because of its fertile land and a large number of domestic
                        animal resources.
                    </p>
                    <p>As a leading agriculture and farmworker recruitment agency in Australia,
                        we provide a large number of skilled workers to the top agribusiness companies.
                        We hire agriculture labours from Adelaide, Brisbane, Sydney, Melbourne, and
                        everywhere in Australia and provide them to the rural farm work companies.
                        So, you can also consider us as a rural employment company.
                        We have a skilled hire team who search and grab the strong
                        and hard worker candidates for you so that you will not get any hassle for
                        recruiting staffs for your company. We know the value of your time.
                        So, if you are looking labours for farming, agro-food, irrigation, cultivation,
                        husbandry or horticulture then please feel free to contact us.
                        We are here ready to help you.
                    </p>
                    <p><strong>Job Description:</strong><br>Reporting to our agribusiness manager the successful
                        applicants will be a hands-on, energetic team player who wants
                        the learning curve, the experience, and opportunities
                        that this position will offer.
                    </p>
                    <p><strong>Applicants should be:</strong><br></p>
                    <ul>
                        <li>Always ready and available to work</li>
                        <li>Physically fit</li>
                        <li>Have a strong motivation to work</li>
                        <li>Be hygiene</li>
                        <li>Previous experience will be a plus</li>
                        <li>Must be able to follow the instructions and have to do the work accordingly</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.agriculture')
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
