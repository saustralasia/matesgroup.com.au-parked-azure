@extends('layouts.master')
@section ('title')
<title>Welcome to Mates Workforce</title>
@endsection
@section('content')
<header>
        <div class="top-header">
            <div class="container container-padding">
            <div class="top-header-logo">
               <a href="/"><img src="images/logo.png" alt=""> </a> 
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
    <h2>SUBMIT JOB VACANCY</h2>
    <p><a href="requirement">Employers</a> / Submit Job Vacancy</p>
 </div>   
</div><!-- pages-sologan -->
   <div class="pre-employment">
    <div class="container-tw container-padding">
       <div class="requirement-insights-header">
            <div class="dot-requirement">
               <img src="images/requirement/requirement-dot.png" alt="">
            </div>
             <p>Dear client, It is our pleasure to serve you with the best of the recruitment solutions. Please let us know your details of job requirement.</p>
         </div>
    </div><!-- container -->
 </div><!-- pre-employment -->
 <div class="submit-pages">
      <div class="container-tw container-padding">
            <div class="submit-block">
               <h2>Your Company Details</h2>
                  <form action="">
                        <div class="input-tw">
                           <div class="input-group">
                               <label for="">Company Name <span style="color:red">*:</span></label><br>
                               <input type="text" placeholder="Company name">  
                           </div> 
                        </div>
                        <div class="input-six">
                           <div class="input-six-block input-group">
                              <label for="">Address <span style="color:red">*:</span></label><br>
                              <input type="text" placeholder="Address">  
                           </div>
                            <div class="input-six-block input-group">
                              <label for="">Website:</label><br>
                              <input type="text" placeholder="Website">  
                           </div>
                        </div>
                        <div class="input-tw">
                           <div class="input-group">
                              <label for="">Contact person name <span style="color:red">*:</span></label><br>
                              <input type="text" placeholder="Contact person name">  
                           </div> 
                         </div>
                         <div class="input-six">
                              <div class="input-six-block input-group">
                                 <label for="">Email <span style="color:red">*:</span></label><br>
                                 <input type="text" placeholder="Email">  
                              </div>
                               <div class="input-six-block input-group">
                                 <label for="">Phone <span style="color:red">*</span></label><br>
                                 <input type="text" placeholder="Phone number">  
                              </div>
                           </div>     
                     </form> 
            </div>
            <div class="submit-block submit-block-padd">
               <h2>Job Details</h2>
                  <form action="">
                        <div class="input-tw">
                           <div class="input-group">
                               <label for="">Type of employment: <span style="color:red"></span></label><br>
                               <select name="" id="">
                                  <option value="Select">Select</option>
                               </select> 
                           </div> 
                        </div>
                        <div class="input-tw">
                              <div class="input-group">
                                  <label for="">Job title<span style="color:red">*</span>:</label><br>
                                  <input type="text" placeholder="Company name">  
                              </div> 
                           </div>
                           <div class="input-tw">
                              <div class="input-group">
                                  <label for="">Job Description <span style="color:red">*</span>:</label><br>
                                  <textarea ></textarea> 
                              </div> 
                           </div>
                           <div class="input-tw">
                        <div class="input-six-offset">
                           <div class="input-six-block input-group">
                              <label for="">No of employees:</label><br>
                              <input type="text" placeholder="No of employees">  
                           </div>
                           <div class="input-six-block input-group">
                              <label for="">Hours per week:</label><br>
                              <input type="text" placeholder="Hours per week">  
                           </div>
                        </div>
                        </div>
                        <div class="input-tw">
                           <div class="input-group">
                                 <label for="">Commencement date:</label><br>
                                 <input type="text" placeholder="Commencement date">  
                           </div> 
                         </div> 
                         <div class="input-tw">
                              <div class="input-group">
                                    <label for="">Message</label><br>
                                    <textarea></textarea>  
                              </div> 
                            </div>
                         <div class="input-tw">
                              <div class="input-group">
                                <input type="submit" value="Submit">  
                              </div> 
                         </div>    
                     </form> 
            </div>
        </div>   
     </div>
       
@endsection