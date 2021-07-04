@extends('layouts.page')

@section('title', 'Mates Group: Why Choose Us')
@section('meta_description', 'Mates Group is an innovative Australian recruitment company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/WhyChoose1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Why Choose Us">
    </header>

    <div class="container">
        <div class="row mt-6">
        <div class="col-md-8">
            <h1 class="display-4 mb-2 blog-post-title border-bottom">Why Choose Us</h1>
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
                        <img src="/images/why-choose.jpg" class="figure-img img-fluid rounded" alt="Why Choose Us">
                    </figure>
                    <p>We’re confident that we are the only international business support & services company that provides following benefits to your company.</p>

                    <ul class="choose">
                        <li><b>Committed to Quality.</b></li>
                        <p>Mates Group is committed to maintain 100% service quality. We ensure that the products and services we provide completely fulfil our client’s expectations. </p>
                        <li><b>High Touch Communication.</b></li>
                        <p>Our target is to handle every call and mails instantly with a LIVE person. Forget being in automated menu hell. We are always here for responding your queries within a while.</p>
                        <li><b>We Help Solve Your Business Problems.</b></li>
                        <p>We have experienced & successful business analyst to guide you a new profitable business track. Our prime goal is to make our clients flourish.</p>
                        <li><b>Business savvy – </b></li>
                        <p>We provide complete business solutions along with job placement service, IT, VISA consultancy and assures from a thorough understanding of the business benefit for your company.</p>
                        <li><b>A Proven Track Record.</b></li>
                        <p>Unlike others in our industry, we can prove and show you how we ensure our service quality; because we keep promises what we deliver. </p>
                        <li><b>Satisfaction Guaranteed.</b></li>
                        <p>We ensure 100% Satisfaction Guarantee – We want you to be fully satisfied with our services. We will manage whatever it takes to make you pleased. </p>

                    </ul>
                    <p>With a database of highly skilled office support staff, Mates has the administration
                                recruitment resources, extensive experience and recruiting knowledge to provide qualified
                                candidates to specific employers.</p>
                    <p>We provide superior carpentry labour and building components to the
                                commercial construction industry with a team of qualified and experienced members.</p>
                        </p>
                    <p>Our aim is to provide customers with outstanding value through quality
                                ship construction and repair services that are delivered on schedule, while setting the
                                industry standard for operational reliability and maintainability. We have qualified staff
                                who finish the job to perfection.</p>
                    <p>Our team's combined experience in recruitment, working rurally and being in the
                                vegetable industry for many years allows us to provide the best and most suitable candidates
                                for the job</p>
                    <p>We find the most suitable people who can transform your business
                                through technology and innovation.<br>We have experienced staff who do background checks and
                                reference checks to make sure the candidates selected are up to the mark. </p>


                    <p>We hire International high skill workers, allocating them to local jobs. We not
                                only recruit them but also provide them with settlement services and support with visa
                                processing insuring reliability and long-term work.</p>
                    <p>We have worked with the major industry groups and we have a strong knowledge of
                                their employment needs. We have experienced personnel who understand the labour market and
                                can find the best candidates for any business.
                            </p>
                    <p>We do proper background checks on our employees, making sure they have
                                        proper experience, the right licences to perform.

                                    </p>
                    <p>We only recruit workers who have proper experience in the
                                                field. We hold a big database of suitable candidate so requirements can be
                                                find with urgency and ease.
                                            </p>
                    <p></p>
                    <p>
                        The safety method is Associate in nursing integral a part of our business operation and basic to our current business success. The success of the health and safety program ultimately depends on the disposition of management, supervisors and workers to collaborate and work conjointly as a team to attain our goal of getting work environments that square measure wholly freed from injuries and incidents.
                    </p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.aboutus')
            </aside>

        </div>
    </div>
@endsection
