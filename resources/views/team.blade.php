@extends('layouts.master', ['title' => 'Our Team'])

@section('title', 'Mates Group: Best Company for Labour Hire Solutions Australia')
@section('meta_keywords', 'best labour hire services australia, labour hire solutions australia')
@section('meta_des', 'Mates Group is the leading company that provides labor hire solutions in Australia and worldwide.')

@section('content')
<div class="page-head-area">
    <img src="{{asset('images/ourteam.jpg')}}" alt="">
    <div class="page-text">
<!--        <h2 style="color:#fff">Our Team</h2>-->
    </div>
</div>

<div class="single-content">
       <h1 class="extra-h2" style="text-align: center;">Mates Group: Get Quality Labour Hire Service </h1>
       <hr>

    <div class="container">
       <div class="col-md-6">
           <div class="about-image">
               <img src="{{asset('images/team.jpg')}}" alt="">
           </div>
       </div>

    <div class="col-md-6, text-justify">
    <p>
    Our team members are trained in their field. They have confidence in what they do and do so with no mistake.
   Our team at Mates Group ensure that our clients receive a comprehensive labour-hire service.
   </p>

        </div>

    </div>
</div>
@endsection
