@extends('layouts.master', ['title' => 'Our Vision'])

@section('title', 'Best Fruit Picking Staff Recruitment/Hire Service Australia')
@section('meta_description', 'Are you looking for vegetable, fruit pickers hiring solutions? Mates Group is a leading company that offers recruitment services in Australia & worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
{{--two column css    --}}
<style>
    * {
        box-sizing: border-box;
    }

    /* Create two equal columns that floats next to each other */
    .column {
        float: left;
        width: 50%;
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

    <div class="header-banner" style="text-align: center">
            <h1 class="white line-12 text-45">Mates Group: Quality Fruit Picking Hiring Company</h1>
    </div>

    <div class="single-content">

        <div class="container">
            <div class="col-md-12, text-justify">
                <p style="font-size: 30px; text-align: center;"><strong>Fruit Picking Recruitment</strong></p>
                <div style="margin-left: 100px; margin-right: 100px; text-align: center"><p>Fruit picking is the perfect job for anyone. This will fresh your mind. So, you can choose this job as your career. You can keep your mind fresh as well as you can earn from this job. We provide you to this nice and calm job if you are interested so much.
                        <br>If you are interested in being in the open field, have a touch of the sun, enjoy the natural beauty, and get paid for it then join with us!
                        <br>We can support you while working in a new farm as a result you can overcome your worries and fear. We will find a perfect farm for you so that you can feel free to your workplace.
                    </p>
                </div>

            </div>
        </div>

        <div class="row" style="margin-top: 50px;">
            <div class="column" style="background-color:white; padding: 20px; text-align: center;">
                    <h2>Why Fruit Picking?</h2>
                    <p>In Australia we have fertile land. So, choosing the job of fruit picking can give you the opportunity to discover the land of Australia. Fruit picking is a fine job which will fill your mind with joy. You will able to take a breath of fresh air. You will find the peace of freedom. </p>
            </div>
            <div class="column" style="background-color:white; padding: 20px; text-align: center;">
                    <h2>Fruit Picking Opportunities</h2>
                    <p>Australian farm industry offers both entry level and professional jobs. So, if you are in entry level, no worry, you are encouraged to apply. You can start a career from here. You have a great opportunity here. Discover our fruit picking work opportunities. We have been engaged for many years in fruit picking supply.</p>
            </div>
        </div>
    </div>
@endsection
