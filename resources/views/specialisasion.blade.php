@extends('layouts.master')
@section ('title')
<title>Welcome to Mates Workforce</title>
@endsection
@section('content')
<header>
        <div class="top-header">
            <div class="container container-padding">
            <div class="top-header-logo">
               <a href=""><img src="images/logo.png" alt=""></a>  
            </div><!-- top-header-logo -->
            <div id="nav">
                <div id="phone-icon"><a href="tel:+61287333549"><i  class="fas fa-phone"></i></a></div><!-- open -->
                <div class="phone-details">

                </div><!-- phone-details -->
                <div id="open_menu"><i class="fas fa-bars"></i></div><!-- open -->
                <div id="close_menu">&times;</div><!-- open -->
                  <ul class="menu_ul">
                      <li><a href="/">Home</a></li>
                      <li><a href="about">About Us</a></li>
                      <li class="m-p-n"><a href="requirement">Employers</a> <i onclick="menuFunction()" id="arrow-m" class="fas fa-chevron-down"></i>
                        <ul id="drop-down-menu-m">
                          <li><a href="requirement">Our Requirement Process</a></li>
                          <li><a href="specialisasion">Our Specialisasion</a></li>
                          <li><a href="submit">Submit Job Vacancy</a></li>
                        </ul>
                      </li>
                      <li><a href="contact">Contact Us</a></li>
                </ul>
            </div><!-- nav -->
            <div class="menu-d">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="about">About Us</a></li>
                <li class="parent-menu"><a href="requirement">Employers</a>
                  <ul class="drop-down-menu">
                    <li><a href="">Our Requirement Process</a></li>
                    <li><a href="specialisasion">Our Specialisasion</a></li>
                    <li><a href="submit">Submit Job Vacancy</a></li>
                  </ul>
                </li>
                <li><a href="contact">Contact Us</a></li>
                <li class="menu-phone-lg"><span><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:+61287333549">(02) 8216 0934</a></span></li>
              </ul>
            </div><!-- menu-d -->
           <!-- <div class="menu-phone-lg">
              <span><i class="fas fa-phone"></i>&nbsp;&nbsp;(02) 8216 0934</span>
            </div> -->
        </div><!-- container -->
    </div><!-- top-header -->
  </header>
<div class="pages-sologan requirement-sologan">
 <div class="container container-padding">
    <h2>OUR SPECIALISASION</h2>
    <p><a href="requirement">Employers</a> / Our Specialisasion</p>
 </div>   
</div><!-- pages-sologan -->
   <div class="pre-employment">
    <div class="container-tw container-padding">
       <div class="requirement-insights-header">
            <div class="dot-requirement">
               <img src="images/requirement/requirement-dot.png" alt="">
            </div>
             <h4>#MWLIFE</h4>
             <hr>
             <h2>Our Specialisasion</h2>
         </div>
      <div class="pre-employment-body">
         <div class="pre-employment-block">
               <p><strong>Mates Workforce</strong> specialises in recruitment both in Australia and internationally.</p>
               <p> We seek to attract special skilled workers from all over the world to fill our local skill shortages in Australia.</p>
               <p>One of the main contributions of our company is to have the right kind of staff who help to achieve our client’s goals in the business and reach the targets. We offer you with services for the specialised workforce solutions through the delivery of flexible labour and skilled manpower.</p>
               <p>Some of the categories which we recruit special skilled workers for include: </p>
               <ul>
                  <li>Office Support</li>
                  <li>Construction Labour</li>
                  <li>Warehouse Staff</li>
                  <li>Truck and Forklift Operators</li>
                  <li>Farmworkers</li>
                  <li>Process Workers</li>
                  <li>Hotels and Hospitality</li>
                  <li>Hospital and aged care services</li>
               </ul>
             </div>
            
          <div class="pre-employment-block">
                <img src="images/about/part-of-one.jpg" alt="">
          </div>
      </div>
    </div><!-- container -->
 </div><!-- pre-employment -->


   
@endsection