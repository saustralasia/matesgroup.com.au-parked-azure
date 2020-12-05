@extends('layouts.master', ['title' => 'Contact us'])

@section('title', 'Mates Group: Contact Us ')
@section('meta_description', 'We are providing recruitment & labour hire solutions to meet any hiring needs you have. Mates Group provides services across Australia and worldwide.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
<div class="page-head-area">
        <img src="{{asset('images/contact.jpg')}}" alt="">
        <div class="page-text">
            <h1 class="white">Contact Us</h1>
        </div>
    </div>
    <div class="container">
        <div class="about-box">

                <div class="row mt-6">
                    <div class="col-md-4">
                        <div class="address" style="padding:15px">
                            <h3 class="black">HEAD OFFICE</h3>
                            <span>LEVEL 1, 35-39 AUBURN ROAD,</span>
                            <span>AUBURN NEW SOUTH WALES 2144</span>
                            <span>AUSTRALIA</span>
                            <span>LANDLINE: (02) 8733 3549</span>
                            <span>EMAIL: enquiries@matesgroup.com.au</span>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="address" style="padding:15px">
                            <h3 class="black">NEW ZEALAND OFFICE</h3>
                            <!--<span>H-34 FLAT-2C Road-2 Nikunja-2  </span>-->
                            <span>LEVEL 8</span>
                            <span>WEST PLAZA BUSINESS CENTER</span>
                            <span>3 ALBERT ST</span>
                            <span>AUCKLAND 1010</span>
                            <span>NEW ZEALAND</span>
                            <span>LANDLINE: (64) 9930 1278</span>
                            <span>EMAIL: enquiries@matesgroup.com.au</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address" style="padding:15px">
                            <h3 class="black">SINGAPORE OFFICE</h3>
                            <!--<span>H-34 FLAT-2C Road-2 Nikunja-2  </span>-->
                            <span>30 ROBERTS LANE, #02-01</span>
                            <span>SINGAPORE 218309 </span>
                            <span>LANDLINE: (65) 6396 6293 / 6341 5238</span>
                            <span>EMAIL: enquiries@matesgroup.com.au</span>
                        </div>
                    </div>
                </div>

                <div style="text-align: center">
                	<h3 class="mt-6">Get in Touch</h3>
               	    <hr>
                </div>

                   <div class="row">
	                <div class="col-md-6">
                    @if (session('status'))
                                    <div class="alert alert-success">
                                       {{ session('status') }}
                                    </div>
                                  @endif
                                  @if ($errors->any())
                                      <div class="alert alert-danger">
                                         <ul>
                                  @foreach ($errors->all() as $error)
                                             <li>{{ $error }}</li>
                                  @endforeach
                                         </ul>
                                      </div>
                                  @endif
	                    <form method="post" style="margin-bottom:5px" action="{{ route('contactus_store') }}">
                        @csrf
	                        <div class="form-group">
                                <label for="input-field">Full name</label>
                                <input type="text" id="input-field" name="name" class="form-control" required>
	                        </div>
	                        <div class="form-group">
	                            <label>Email</label>
	                            <input type="email" name="email" class="form-control" required>
	                          </div>
	                        <div class="form-group">
	                           <label>Contact number(optional)</label>
	                           <input type="number" name="phone" class="form-control">
	                        </div>



	                        <div class="form-group">
	                            <label>Message</label>
	                            <textarea class="form-control" name="message" required></textarea>
	                        </div>
	                        <input type="submit" name="Submit" value="Send" class="btn btn-primary">
	                    </form>
	                </div>
	                <div class="col-md-6">
	               		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.495641443278!2d151.03051191520967!3d-33.851115280661105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdb04dce39ef%3A0xb5f33454a7428244!2sMates+Group!5e0!3m2!1sen!2sbd!4v1551854555296" width="600" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
	               </div>
                </div>
        </div>
    </div>

@endsection
