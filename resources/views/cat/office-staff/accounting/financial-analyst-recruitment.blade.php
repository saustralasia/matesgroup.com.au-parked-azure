@extends('layouts.page')

@section('title', 'Financial Analyst Recruitment Agency in Melbourne & Sydney')
@section('meta_description', 'Australian company Mates Group provides finance, accounting analyst hire services in Melbourne, Sydney, Brisbane, Perth, and NSW')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/financial-analyst-recruitment2.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Trusted Finance Professional Recruitment Specialist</h1>
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
                        <img src="/images/FinancialAnalystRecruitment2.jpg" class="figure-img img-fluid rounded" alt="Financial Analyst Recruitment Agency in Melbourne & Sydney">
                    </figure>
                    <p>Financial Analysts are the running force of any company’s backend so that they are an extremely important person in an office. Here at Mates Group, we realize the significance of hiring a financial analyst that will help you to make business decisions.</p>
                    <p>As a leading hiring agency, Mates Group offers you the complete, scientific, and non-traditional financial analyst recruitment service in Melbourne and Sydney areas. As a result, you will find the perfect talented person for your company. We provide to our honourable clients the country’s topmost successful construction, engineering, marketing, sales, and financial staff support. Our skilled and talented recruiting team will consult with you and find out the need of your administration. After that, they will find the staff who will fit your organization.</p>

                    <h2>Why Mates Group?</h2>
                    <p>We have a long-term relationship with our client companies and we are always ready to support them. We got an extensive network of staff and clients so that we can help you providing economists or financial staff in a short time. We retain our talented employees who can work with the unique requirements of our clients. Your success is our success. Our job is to make you happy providing our expert employees to your companies and make you hassle-free. So, why are you waiting to contact us?</p>
                    <p>If you are an applicant you should have the following qualifications:</p>

                    <ul>
                        <li>Different kinds of experience in business support and financial analysis.</li>
                        <li>CPA or CA qualified.</li>
                        <li>Strong communication skills.</li>
                        <li>Maintain the company’s terms and policies.</li>
                        <li>Maintain a strong relationship with the team.</li>
                        <li>Handling and working ability in company software.</li>
                    </ul>

                    <h2>Job Description:</h2>
                    <p>Mates Group can offer a financial analyst with the following skill which has been described below in the full job description. We can provide one to ten years of industry experience financial analyst. We can arrange staff for Melbourne, Sydney, Brisbane, Perth, and NSW.</p>

                    <ul>
                        <li>Take part in collaborating with the team.</li>
                        <li>Take the challenge of any new task.</li>
                        <li>Working with the business team and analyse the reconcile brand spend.</li>
                        <li>Finance, economics, or banking support to the organization.</li>
                        <li>Complete monthly BPR, GPR.</li>
                        <li>Prepare the Opex planning tool.</li>
                        <li>Assisting with rebuilding the business model.</li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.office-staff')
            </aside>

        </div>
    </div>
@endsection

