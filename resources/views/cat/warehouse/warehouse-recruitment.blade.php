@extends('layouts.page')

@section('title', 'Warehouse Recruitment Agency Melbourne, Labour Hire Sydney')
@section('meta_description', 'Australian company Mates Group provides warehouse, storefront workers hire services in Melbourne, Sydney, Adelaide, Brisbane, Perth & Parramatta NSW.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/WarehouseRecruitment1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Hire for Your Warehousing Operation in Australia">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title border-bottom">Hire for Your Warehousing Operation in Australia</h1>
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
                        <img src="/images/WarehouseRecruitment2.jpg" class="figure-img img-fluid rounded" alt="Warehouse Recruitment Agency Melbourne">
                    </figure>
                    <p>Warehouse staff plays a big role in Australia’s economy. Many companies in Sydney and Melbourne want staff for their warehouses. We, the Mates Group company, recruit warehouse labour and provide the selected candidates to our respected client companies.</p>

                    <p>We are a provider of strong and excellent storehouse labours in Brisbane, Perth, Parramatta, NSW, and Adelaide. Many ware house companies want to work with efficient labours for their store. We know the challenges and risks faced by the companies when it comes to the question of the labour recruitment process. In this respect, you can depend on us without any doubt.</p>

                    <p>We have a skilled and experienced recruiter team to grab the strong and hard worker candidates. Hiring labour for a company is too much time-consuming and cost-effective. Always your goal is to hire better workers for your company. You will face hassle whenever you will try to select the best candidates from thousands of job applications. We do not want you to get in a haphazard situation enlisting best-fit staff. Just leave that job for us. We select the candidates who are perfect for your organization.</p>

                    <h2>Pick Packers & Warehouse Workers - Casual & Full Time positions available!</h2>
                    <p>Mates Group can arrange warehouse workers with the following skill which has been described below in the full job description. We can provide One to Ten years of industry experienced Warehouse workers. We can arrange staff for Melbourne, Sydney, Adelaide, Brisbane, Perth, Parramatta, NSW.</p>

                    <h2>Job Description:</h2>
                    <p>Reporting to our warehouse recruitment authority the successful applicants will be a hands-on, energetic team player who wants the learning curve, the experience, and opportunities that this position will offer.</p>
                    <p>As an applicant you should have the following qualities:</p>

                    <ul>
                        <li>Always ready and available to work when needed.</li>
                        <li>Physically fit.</li>
                        <li>Enthusiastic and hard worker.</li>
                        <li>Frequently working ability in cramped and awkward positions.</li>
                        <li>Must be able to work with a team.</li>
                    </ul>

                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.warehouse')
            </aside>

        </div>
    </div>
@endsection

