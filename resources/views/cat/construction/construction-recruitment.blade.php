@extends('layouts.page')

@section('title', 'Construction Labour Recruitment/Hire Agency Melbourne & Sydney')
@section('meta_description', 'Australian company Mates Group provides construction labour and Civil engineer recruitment services in Melbourne, Sydney, New South Wales (NSW), and Victoria.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/construction.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Construction & Civil Engineering Recruitment Agency</h1>
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
                        <img src="/images/construction.jpg" class="figure-img img-fluid rounded" alt="Construction Labour Recruitment or Hire Agency Melbourne & Sydney">
                    </figure>
                    <h2>Searching for a construction recruitment agency?</h2>
                    <p>
                        We are a construction & Civil engineering
                        recruitment company that provides our staff
                        in Melbourne, Sydney, New South Wales (NSW),
                        and Victoria in Australia.
                    </p>

                    <p>
                        We have a specialist team to hire
                        construction staff. Our specialist
                        team is an expert in ensuring the talent
                        search and grabbing the capable one using the
                        latest technology and process. Many companies
                        want full time and part-time construction workers
                        at different times of the year and that's why we
                        always have to contact our construction employees.
                    </p>

                    <h2>Find Your Preferred Construction Job Agency</h2>
                    <p>
                        We realise that Australia’s construction industry
                        is one of the most profitable businesses and we are
                        always researching the construction business market.
                        We find the perfect matched employees for your company
                        as a result you will no need to worry about the
                        selection process of a candidate. We find talented
                        candidates for your company.
                    </p>

                    <p>We follow a unique and long-term relationship with our respective client companies as well as our employees. Therefore, it is easy for us to provide employees instantly. We have a large number of construction labourers and civil engineers looking for employment all over Australia.</p>

                    <p>
                        Every year we recruit a large number of
                        staffs for different construction companies in roles including:
                    </p>

                    <ul>
                        <li>Civil & Road infrastructure</li>
                        <li>Resource & Mining</li>
                        <li>Restoration & fit-out works</li>
                        <li>Commercial</li>
                    </ul>

                    <h2>Talk to Our Expert Today: </h2>
                    <p>
                        We are skilled and many years experienced.
                        We can find out the ideal matched job for you.
                        Wherever there is a need for construction and civil
                        labour hire or recruitment we will get you there.
                        So, if you are searching for construction and civil
                        workers then feel free to contact our specialist team today!
                    </p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.construction')
            </aside>

        </div>
    </div>
@endsection

