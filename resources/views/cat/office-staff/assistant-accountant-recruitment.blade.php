{{--@extends('layouts.master', ['title' => 'Our Vision'])--}}


{{--@section('content')--}}
{{--    <style>--}}
{{--        * {--}}
{{--            box-sizing: border-box;--}}
{{--        }--}}

{{--        /* Create three equal columns that floats next to each other */--}}
{{--        .column {--}}
{{--            float: left;--}}
{{--            width: 33.33%;--}}
{{--            padding: 10px;--}}
{{--            height: 300px; /* Should be removed. Only for demonstration */--}}
{{--        }--}}

{{--        /* Clear floats after the columns */--}}
{{--        .row:after {--}}
{{--            content: "";--}}
{{--            display: table;--}}
{{--            clear: both;--}}
{{--        }--}}
{{--    </style>--}}

{{--    <div class="header-banner" style="text-align: center">--}}
{{--            <h1 class="white line-12 text-45">Mates Group: Trusted Assistant Accountant Hire Company</h1>--}}
{{--    </div>--}}

{{--    <div class="single-content">--}}
{{--        <div class="container">--}}


{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--@endsection--}}






@extends('layouts.page')

@section('title', 'Assistant Accountant Recruitment Agency in Sydney & Melbourne')
@section('meta_keywords', 'assistant accountant recruitment agency sydney,
assistant accountant recruitment agency melbourne,
assistant accountant recruitment services sydney,
assistant accountant recruitment services melbourne,
assistant accountant hire agency sydney,
assistant accountant hire agency melbourne')
@section('meta_des', 'Australian company Mates Group provides assistant accounting professionals hire services in Sydney, Melbourne, Brisbane, and Perth.')


@section('content')
        <style>
            * {
                box-sizing: border-box;
            }

            /* Create three equal columns that floats next to each other */
            .column {
                float: left;
                width: 33.33%;
                padding: 10px;
                height: 300px; /* Should be removed. Only for demonstration */
            }

            /* Clear floats after the columns */
            .row:after {
                content: "";
                display: table;
                clear: both;
            }
        </style>

    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/mo-3.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Our Vision">
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="display-4 mb-4 blog-post-title border-bottom">Australia’s Assistant Accounting Hiring Specialist</h1>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-md-8 blog-main text-justify">
                <div class="blog-post">
                    <h2>Assistant accountant recruitment service Australia</h2>

                    <p>Mates Group provides the assistant accountant hire service for your company. We collect our candidates worldwide </p>

                    <h2>Remote staffing:</h2>
                    <p>Talented experts accessible ASAP and the correct arrangement choice so they can work distantly and safely.
                    <ul>
                        <li>We offer white-glove administration so you have the help and hardware to empower far off work. We make arrangement basic and peaceful. </li>
                        <li>Access a more profound ability pool, unlimited by geology. We have the correct fit, regardless of whether the individual carries on with down the road or most of the way around the country. </li>
                        <li>Let us help with the whole recruiting process and get the far off staff you need, quick. </li>
                        <li>Get genuine feelings of serenity knowing your applications and information are secure with virtual work desktops.</li>
                    </ul>


                    <h2>Flexible hiring:</h2>
                    <p>Adaptable, on-request staffing to help oversee dynamic outstanding burdens, new tasks or worker nonappearances.<br>
                        Jump on-request access to profoundly talented brief staff, temporary workers and specialists in the territories of bookkeeping, account, IT and office support.</p>

                    <h2>Full-time hiring:</h2>
                    <p>Adding to your group can be quick and simple.<br>Specific neighbourhood selection representatives — We handle the whole employing process for you, from advancing your activity and friends to expanding offers and arranging pay.</p>

                    <h2>Why us?</h2>

                    <div class="row">
                        <div class="column" style="background-color:white; text-align: center;">
                            <p style="font-size: 25px; font-weight: bold;">The right fit</p>
                            <p>We have candidates evaluated and all set. An ideal choice for your business can start today.</p>
                        </div>
                        <div class="column" style="background-color:white; text-align: center;">
                            <p style="font-size: 25px; font-weight: bold;">We help you get it right</p>
                            <p>We will help you to get into the right track. We are an assistant accountant hire company worldwide.</p>
                        </div>
                        <div class="column" style="background-color:white; text-align: center;">
                            <p style="font-size: 25px; font-weight: bold;">All time support</p>
                            <p>Our support team always ready to handle any of your problem.</p>
                        </div>
                    </div>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.office-staff')
            </aside>

        </div>
    </div>
@endsection


