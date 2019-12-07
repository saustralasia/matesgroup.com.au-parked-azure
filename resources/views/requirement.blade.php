@extends('layouts.master')
@section ('title')
<title>Welcome to Mates Workforce</title>
@endsection
@section('content')
<header>
        <div class="top-header">
            <div class="container container-padding">
            <div class="top-header-logo">
               <a href="/"><img src="images/logo.png" alt=""></a>  
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
    <h2>REQUIREMENT PROCESS</h2>
    <p><a href="requirement">Employers</a> / Our Requirement Process</p>
 </div>   
</div><!-- pages-sologan -->
<div class="focus-best">
   <div class="container-tw container-padding">
     <div class="focus-best-block">
         <div class="requirement-insights-header">
               
                <h2>Our focus</h2>
                <p>We are service oriented and we work with our clients to understand their requirements.</p>
                <p>We have a strong interview and selection process to ensure we select the best candidates. We also have a training and induction facility to prepare successful candidates for their assignment. We also lessen the administrative burden of our clients by managing the payroll process of all labour provided. All you do is pay the invoice provided by Mates.</p>
                <p>Providing a safe working environment for our employees and contractors is our priority. We provide occupational health and safety inductions for our employees/contractors before they are allocated to our clients.</p>
            </div>
     </div>
   </div>
</div>
<div class="focus-best-last">
      <div class="container-tw container-padding">
        <div class="focus-best-block">
            <div class="requirement-insights-header">
                   <h2>What we do best</h2>
                   <p>We provide short term labour to various industries no matter the size of the business. Labour Hire is an effective way of covering short term needs, vacancies and annual leave, projects or a way of allowing to focus on the business rather than managing day to day labour requirements. By outsourcing this function all you do is advise us the labour required.</p>
                   <p>The industry sectors we provide labour to are: </p>
                   <ul>
                      <li>Office Support</li>
                      <li>Construction Labour</li>
                      <li>Warehouse Staff</li>
                      <li>Truck and forklift Operators</li>
                      <li>Farm workers</li>
                      <li>Process Workers</li>
                   </ul>
               </div>
        </div>
      </div>
   </div>
   <div class="pre-employment">
    <div class="container-tw container-padding">
       <div class="requirement-insights-header">
             <h2>Our approach</h2>
         </div>
      <div class="pre-employment-body">
         <div class="pre-employment-block">
               <p>Our approach is Service oriented, we understand the requirements of the client as well as how the right kind of staff can improve productivity. We take on board responsibility right from the selection of a candidate to maintaining their pay and emoluments to that of their timely payment, pay roll services, Staff cover and welfare.</p>
               <p>Mates Workforce’s proven client approach process ensures we provide our clients with the best labour solution for your business. By outsourcing this function, it allows your staff to focus on growing your business.</p>
               <p>This facility lessens the extra burden of the client having to handling their staff and allows them to concentrate more on their business improvisation.</p>
             </div>
            
          <div class="pre-employment-block">
                <img src="images/about/part-of-one.jpg" alt="">
          </div>
      </div>
    </div><!-- container -->
 </div><!-- pre-employment -->
<div class="requirement-team-details">
   <div class="container-tw container-padding">
         <div class="requirement-insights-header">
               <div class="dot-requirement">
                  <img src="images/requirement/requirement-dot.png" alt="">
               </div>
                <h4>#MWLIFE</h4>
                <hr>
                <h2>Pre-employment service</h2>
            </div>
      <h3>CLIENT APPROACH PROCESS</h3>
      <img src="images/about/flow-chart.svg" alt="">
   </div>    
</div>
<div class="client-process">
   <div class="container-tw container-padding">
      <div class="client-process-block">
         <div class="c-l-first">
               <h3>Analyse Job Requirements</h3>
               <p>Our team analyses the responsibility, role and amount of workers required for the job profile and scrutinizes the resumes to find the best suitable candidates. Mates Workforce has access to a number of candidates through our recruitment database. </p>
         </div>
         <div class="c-l-sec">
               <h3>Skill testing</h3>
               <p>Before we recruit and employ the candidates in the workplace, we feel it is our responsibility to test the skills that the candidates possess. This ensures their ability to perform to the fullest while working. Hence, we shortlist the candidates based on the skills and experience required for the role.</p>
         </div>
         <div class="c-l-the">
               <h3>Pre-employment checks</h3>
               <p>Our success is reliant on close working relationships and understanding of client process combined with experience in the industry and the functionality of the business. We conduct rigorous security background checks on candidates to make sure we have a safe work environment.</p>
         </div>
      </div>
      <div class="client-process-block">
            <div class="c-r-first">
                  <h3>Choosing the Right Profile</h3>
                  <p>We are unique in the way we match candidates to our clients. Without meeting someone face to face you cannot make an accurate assessment of their skills, abilities, attitude, desire, behaviour and passion for the opportunity they are applying for. We have developed a system which describes their attributes and vital understanding of the candidate. This method has proven to be very successful in placing the right person at the right place for the right job.</p>
            </div>
            <div class="c-r-sec">
                  <h3>Interview stage</h3>
                  <p>Mates Workforce team performs a face-to-face meeting once candidates match the client's requirements. This is to ensure that the candidate's personality is analysed in-depth for the role, they are compared with credentials of the other candidates and their personal circumstances are known before finalising the job offer.</p>
            </div>
      </div>
   </div>    
</div>

<div class="pre-employment post-employment">
   <div class="container-tw container-padding">
      <div class="requirement-insights-header">
           <div class="dot-requirement">
              <img src="images/requirement/requirement-dot.png" alt="">
           </div>
            <h4>#MWLIFE</h4>
            <hr>
            <h2>Post-employment service</h2>
        </div>
     <div class="pre-employment-body">
        <div class="pre-employment-block">
              <p><strong>Mates Workforce</strong> is also able to provide post-employment services to our Clients. These includes:</p>
              <ul>
                 <li>Employment Record maintenance</li>
                 <li>Candidate Counselling and Induction</li>
                 <li>Work Cover services</li>
                 <li>Pay Roll and Benefit services</li>
                 <li>Arbitration and Staff behaviour</li>
              </ul>
            </div>
           
         <div class="pre-employment-block">
               <img src="images/about/part-of-one.jpg" alt="">
         </div>
     </div>
   </div><!-- container -->
</div><!-- pre-employment -->
<div class="requirement-team-details">
      <div class="container-tw container-padding">
         <h3>CLIENT APPROACH PROCESS</h3>
         <img src="images/about/flow-chart2.svg" alt="">
      </div>    
   </div>

   
@endsection