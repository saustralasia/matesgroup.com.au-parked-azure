@extends('layouts.master', ['title' => 'Our Vision'])

@section('title', 'Best Office Administrator Recruitment/Hire Service Australia')
@section('meta_description', 'Mates Group is a reputed company with clients around the world. We provide office administrator recruitment or hire solutions in Australia & worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

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
    <div class="header-banner" style="text-align: center;">
            <h1 class="white line-12 text-45">Mates Group: Trusted Office Administrator Hire Company</h1>
    </div>

    <div class="single-content">
        <div class="container">
            <p style="font-size: 30px;">We are a specialist in office administrator recruitment Australia</p>
            <p>Administration and support staff are sought after. Organisations progressively require brief and perpetual staff with the correct sort of specialised and relational abilities to work successfully with a wide scope of partners.</p>

            <p>Taking a shot at a genuinely consultative premise, we offer a scope of enlistment alternatives, regardless of whether you are seeking initiate for momentary spread in a rush, a maternity or paternity contract over a fixed period or another perpetual recruit.</p>
            <p style="font-size: 20px;">Recruit rapidly from a certified ability pool</p>
            <p>MatesGroup is an office administrator hire company worldwide. Every year we proceed office administrator recruitment hire services for different companies. Our applicants have magnificent specialised and revealing abilities, yet have the correct mix of correspondence and consistent improvement outlook to adjust rapidly in any business setting.</p>

            <p style="font-size: 20px;">Master guidance on employing patterns</p>
            <p>Our advisors have expert market information on business support salaries, work titles and recruiting patterns to guarantee you pull in and hold the best ability at the proper compensation. We routinely have visitor speaker occasions to guarantee we are constantly creating and assembling our systems.</p>

            <p style="text-align: center; font-size: 30px; margin-top: 50px;">Administration & office support roles we recruit for</p>
            <div class="row">
                <div class="column" style="background-color:white; text-align: center">
                    <p>
                        <ul>
                            <li>Executive Assistant</li>
                            <li>Sales/ Outbound Calls</li>
                            <li>Project Support</li>
                            <li>Document Control</li>
                            <li>Financial Services Support</li>
                            <li>Facilities Support</li>
                            <li>Marketing & Events Support</li>
                            <li>Reception</li>
                            <li>Office Manager</li>
                        </ul>

                </div>
                <div class="column" style="background-color:white; text-align: center">
                    <p>
                        <ul>
                            <li>Customer Service Management</li>
                            <li>Data Entry</li>
                            <li>Contracts Administrator</li>
                            <li>IT Support</li>
                            <li>Logistics Coordinator</li>
                            <li>Legal Support</li>
                            <li>Order Processing</li>
                            <li>Personal Assistant</li>
                        </ul>

                </div>
                <div class="column" style="background-color:white; text-align: center">
                    <p>
                        <ul>
                            <li>HR Support</li>
                            <li>Team Assistant</li>
                            <li>Customer Service</li>
                            <li>Sales Support</li>
                            <li>Government Support</li>
                            <li>Records Management</li>
                            <li>Administration</li>
                            <li>Workforce Management</li>
                        </ul>

                </div>
            </div>
        </div>
    </div>
@endsection
