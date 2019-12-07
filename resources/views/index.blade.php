@extends('layouts.master')
@section ('page_meta')
<meta name="description" content="Our team analyses the responsibility, role and amount of workers required for the job profile and scrutinizes the resumes to find the best suitable candidates. Mates Workforce has access to a number of candidates through our recruitment database." />
@endsection
@section ('title')
<title>Welcome to Mates Workforce</title>
@endsection
@section('content') 
@include ('layouts.slider');
<!-- === INSIGHTS === -->
<div class="insights">
    <div class="insights-section">
  <div class="insights-bg"></div><!-- insights-bg -->
  <div class="insights-bg-d"></div><!-- insights-bg-d -->
      <div class="insights-all-block">
    <div class="container container-padding">
      <div class="first-insights">
        <div class="first-insights-first">
            <div class="insights-header">
                <h4>Insights</h4>
                <hr>
                <h2>Our specialisasion</h2>
              </div><!-- insights-details -->
              <div class="first-insights-img">
                <img src="images/legal-team.jpg" alt="">
             </div><!-- first-insights-img -->
        </div>
        <div class="first-insights-sec">
            <div class="pre-insights">
                <h2>PRE-Employment Services</h2> 
                <a href="requirement"><button class="button-animation">Read more</button></a>
                </div>
        </div>
      </div>
    <div class="insight-sec-row">
      <div class="succ-d">
        <div class="ok">
          <img src="images/insights-ex-d.jpg" alt="">
        </div>
      </div>
      <div class="post">
         <h2>POST-EMPLOYMENT SERVICES</h2> 
        <a href="requirement"><button class="button-animation">Read more</button></a>   
      </div>
      <div class="third-pic-d">
          <img class="img-for-d" src="images/recruitment-team.jpg" alt="">
      </div>
    </div>
     </div><!-- insights-all-block -->
    </div><!-- container -->
  </div><!-- insights-section -->
</div><!-- insights -->
<!-- End Insights -->

<!-- === MWFLIFE === -->
<div class="mwflife-section">
 <div class="container-tw container-padding">
  <div class="mwflife">
   <div class="mwflife-details">
      <div class="round-small-dot">
        <div class="round-mobile"></div>
        <img class="small-dot-d" src="images/logo/ellipse.png" alt="">
      </div> 
      <h4>#mwflife</h4>
      <hr>
      <h2>Submit Job vacancy</h2>
      <p>Dear client, It is our pleasure to serve you with the best of the recruitment solutions. Please let us know your details of job requirement.</p>
      <a href="submit"><button class="button-animation">Submit jobs <i class="fas fa-angle-right"></i></button></a>
      <div class="round-big-dot"></div>
    </div><!-- mwflife-details -->
    <div class="mwflife-images">
      <div class="mwf-img-one">
        <img src="images/mwflife-d.jpg" alt="">
      </div><!-- mwf-img-one -->
      <div class="mwf-img-two"></div><!-- mwf-img-two -->
      <div class="mwf-img-thr"></div><!-- mwf-img-thr -->
    </div><!-- mwflife-imgaes -->
  </div><!--  -->
  </div><!-- container -->
</div><!-- mwflife-section -->
<!-- End Life -->

<!-- === LOREM 3 BLOCK === -->
<div class="lorem">
  <div class="lorem-all">
    <div class="container-tw container-padding">
  <div class="lorem-block">
    <h2>Analyse Job requirements</h2>
    <p class="hy">Our team analyses the responsibility, role and amount of workers required for the job profile and scrutinizes the resumes to find the best suitable candidates. Mates Workforce has access to a number of candidates through our recruitment database. </p>
   <a href="requirement"><button class="button-animation">Read more <i class="fas fa-angle-right"></i></button></a> 
  </div><!-- lorem-block -->
  <div class="lorem-block">
    <h2>Interview stage</h2>
    <p class="hy">Mates Workforce team performs a face-to-face meeting once candidates match the client's requirements. This is to ensure that the candidate's personality is analysed in-depth for the role, they are compared with credentials of the other candidates and their personal circumstances are known before finalizing the job offer.</p>
    <a href="requirement"><button class="button-animation">Read more <i class="fas fa-angle-right"></i></button></a>
  </div><!-- lorem-block -->
    </div><!-- container -->
 </div><!-- lorem-all -->
</div><!-- lorem -->
<!-- End Lorem -->

<!-- === MARKETING PARTNER === -->
<div class="marketing-partner">
  <div class="container-tw container-padding">
  <div class="marketing-partner-details">
    <h2 class="m-top-h">REQUIREMENT PROCESS PARTNER</h2>
    <p>Mates Workforce proven client approach process ensures we provide you the best labour solution for your business. By outsourcing this function to the Mates Workforce it allows your staff to focus on growing your business. We take on board responsibility right from the selection of a candidate to maintaining their pay and emoluments to that of their timely payment, pay roll services, Staff cover and welfare.</p>
    <h2 class="m-bot-h"> <a href="requirement"><button>LET'S START A DISCUSSION <i class="fas fa-angle-right"></i></button></a> </h2>
  </div><!-- marketing-partner-details -->
</div><!-- container -->
</div><!-- marketing-partner -->

<!-- === PARTNER === -->
<div class="partner">
    <div class="container-tw container-padding">
    <h2>#Partners</h2>
  <div class="partner-slider">
      <div class="owl-partner-slider owl-carousel owl-theme owl-loaded">
          <div class="owl-stage-outer">
              <div class="owl-stage">
                  <div class="owl-item owl-partner">
                      <a href="https://www.matesgroup.com.au/" target="_blank"><img src="images/logo/mgr.png" alt="Mates"></a>
                   </div>
                  <div class="owl-item owl-partner">
                    <a href="http://matesglobal.com/" target="_blank"><img src="images/logo/mg.png" alt="Mates Global"></a>
                  </div>
                  <div class="owl-item owl-partner">
                    <a href="http://asc.net.au/" target="_blank"><img src="images/logo/asc.png" alt="asc"></a>
                  </div>
                  <div class="owl-item owl-partner">
                     <a href="http://winfred.com.au/" target="_blank"><img src="images/logo/wf.png" alt="Winfred Services"></a> 
                  </div>
                  <div class="owl-item owl-partner">
                    <a href="http://www.freshexport.com.au/" target="_blank"><img src="images/logo/fea.png" alt="Fresh Export"></a>  
                  </div>
                  <div class="owl-item owl-partner">
                    <a href="http://pacl.com.au/" target="_blank"><img src="images/logo/pacl.png" alt="Pacific Australasia Corporation"></a>  
                  </div>
                  <div class="owl-item owl-partner">
                    <a href="https://www.matesgroup.com.au/" target="_blank"><img src="images/logo/gc.png" alt="Green Collar"></a>  
                  </div>
                  <div class="owl-item owl-partner">
                    <a href="https://www.matesgroup.com.au/" target="_blank"><img src="images/logo/Green-Business-Services.png" alt="Green Business Services"></a>  
                  </div>
                  <div class="owl-item owl-partner">
                      <a href="http://giafc.com.au/" target="_blank"><img src="images/logo/invest.png" alt="Global Investment"></a>  
                  </div>
                  <div class="owl-item owl-partner">
                      <a href="http://expresslabourhire.com.au/" target="_blank"><img src="images/logo/aust-ship.png" alt="Aust Ship"></a>  
                  </div>
              </div>
          </div>
      </div><!-- owl-carousel -->
  </div><!-- partner-slider -->
</div><!-- container -->
</div><!-- partner -->
<!-- End partner -->
@endsection
