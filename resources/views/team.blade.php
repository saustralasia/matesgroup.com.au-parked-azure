@extends('layouts.master', ['title' => 'Our Team'])
@section('content')
<div class="page-head-area">
    <img src="{{asset('images/ourteam.jpg')}}">
    <div class="page-text">
<!--        <h2 style="color:#fff">Our Team</h2>-->
    </div>
</div>

<div class="single-content">
   <center>
       <h2 class="extra-h2">Our Team</h2>
       <hr>
   </center>
    <div class="container">
       <div class="col-md-6">
           <div class="about-image">
               <img src="{{asset('images/team.jpg')}}" alt="">
           </div>
       </div>

    <div class="col-md-6" class="text-justify">
    <p>
    Our team members are trained in their field. They have confidence in what they do and do so with no mistake.
   Our team at Mates Group ensure that our clients receive a comprehensive labour-hire service.
   </p>

        </div>

    </div>
</div>
@endsection
