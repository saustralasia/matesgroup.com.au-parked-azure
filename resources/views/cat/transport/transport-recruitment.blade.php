@extends('layouts.page')

@section('title', 'Transport & Logistics Recruitment Agency in Perth, Brisbane')
@section('meta_description', 'Australian company Mates Group provides transport, freight, cargo, logistics hire services in Brisbane, Perth, Sydney, and Melbourne.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/transport-recruitment1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Logistics Hire Expert in the Australia</h1>
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
                        <img src="/images/blogs/transport-recruitment2.jpg" class="figure-img img-fluid rounded" alt="Transport and Logistics Recruitment Agency in Perth">
                    </figure>
                    <h2>Transport & Logistics Recruitment</h2>
                    <p>The transport and logistics industries are the important source of power when considering Australia's growth. So, whenever you want to recruit brilliant employees for your company, you’ll want to get a trusted agency. We, the Mates Group company here to help you.</p>

                    <p>We have many partner companies all over Australia. Every year we provide so many transport and logistics staff to our business partner companies. On that purpose, we do transport and logistics hiring in Brisbane, Perth, Sydney, and Melbourne.</p>

                    <p>Transport labour should be more careful and reliable. We, with our experienced recruiting team, find out the reliable and experienced transport labours verifying their license and other relevant documents. As a result, you do not need of wasting your time and money to recruit the best-fit candidates. Another big factor is finding out the perfect candidates from the many job applicants is not so easy. We’ll take care of it for you. We mobilize them and find out from them who is really good.</p>

                    <p>We provide our qualified candidates for carrying goods & freights to your companies. If you need any kind of logistics recruitment help, you can feel free to contact us. Sometimes many companies want transportation & logistics labour urgently. Hiring our qualified candidates, we will provide them to your office in a very short span.</p>

                    <h2>Transport Manager</h2>
                    <p>Mates Group can arrange Transport Manager with the following skill which has been described below in the full job description. We can provide one to ten years of industry experienced transport managers. We can arrange staff for Brisbane, Perth, Sydney, and Melbourne.</p>

                    <h2>Job Description:</h2>
                    <h2>About the job:</h2>
                    <p>As a candidate you need to have the following qualities and responsibilities:</p>

                    <ul>
                        <li>Have complete knowledge of Transportation rules and regulations.</li>
                        <li>Always maintain safety standards.</li>
                        <li>Quality of planning and delivery of the loads.</li>
                        <li>Monitoring quality that how to reducing the delivery cost.</li>
                        <li>Need to have experience in this field.</li>
                        <li>The practice of safe working.</li>
                        <li>Vehicle maintenance experience.</li>
                    </ul>

                    <p>Assuring your companies safety is our responsibility. So, don’t be hesitated to get our service.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.transport')
            </aside>

        </div>
    </div>
@endsection

