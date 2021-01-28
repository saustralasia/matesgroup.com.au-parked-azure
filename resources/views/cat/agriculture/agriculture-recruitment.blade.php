@extends('layouts.page')

@section('title', 'Agriculture/Agribusiness Recruitment Agency, Rural Hire Australia')
@section('meta_description', 'Australian company Mates Group provides agriculture, agribusiness, farm staff hire services in Adelaide, Brisbane, Sydney & Melbourne.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/agriculture-header.jpg')}}');">
        {{--        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/finallogo-200.png')}}" alt="">--}}
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">Agribusiness Recruitment Specialist</h1>
                <hr>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>



    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">

                    <figure class="figure">
                        <img src="/images/blogs/agriculture-recruitment1.jpg" class="figure-img img-fluid rounded" alt="Agriculture or Agribusiness Recruitment Agency, Rural Hire Australia">
                    </figure>
                    <p>Agriculture is a big part of Australia’s economy. Once upon a time, agriculture was the main key to the development of human civilisation. Agribusiness is a very profitable business in Australia because of its fertile land and many domestic animal resources.</p>
                    <p>As a leading agriculture recruitment agency in Australia, we provide many skilled workers to the top agribusiness companies. We hire agriculture labours from all around Australia and recruit them to rural farm work companies. So, you can also consider us as a rural employment company. We have a skilled team who search and grab the strong and hardworking candidates for you so that you will not have to worry about a thing. We know the value of your time. If you are looking for labourers for the farming, agro-food, irrigation, cultivation, husbandry, or horticulture field then please feel free to contact us. We are here, ready to help.</p>


                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.agriculture')
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
