@extends('layouts.page')

@section('title', 'Recruitment Agency Sunshine Coast, Labour Hire Southern Queensland')
@section('meta_description', 'Australian company Mates Group provides commercial, executive, permanent, and temporary staff hire solutions in Sunshine Coast & Southern Queensland.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/RecruitmentSunshineCoast2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Mates Group: Expert Recruitment Solutions Provider</h1>
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
                        <img src="/images/RecruitmentSunshineCoast1.jpg" class="figure-img img-fluid rounded" alt="Recruitment Agency Sunshine Coast">
                    </figure>
                    <p>Mates Group is one of the labour-hire recruitment agencies in Sunshine Coast and Southern Queensland. We are specialists in labour hiring solutions in Australia.</p>
                    <p>Whether you need to have a temporary or permanent solution for recruiting staff in your organization in Sunshine Coast or Queensland, you can have trust in us. It’s been many years since we are managing labour-hire in topmost profitable companies. We always keep in contact with our potential candidates to provide your business with the best-fit staff.</p>
                    <p>Our philosophy is to increase the company’s productivity by reducing risk and finally profitability is the last outcome. We have a skilled recruitment team who search and grab strong and hard worker candidates for you so that you will not get any trouble for recruiting labours for your company. We know the value of your time. We do not want you clumsy recruiting the candidates.</p>
                    <p>We have a specialist team in Mates Group. Firstly, our consulting team will talk to you and find out your company’s needs. They will find what kind of people will be the perfect one for your company. After all, they will search for candidates from our talent pool. We like to find out those candidates who love to take new challenges. Our office authority always keeps track of our honourable clients and our provided employees. Our specialist team is smart enough and expert in ensuring the talent search and grabbing the capable one using the latest technology and process. They are also security concerns.</p>
                    <h2>We Mates Group have a prominent team of workers:</h2>
                    <p>Our skilled and prominent team is the cause of our pride. We are different from other companies and able to provide you employees for</p>
                    <ul>
                        <li>Construction hire</li>
                        <li>Tradesmen</li>
                        <li>Landscaping</li>
                        <li>Manufacturing</li>
                    </ul>
                    <h2>The sectors in which we can help you:</h2>
                    <p>We, Mates Group, can provide you with people in the following industries:</p>
                    <ul>
                        <li>Civil & Construction business</li>
                        <li>Food processing business factories</li>
                        <li>Resources and mining business</li>
                        <li>Transport labour-hire</li>
                        <li>Logistics</li>
                        <li>Company manufacturing</li>
                        <li>Technical labour and recruitment</li>
                        <li>Marketing staffs</li>
                        <li>Administration support jobs</li>
                    </ul>

                    <h2>Job Description: </h2>
                    <p>Mates Group can provide staff with the following skill which has been described below in the full job description. We can provide One to Ten years of industry experience employees. </p>
                    <h2>If you are a candidate you need:</h2>
                    <ul>
                        <li>A valid white card.</li>
                        <li>Minimum 1-year experience in the related sector but freshers are also encouraged to apply.</li>
                        <li>Enthusiastic and hard-working</li>
                        <li>Handling the power tools</li>
                        <li>Punctual</li>
                        <li>Have the ability to hold some weight</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.recruitment')
            </aside>

        </div>
    </div>
@endsection
