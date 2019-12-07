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
<div class="pages-sologan">
 <div class="container container-padding">
    <h2>About Us</h2>
 </div>   
</div><!-- pages-sologan -->
<div class="about-history">
      <div class="dot-about">
            <img src="images/about/dot-about.png" alt="">
         </div>
   <div class="container-tw container-padding">
   <div class="about-insights-header">
        <h4>Company</h4>
        <hr>
        <h2>Our approach</h2>
   </div><!-- insights-header -->
   <div class="about-main">
        <p><strong>MATES WORKFORCE</strong> has been providing labour solutions for over 9 years. We understand that businesses need a flexible labour force to allow it to grow and develop. We are committed to providing both skilled and unskilled labour at short notice for periods of one day and more.</p>
        <p>We have worked with the major industry groups and we have a strong knowledge of employment needs. Our company has experienced personnel's who understand the labour market and can work with clients to find the best possible labour solution for each job category.</p>
        <p>Using labour hire is a proven way of reducing costs and improving efficiency. It allows the managers to focus on growing the business and leaves the daily labour resource management to us.</p>
        <div class="services-circle">
          <h3>SERVICES OF MATES WORKFORCE</h3>
          <img src="images/about/aboutUs-circle.svg" alt="">
        </div>
   </div><!-- about-main -->
</div> <!-- container -->
</div><!-- about-history -->
<div class="about-partner">
      <div class="container-tw container-padding">
      <div class="about-insights-header">
            <h4>#WHO WE WORK WITH</h4>
            <hr>
            <h2>Our partners</h2>
            <p class="about-partner-p">Our partners and associates</p>
      </div><!-- insights-header -->
      <div class="about-partner-list">
         <div class="about-partner-block">
            <img src="images/logo/wf.png" alt="">
         </div>
         <div class="about-partner-block">
            <img src="images/logo/Mates-Global.png" alt="">
         </div>
         <div class="about-partner-block">
            <img src="images/logo/Green-Business-Services.png" alt="">
         </div>
         <div class="about-partner-block">
               <img src="images/logo/asc.png" alt="">
         </div>
            <div class="about-partner-block">
               <img src="images/logo/aust-ship.png" alt="">
            </div>
            <div class="about-partner-block">
               <img src="images/logo/express.png" alt="">
            </div>
            <div class="about-partner-block">
               <img src="images/logo/pacl.png" alt="">
            </div>
            <div class="about-partner-block">
                  <img src="images/logo/fea.png" alt="">
            </div>
               <div class="about-partner-block">
                  <img src="images/logo/invest.png" alt="">
               </div>
               <div class="about-partner-block">
                     <img src="images/logo/Mates-Group.png" alt="">
                  </div>
               <div class="about-partner-block">
                  <img src="images/logo/gc.png" alt="">
               </div>
      </div>
  </div><!-- container -->
</div><!-- about-partner -->
<div class="about-vision">
<div class="about-hand">
   <div class="about-dot-two">
      <img src="images/about/about-dot-two.png" alt="">
   </div>
   <div class="hand-img">
     <img src="images/about/manufacturing-workforce.jpg" alt=""> 
   </div>  
</div><!-- about-hand -->
    <div class="container-tw container-padding">
         <div class="about-insights-header">
            <h4>#MWLIFE</h4>
            <hr>
            <h2>Our vision & values</h2>
         </div><!-- insights-header -->
         <div class="about-vision-body">
            <p>Mates Workforce is committed to providing the best labour solution to its clients. We are an equal opportunity recruiter encouraging both diversity and respect.</p>
            <p>Our vison is to make Mates workforce one of the best recruitment companies in Australia and provide labour solutions to international clients.</p>
            <h6>At Mates workforce we have a fixed set of values: </h6>
            <ul>
               <li>We demonstrate complete integrity, upholding honesty and strong moral principles. </li>
               <li>Our innovative approach along with our extensive candidate databases, sets us apart from other companies in this industry.</li>
               <li>We are committed to the health and safety of our staff and any personnel who come into contact with our company. All our staff are trained and inducted before they start work, and will act in accordance with the safety systems and policies of the workplace. </li>
               <li>We treat each other, our clients and candidates with mutual respect.</li>
            </ul> 
         </div>
   </div><!-- container -->
</div><!-- about-vision -->
<div class="part-of">
      <div class="dot-about">
         <img src="images/about/dot-about.png" alt="">
      </div>
   <div class="container-tw container-padding">
      <div class="about-insights-header">
            <h4>#MWLIFE</h4>
            <hr>
            <h2>Part of Mates Workforce</h2>
            <p class="about-part-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
       </div><!-- insights-header -->
       <div class="part-img-body">
          <div class="part-img-block">
             <img src="images/about/part-of-one.jpg" alt="">
          </div>
          <div class="part-img-block">
               <img src="images/about/part-of-one.jpg" alt="">
            </div>
       </div>
      </div> <!-- container -->
</div><!-- part-of -->
<div class="about-team">
   <div class="container-tw container-padding">
         <div class="about-insights-header">
               <h4>#MWLIFE</h4>
               <hr>
               <h2>Our Team</h2>
               <p class="about-team-p">Mates Workforce has an experienced and diverse team who follow current market trends and employment requirements for all industries so they can recruit the best candidates and provide the best solutions. The depth of experience of our management team covers all facets of recruitment and short-term labour hire.</p>
          </div><!-- insights-header -->
         <div class="about-team-details">
            <img src="images/about/flow-chart.svg" alt="">
            <p>All departments work together to ensure an organised process leading to client and worker satisfaction.</p>
            <h6>This consists of our:</h6>
            <ul>
               <li>HR Solutions Team</li>
               <li>Market Research Team</li>
               <li>Business Development Team</li>
               <li>Business Management Team</li>
               <li>Legal Team</li>
               <li>Recruitment Team</li>
               <li>Document and Certification Checking Team</li>
               <li>Training and Skills Team</li>
               <li>Data and Roster Management Team</li>
               <li>Accounting and Payroll Team</li>
            </ul>
         </div> 
   </div><!-- container -->
</div><!-- about-team -->

<div class="commitment">
   <div class="container-tw container-padding">
      <div class="commitment-body">
         <div class="commitment-block">
               <div class="about-insights-header">
                     <h4>#MWLIFE</h4>
                     <hr>
                     <h2>Our commitment</h2>
                     <p class="about-commitment-p">Our commitment is to provide the best labour solution that meet our client’s requirements in a timely manner to provide them with cost and efficiency benefits.</p>
                     <p class="about-commitment-p">We are also committed to complying with Fair Work Requirements and ensuring all employees meet the Australian government work requirements. We are committed to Total Quality Management philosophy to ensure client satisfaction.</p>
                     <p class="about-commitment-p">Our highly experienced and skilled team is committed to a high standard of excellence.</p>
                </div><!-- insights-header -->
         </div><!-- commitment-block -->
         <div class="commitment-block">
               <img src="images/about/part-of-one.jpg" alt="">
         </div><!-- commitment-block -->
      </div>
   </div><!-- container -->
</div><!-- commitment -->
@endsection