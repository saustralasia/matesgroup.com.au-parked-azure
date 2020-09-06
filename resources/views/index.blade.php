@extends('layouts.master')

{{--@extends('layouts.master', ['title' => 'Staff Recruitment Service & Labour Hire Australia'])--}}
{{--adding three lines for search engine meta link--}}
@section('title', 'Staff Recruitment Service & Labour Hire Australia')
@section('meta_keywords', 'staff recruitment Australia, staff recruitment services Australia,
staff recruitment worldwide, labour hire Australia, labour hire worldwide, global labour hire,
staff solution Australia, staff recruitment company Australia, global staff recruiting services,
staff recruitment in Sydney,
staff recruitment in Melbourne,
staff recruitment in Queensland,
staff recruitment in Victoria,
staff recruitment in NSW,
staff recruitment in Brisbane,


Labour hire services in Sydney,
Labour hire services in Melbourne,
Labour hire services in Queensland,
Labour hire services in Victoria,
Labour hire services in NSW,
Labour hire services in Brisbane,


staff recruitment services in Sydney,
staff recruitment services in Queensland,
staff recruitment services in Melbourne,
staff recruitment services in NSW,
staff recruitment services in Victoria,
staff recruitment services in Brisbane,


regional job Queensland,
regional job Sydney,
regional job Melbourne,
regional job NSW,
regional job Victoria,
regional job Brisbane,


local staff recruitment company,
local labour hire company,


local staff recruitment company in Sydney,
local staff recruitment company in Melbourne,
local staff recruitment company in Queensland,
local staff recruitment company in Victoria,
local staff recruitment company in NSW,
local staff recruitment company in Brisbane,
')
@section('meta_des', 'Mates Group is a reputed Australian company with clients around the world. We offer people recruitment, labor hire solutions in Australia and worldwide.')


@section('content')

    <style>
        /*1,2,3,4 for table 1*/
        #more {display: none;}
        #more2{display: none;}
        #more3{display: none;}
        #more4{display: none;}
        /*5,6,7 for table 2*/
        #more5{display: none;}
        #more6{display: none;}
        #more7{display: none;}
        /*8,9,10 for table 3*/
        #more8{display: none;}
        #more9{display: none;}
        #more10{display: none;}
        /*11,12,13,14 for table 4*/
        #more11{display: none;}
        #more12{display: none;}
        #more13{display: none;}
        #more14{display: none;}
    </style>

<br>
<div class="main-area">
    <div class="container-fluid">
        <div class="">
            <div class="second-banner">
                <div class="banner-head">
                      <div class="banner-heading-line" style="text-align: center;">
                              <a href=""><h1>Mates Group</h1></a>
                      </div>

                        <h2 class="banner-head-h1" style="text-align: center;">Providing Recruitment and Labour Hire around The Globe</h2>

                </div>
                <br>
                <div class="banner-area">
                    <img src="{{asset('images/logo/mates_group_logo.png')}}" alt="MATES GROUP logo">
                </div>
            </div>
        </div>
        <div class="page-banner">
            <div class="col-md-2">
                <div class="side-text">
                   <a href="mission"><h4>Our Mission</h4></a>
                    <p>
                        Our mission is to assist our clients to grow their business by providing the right labor solutions. <!-- lasting, and substantial enhancements in their business and to make a good firm that draws, develops, excites, and retains exceptional professionals. -->
                        <a href="mission" class="read-more">(read more…)</a>
                    </p>
                    <a href="vision"><h4>Our Vision</h4></a>
                    <p>
                        We have an experienced and diverse team who follow current market trends and employment  <!-- and 3. Associated with clients, networks, controllers and one another; these qualities mirror the best parts of our legacy, and stay key to our long haul achievement. -->
                        <a href="vision" class="read-more">(read more…)</a>
                    </p>
                    <a href="approach"> <h4>Our Approach</h4></a>
                    <p>We are focused on creating connections that last. Our approach is to be an association  <!--  creating connections that last. Our faith in making the best decision stays key to our prosperity. -->
                    <a href="approach" class="read-more">(read more…)</a> </p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="banner-head">
                      <div class="banner-heading-line" style="text-align: center;">
                              <a href=""><h1>Mates Group</h1></a>
                      </div>

                        <h2 class="banner-head-h1" style="text-align: center;">Providing Recruitment and Labour Hire around The Globe</h2>

                </div>
                <br>
                <div class="banner-area">
                    <img src="{{asset('images/logo/mates_group_logo.png')}}" alt="MATES GROUP PROVIDES RECRUITMENT AND LABOUR HIRE AROUND THE GLOBE">
                </div>
            </div>
            <div class="col-md-2">
                <div class="side-text">
                    <a href="team"><h4>Our Team</h4></a>
                    <p>
                        Our team members are trained in their field. They have confidence in what they do an do so   <!-- Together, we ensure you're contributing where the best returns are, while building confidence over each touchpoint. -->
                        <a href="team" class="read-more">(read more…)</a>
                    </p>
                    <a href="safety"><h4>Our Safety</h4></a>
                    <p>Mates group focuses on preventing workplace injuries through providing workers with  <!-- unsafe   practices and occurrences of environmental injury from our activities. Our goal is to ensure a workplace that is completely free of injuries and accidents.--> <a href="safety" class="read-more">(read more…)</a></p>
                    <a href="commitment"><h4>Our Commitment</h4></a>
                    <p>We deliver what we promise”, we dedicate ourselves to make sure our valued clients are successful  <!--  and it’s 	the only  cause you can choose us. We dedicate ourselves to make sure our valued clients are successful. If they’re not prosperous then neither are we.--> 	 <a href="commitment" class="read-more">(read more…)</a></p>
                </div>
            </div>
        </div>
    </div>
    <h4 class="text-center partner-text">Our Partners and Associates</h4>
<div style="overflow:hidden !important;margin:0 auto">
    <div class="owl-carousel owl-theme service-image">
        <div class="item">
           <div class="serive-image">
                <a rel="nofollow" href="http://www.freshexport.com.au" target="_blank"><img src="{{asset('images/logo/freshexport.png')}}" alt="Specialises in exporting fresh fruits and fresh vegetables"></a>
           </div>

            <p class="slogan" style="text-align: center;">Specialises in exporting fresh fruits and fresh vegetables.</p>

        </div>
        <div class="item">
           <div class="serive-image">
              <a rel="nofollow" href="http://jobsgalore.com.au" target="_blank"><img src="{{asset('images/logo/logo2.jpg')}}" alt="Specialises in job recruitment, interviews and candidate selection"></a>
            </div>

             <p class="slogan" style="text-align: center;">
               Specialises in job recruitment, interviews and candidate selection.
             </p>

          </div>
          <div class="item">
               <div class="serive-image">
                   <a rel="nofollow" href="http://matesglobal.com" target="_blank"> <img src="{{asset('images/logo/Mates-Global.png')}}" alt="Specialises in providing staff recruitment and labour hire to clients around the world"></a>
                </div>

               <p class="slogan" style="text-align: center;">Specialises in providing staff recruitment and labour hire to clients around the world.</p>

        </div>
        <div class="item">
           <div class="serive-image">
                <a rel="nofollow" href="http://asc.net.au/" target="_blank"><img src="{{asset('images/logo/asc.png')}}" alt="Specialises in worldwide import, export and shipping services."></a>
          </div>

            <p class="slogan" style="text-align: center;">Specialises in worldwide import, export and shipping services.</p>

        </div>

        <div class="item">
           <div class="serive-image">
                <a rel="nofollow" href="http://winfred.com.au" target="_blank"><img src="{{asset('images/logo/winfred.png')}}" alt="Speciallises in experienced cleaning labour and providing Security personal"></a>
           </div>

            <p class="slogan" style="text-align: center;">Speciallises in experienced cleaning labour and providing Security personal.</p>

        </div>
        <div class="item">
           <div class="serive-image">
                <a rel="nofollow" href="http://matesgroup.com.au/office-staff-recruitment" target="_blank"><img src="{{asset('images/logo/matesworkforce.png')}}" alt="Specializing providing skilled and unskilled labour to Australian companies"></a>
           </div>

            <p class="slogan" style="text-align: center;">Specialising providing skilled and unskilled labour to Australian companies.</p>

        </div>
    </div>
</div>

<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG OFFICE STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Mates Group office provides specialised office support staff Australia wide. The main   contribution of our company is to have the right kind of staff who help to achieve goals in a business and reach the required targets.
            </p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white text-18">
                With a database of highly skilled office support staff, Mates has the administration recruitment resources, extensive experience and recruiting knowledge to provide qualified candidates to specific employers.
            </p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
	 	    <div class="table-class">
                    <h5 class="white font-cursive">Specialises in</h5>
				    	<table class="table table-bordered key-th">
				    	    <tr>
				    	        <th>Accounting</th>
				    	        <th>Administration</th>
				    	        <th>IT and Technology</th>
				    	        <th>Recruitment and selection</th>
				    	    </tr>

				    	    <tr>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Payroll officer</li>
                                        <span id="dots">...</span>
                                        <span id="more">
				    	                <li>Book keeper</li>
				    	                <li>Accounts payable officer</li>
				    	                <li>Assistant accountant</li>
				    	                <li>Financial analyst</li>
                                        </span>
				    	            </ul>
				    	        </td>

				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Office administrator</li>
                                        <span id="dots2"></span>
                                        <span id="more2">
				    	                <li>Executive assistant</li>
				    	                <li>Receptionist</li>
				    	                <li>Customer service officer</li>
                                        <li>coordinator</li>
                                        </span>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>IT Business Analyst</li>
                                        <span id="dots3">...</span>
                                        <span id="more3">
                                        <li>Network administrator</li>
				    	                <li>Database developer</li>
				    	                <li>Systems engineer</li>
				    	                <li>Help desk officer</li>
                                        </span>
				    	            </ul>
				    	        </td>
				    	        <td>
                                    <ul class="tab-l">
                                        <li>Recruitment consultant </li>
                                        <span id="dots4"></span>
                                        <span id="more4">
                                        <li>Business development manager</li>
                                        <li>Sales consultant</li>
                                        <li>Assistant recruitment consultant</li>
                                        <li>Assistant business development executive</li>
                                        </span>
                                    </ul>
                                </td>

				            </tr>

				    </table>

                    <button onclick="read_more_less()" class="btn btn-success" id="mybtn">Read more</button>
                </div>
	 	    </div>
        </div>
    </div>
</div>

<!--    =================  Second Slider    =================-->

<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-5">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG CONSTRUCTION STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Mates group supply civil and construction workers to various sites around the Australia, from small to large level of projects and development. Mates Group provides construction services, managing and developing production.</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white text-18">We provide superior carpentry labour and building components to the commercial construction industry with a team of qualified and experienced members.</p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
        <h5 class="white font-cursive">Specialises in</h5>
				<div class="table-class">
				    <table class="table table-bordered key-th">
				    	    <tr>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Surveyor</li>
				    	                <li>Linemen</li>
				    	                <li>Fencer</li>
				    	                <li>Glazier </li>
                                        <span id="dots5"></span>
                                        <span id="more5">
				    	                <li>Heavy equipment operator,</li>
				    	                <li>Insulation installer</li>
				    	                <li>Ironworker (or steel erector</li>
				    	                <li>Labourer</li>
				    	                <li>Landscaper </li>
				    	                <li>Mason</li>
				    	                <li>Millwright </li>
				    	                <li>House painter and decorator</li>
				    	                <li>Pile driver</li>
				    	                <li>Electrician</li>
				    	                <li>Elevator mechanic </li>
				    	                <li>Carpenter</li>
				    	                <li>Project Assistant</li>
				    	                <li>Framing Carpenter</li>
				    	                <li>Safety Director</li>
                                        </span>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Joiner</li>
				    	                <li>Joiner</li>
				    	                <li>Inspector</li>
				    	                <li>Plasterer </li>
                                        <span id="dots6"></span>
                                        <span id="more6">
				    	                <li>Dry Wall Finisher</li>
				    	                <li>Dry wall Installer</li>
				    	                <li>Planner</li>
				    	                <li>Equipment Operator</li>
				    	                <li>Welder </li>
				    	                <li>Painter</li>
				    	                <li>Master Plumber</li>
				    	                <li>Building Inspector</li>
				    	                <li>Civil Engineer</li>
				    	                <li>Plumber </li>
				    	                <li>Project Manager</li>
				    	                <li>Roofer</li>
				    	                <li>Contract Administrator</li>
				    	                <li>Scheduler</li>
				    	                <li>Field Engineer</li>
                                        </span>
				    	            </ul>
				    	        </td>

				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Concrete Laborers</li>
				    	                <li>Pipefitter</li>
				    	                <li>Crane Operator</li>
				    	                <li>Carpet layer</li>
                                        <span id="dots7"></span>
                                        <span id="more7">
				    	                <li>Sheet metal worker </li>
				    	                <li>Safety manager / Safety Officer</li>
				    	                <li>Site manager</li>
				    	                <li>Waterproofer</li>
				    	                <li>Contract Manager</li>
				    	                <li>General Labourer</li>
				    	                <li>Construction Assistant</li>
				    	                <li>Construction Coordinator</li>
				    	                <li>Construction Engineer</li>
				    	                <li>Construction Foreman</li>
				    	                <li>Construction Manager</li>
				    	                <li>Construction Superintendent</li>
				    	                <li>Construction Supervisor</li>
				    	                <li>Construction Worker</li>
                                        </span>
				    	            </ul>
				    	        </td>
				    	    </tr>
				    	</table>
                        <button onclick="read_more_less2()" class="btn btn-success" id="mybtn2">Read more</button>
				    </div>
	 	        </div>
            </div>
        </div>
    </div>




<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-6">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG SHIPBUILDING</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Mates provides ship and submarine building facilities with the assistance of highly qualified employees who specialise in the field.</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white text-18">Our aim is to provide customers with outstanding value through quality ship construction and repair services that are delivered on schedule, while setting the industry standard for operational reliability and maintainability. We have qualified staff who finish the job to perfection.</p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
	 	    <h5 class="white font-cursive">Specialises in</h5>
                <div class="table-class">
                <table class="table table-bordered key-th">
                   <tr>
                       <th>Pre-building</th>
                       <th>Building process</th>
                       <th>Post building</th>
                   </tr>
                    <td>
                        <ul class="tab-l">
                            <li>Naval Architect </li>
                            <li>Ship/Submarine designers </li>
                            <span id="dots8">...</span>
                            <span id="more8">
                            <li>Mechanical Engineer</li>
                            <li>Electrical Engineers</li>
                            </span>
                        </ul>
                    </td>
                    <td>
                        <ul class="tab-l">
                            <li>Welders</li>
                            <li>Solderers</li>
                            <span id="dots9">...</span>
                            <span id="more9">
                            <li>Structural Fabricators</li>
                            <li>Plumbers</li>
                            <li>Electricians</li>
                            <li>Carpenters</li>
                            <li>Riggers</li>
                            <li>Supervisors</li>
                            <li>Marine Surveyors</li>
                            </span>
                        </ul>
                    </td>
                    <td>
                        <ul class="tab-l">
                            <li>Quality Control Inspectors</li>
                            <li>Painters</li>
                            <span id="dots10">...</span>
                            <span id="more10">
                            <li>Interior Plasterers</li>
                            </span>
                        </ul>
                    </td>
                </table>
                    <button onclick="read_more_less3()" class="btn btn-success" id="mybtn3">Read more</button>
              </div>
	 	   </div>
        </div>
    </div>
</div>




<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-7">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG AGRICULTURE STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Mates is an Australian company with clients around the world. Proudly representing major agribusiness, large primary producers and rural operators. We provide pickers, packer, turf cleaners and more suitable experienced workers according to requirements</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white">Our team's combined experience in recruitment, working rurally and being in the vegetable industry for many years allows us to provide the best and most suitable candidates for the job</p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
        <h5 class="white font-cursive">Specialises in</h5>
           <div class="table-class">
				<table class="table table-bordered key-th">
                    <tr>
                        <th>Vegetable farm</th>
                        <th>Fruit farm</th>
                        <th>Dairy farm</th>
                        <th>Farm work</th>
                    </tr>
                    <tr>
                        <td>
                            <ul class="tab-l">
                                <li>Vegetable grower</li>
                                <li>Tractor operator</li>
                                <li>Farm hand</li>
                                <span id="dots11"></span>
                                <span id="more11">
                                <li>Washing/cleaning</li>
                                <li>Vegetable pickers</li>
                                <li>Vegetable packers</li>
                                <li>Stock control clerk</li>
                                </span>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>Fruit pickers</li>
                                <li>Forklift operator</li>
                                <li>Administration clerk</li>
                                <span id="dots12"></span>
                                <span id="more12">
                                <li>Fruit grower</li>
                                <li>Orchard hand</li>
                                </span>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>Dairy farm hand</li>
                                <li>Heard manager</li>
                                <li>Milkers</li>
                                <span id="dots13"></span>
                                <span id="more13">
                                <li>Calf rearing</li>
                                </span>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>General farm work</li>
                                <li>Weed sprayingr</li>
                                <li>Painting job</li>
                                <span id="dots14"></span>
                                <span id="more14">
                                <li>Farm sitter</li>
                                <li>Turf cleaning</li>
                                </span>
                            </ul>
                        </td>
                    </tr>
				</table>
               <button onclick="read_more_less4()" class="btn btn-success" id="mybtn4">Read more</button>
            </div>
	 	   </div>
        </div>
    </div>
</div>



<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-2">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG ENGINEERING STAFF</h3>
          </div>

        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">With a database of highly skilled office support staff, MG Engineers specialises in recruiting employees for a wide range of engineering jobs. Our specialist recruitment services include the recruitment of permanent, part time or casual staff who hold extensive experience in the desired engineering field.</p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
	 	    <div class="table-class">
                    <h5 class="white font-cursive">Specialises in</h5>
				    	<table class="table table-bordered key-th">
				    	    <tr>
				    	        <th>Civil Engineers</th>
				    	        <th>Electrical Engineer</th>
				    	        <th>Marine Engineer</th>
				    	        <th>Computer Engineer</th>
				    	    </tr>
				    	    <tr>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Building control surveyor</li>
				    	                <li>Consulting civil engineer</li>
				    	                <li>Contracting civil engineer</li>
				    	                <li>Design engineer</li>
				    	                <li>Site engineer</li>
				    	                <li>Structural engineer</li>
				    	                <li>Building services engineer</li>
				    	                <li>Construction manager</li>
				    	                <li>Engineering geologist</li>
				    	                <li>Environmental consultant</li>
				    	                <li>Quantity surveyor</li>
				    	                <li>Sustainability consultant</li>
				    	                <li>Urban designer</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Project Engineer</li>
				    	                <li>Senior software Engineer</li>
				    	                <li>E engineering manager</li>
				    	                <li>Electrics technician</li>
				    	                <li>Electrical project engineer</li>
				    	                <li>Principal electric engineer</li>
				    	                <li>Design Engineer</li>
				    	                <li>System design engineer</li>
				    	                <li>Engineering Associate</li>

				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Coastal/Marine Environmental</li>
				    	                <li>Scientist</li>
				    	                <li>Marine Project Engineer</li>
				    	                <li>Marine Design Engineers</li>
				    	                <li>Projects Planners Estimators (Marine Engineering/Machining</li>
				    	                <li>Senior Marine Engineer</li>
				    	                <li>Mechanical Design Engineer</li>
				    	                <li>Construction manager</li>
				    	                <li>Maintenance technician</li>
				    	                <li>Maintenance supervisor</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	              <li>Sitecore senior developer</li>
				    	              <li>Software engineering intern</li>
				    	              <li>Software engineering graduate</li>
				    	              <li>Embedded wireless engineer</li>
				    	              <li>Data centre operations</li>
				    	              <li>Computer systems validation specialist</li>
				    	              <li>Data scientist</li>
				    	              <li>Test engineer</li>
				    	              <li>Software engineer</li>
				    	              <li>Android engineer</li>
				    	              <li>Networking consultant</li>
				    	              <li>developers</li>
				    	            </ul>
				    	        </td>
				    	    </tr>
				    	</table>
                  </div>
	 	        </div>
            </div>
        </div>
    </div>

<!-- ================ third Slider =================== -->
<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-3">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG IT STAFF</h3>
          </div>
        <div class="main-section-area">
            <p class="white">We source and place high quality technology, digital and business transformation professionals to clients who require.</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white text-18">We find the most suitable people who can transform your business through technology and innovation.<br>We have experienced staff who do background checks and reference checks to make sure the candidates selected are up to the mark. </p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
	 	    <h5 class="white font-cursive">Specialises in</h5>
				    	<div class="table-class">
				    	<table class="table table-bordered key-th">
				    	    <tr>
				    	        <th>Software and programming</th>
				    	        <th>Hardware and manufacturing</th>
				    	    </tr>
				    	    <tr>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Data analyst</li>
				    	                <li>Graphic designer</li>
				    	                <li>Systems administrator</li>
				    	                <li>Web designer </li>
				    	                <li>Technical support</li>
				    	                <li>Computer programmer</li>
				    	                <li>Software developer</li>
				    	                <li>Cloud computing specialist</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Computer repair technician</li>
				    	                <li>Assembler</li>
				    	                <li>Computer aided drafter</li>
				    	                <li>Tester</li>
				    	                <li>Helpdesk technician</li>
				    	                <li>Operations technician</li>
				    	                <li>Desktop support analyst</li>
				    	                <li>IT hardware sales professional</li>
				    	            </ul>
				    	        </td>
				    	    </tr>
				    	</table>
                    </div>
	 	        </div>
            </div>
       </div>
    </div>





<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-8">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG GLOBAL STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Specialising in recruitment for both Australian and international requirements.</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white">We hire International high skill workers, allocating them to local jobs. We not only recruit them but also provide them with settlement services and support with visa processing insuring reliability and long-term work.</p>
        </div>
    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
            <h5 class="white font-cursive">Specialises in</h5>
           <div class="table-class">
                <table class="table table-bordered key-th">
                    <tr>
                        <th>Construction</th>
                        <th>Labour</th>
                        <th>Ship and Submarine building</th>
                        <th>Office </th>
                    </tr>
                    <tr>
                        <td>
                            <ul class="tab-l">
                                <li>Labourer</li>
                                <li>Electrician</li>
                                <li>Plumber</li>
                                <li>Engineer</li>
                                <li>Architect</li>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>Warehouse</li>
                                <li>Dry Cleaning and Laundry</li>
                                <li>Gardening</li>
                                <li>Manufacturing</li>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>Pre-building</li>
                                <li>Building process </li>
                                <li>Post building</li>
                            </ul>
                        </td>
                        <td>
                            <ul class="tab-l">
                                <li>Accounting</li>
                                <li>Administration</li>
                                <li>It and technology</li>
                                <li>Recruitment and selection</li>
                                <li>HR</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
	 	</div>
    </div>
</div>
</div>




<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-9">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG WAREHOUSE STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">We source staff for Permanent /Temporary /Part time /Casual /Long term and Short-term jobs. Fulfilling logistics, manufacturing, cleaning and gardening requirements.</p>
            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
            <p class="white">We have worked with the major industry groups and we have a strong knowledge of their employment needs. We have experienced personnel who understand the labour market and can find the best candidates for any business.
			</p>
        </div>
    </div>
</div>
<!-- Ten Slider    -->
 <div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-10">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG TRANSPORT STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">Mates Group supply staff for transport and logistics this includes, Delivery Drivers, Forklift Operators, Truck Drivers.

			</p>
	            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
	            <p class="white">We do proper background checks on our employees, making sure they have proper experience, the right licences to perform.

			</p>
        </div>
    </div>
</div>
<!-- eleven Slider    -->
<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-11">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG MAINTENANCE STAFF</h3>
          </div>
        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">We source staff who maintain domestic households and industrial places, gathering workers with a good amount of experience and willingness to work work the desired time of our clients.


			</p>
	            <h5 class="white font-cursive text-30"><u>Why choose us?</u></h5>
	            <p class="white">We only recruit workers who have proper experience in the field. We hold a big database of suitable candidate so requirements can be find with urgency and ease.

			</p>
        </div>
    </div>
</div>


<!-- ================= Forth Slider  = = =  -->

<div class="main-bg">
    <div class="single-main-area">
    <div class="single-site-area-4">
    <div class="heading">
           <div class="page-header" data-aos="fade-up"
             data-aos-duration="500" data-aos-delay="300">
            <h3 class="section-head" style="text-align: center;">MG LABOURER</h3>
          </div>

        <div class="main-section-area">
            <p data-aos="fade-right"  class="white text-18">We have worked with the major industry groups and we have a strong knowledge of their employment needs. We have experienced personnel who understand the labour market and can find the best candidates for any business.</p>
        </div>

    </div>
</div>

 <div class="board-area">
	 	<div class="board-pera">
                 <h5 class="white font-cursive">Specialises in</h5>
				    	<div class="table-class">
				    	<table class="table table-bordered key-th">
				    	    <tr>
				    	        <th>Warehouse </th>
				    	        <th>Dry Cleaning and Laundry</th>
				    	        <th>Gardening</th>
				    	        <th>Manufacturing</th>

				    	    </tr>
				    	    <tr>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Warehouse picker</li>
				    	                <li>Warehouse admin</li>
				    	                <li>Forklift driver</li>
				    	                <li>Van driver </li>
				    	                <li>Cutter</li>
				    	                <li>General hand</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Dry cleaner</li>
				    	                <li>Presser</li>
				    	                <li>Customer service</li>
				    	                <li>Laundry hand</li>
				    	                <li>Laundry machine operator</li>
				    	                <li>Folder/ironer</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Horticulturalist</li>
				    	                <li>General gardener</li>
				    	                <li>Garden labourer</li>
				    	                <li>Laundry hand</li>
				    	                <li>Weeder</li>
				    	                <li>Garden maintenance</li>
				    	            </ul>
				    	        </td>
				    	        <td>
				    	            <ul class="tab-l">
				    	                <li>Production worker</li>
				    	                <li>Production assembly operator</li>
				    	                <li>Manufacturing packer</li>
				    	                <li>Assembler</li>
				    	                <li>Manufacturing general hand</li>

				    	            </ul>
				    	        </td>
				    	    </tr>
				    	</table>
                    </div>
	 	        </div>
            </div>
        </div>
    </div>



        <script>
            function read_more_less()
            {
                var dots = document.getElementById('dots');
                var moretext = document.getElementById('more');
                var mybtn = document.getElementById('mybtn');

                if (dots.style.display === 'none')
                {
                    dots.style.display='inline';
                    moretext.style.display='none';
                    mybtn.innerHTML="Read more";
                }
                else
                {
                    dots.style.display="none";
                    moretext.style.display="inline";
                    mybtn.innerHTML="Read less";
                }

                var dots2 = document.getElementById('dots2');
                var moretext2 = document.getElementById('more2');

                if (dots2.style.display === 'none')
                {
                    dots2.style.display='inline';
                    moretext2.style.display='none';
                    mybtn.innerHTML="Read more";
                }
                else
                {
                    dots2.style.display="none";
                    moretext2.style.display="inline";
                    mybtn.innerHTML="Read less";
                }

                var dots3 = document.getElementById('dots3');
                var moretext3 = document.getElementById('more3');

                if (dots3.style.display === 'none')
                {
                    dots3.style.display='inline';
                    moretext3.style.display='none';
                    mybtn.innerHTML="Read more";
                }
                else
                {
                    dots3.style.display="none";
                    moretext3.style.display="inline";
                    mybtn.innerHTML="Read less";
                }

                var dots4 = document.getElementById('dots4');
                var moretext4 = document.getElementById('more4');

                if (dots4.style.display === 'none')
                {
                    dots4.style.display='inline';
                    moretext4.style.display='none';
                    mybtn.innerHTML="Read more";
                }
                else
                {
                    dots4.style.display="none";
                    moretext4.style.display="inline";
                    mybtn.innerHTML="Read less";
                }
            }
        </script>
        <script>
            function read_more_less2()
            {
                var dots5 = document.getElementById('dots5');
                var moretext5 = document.getElementById('more5');
                var mybtn2 = document.getElementById('mybtn2');

                if (dots5.style.display === 'none')
                {
                    dots5.style.display='inline';
                    moretext5.style.display='none';
                    mybtn2.innerHTML="Read more";
                }
                else
                {
                    dots5.style.display="none";
                    moretext5.style.display="inline";
                    mybtn2.innerHTML="Read less";
                }

                var dots6 = document.getElementById('dots6');
                var moretext6 = document.getElementById('more6');


                if (dots6.style.display === 'none')
                {
                    dots6.style.display='inline';
                    moretext6.style.display='none';
                    mybtn2.innerHTML="Read more";
                }
                else
                {
                    dots6.style.display="none";
                    moretext6.style.display="inline";
                    mybtn2.innerHTML="Read less";
                }

                var dots7 = document.getElementById('dots7');
                var moretext7 = document.getElementById('more7');

                if (dots7.style.display === 'none')
                {
                    dots7.style.display='inline';
                    moretext7.style.display='none';
                    mybtn2.innerHTML="Read more";
                }
                else
                {
                    dots7.style.display="none";
                    moretext7.style.display="inline";
                    mybtn2.innerHTML="Read less";
                }

            }
        </script>
        <script>
            function read_more_less3()
            {
                var dots8 = document.getElementById('dots8');
                var moretext8 = document.getElementById('more8');
                var mybtn3 = document.getElementById('mybtn3');

                if (dots8.style.display === 'none')
                {
                    dots8.style.display='inline';
                    moretext8.style.display='none';
                    mybtn3.innerHTML="Read more";
                }
                else
                {
                    dots8.style.display="none";
                    moretext8.style.display="inline";
                    mybtn3.innerHTML="Read less";
                }

                var dots9 = document.getElementById('dots9');
                var moretext9 = document.getElementById('more9');


                if (dots9.style.display === 'none')
                {
                    dots9.style.display='inline';
                    moretext9.style.display='none';
                    mybtn3.innerHTML="Read more";
                }
                else
                {
                    dots9.style.display="none";
                    moretext9.style.display="inline";
                    mybtn3.innerHTML="Read less";
                }

                var dots10 = document.getElementById('dots10');
                var moretext10 = document.getElementById('more10');

                if (dots10.style.display === 'none')
                {
                    dots10.style.display='inline';
                    moretext10.style.display='none';
                    mybtn3.innerHTML="Read more";
                }
                else
                {
                    dots10.style.display="none";
                    moretext10.style.display="inline";
                    mybtn3.innerHTML="Read less";
                }

            }
        </script>
        <script>
            function read_more_less4()
            {
                var dots11 = document.getElementById('dots11');
                var moretext11 = document.getElementById('more11');
                var mybtn4 = document.getElementById('mybtn4');

                if (dots11.style.display === 'none')
                {
                    dots11.style.display='inline';
                    moretext11.style.display='none';
                    mybtn4.innerHTML="Read more";
                }
                else
                {
                    dots11.style.display="none";
                    moretext11.style.display="inline";
                    mybtn4.innerHTML="Read less";
                }

                var dots12 = document.getElementById('dots12');
                var moretext12 = document.getElementById('more12');


                if (dots12.style.display === 'none')
                {
                    dots12.style.display='inline';
                    moretext12.style.display='none';
                    mybtn4.innerHTML="Read more";
                }
                else
                {
                    dots12.style.display="none";
                    moretext12.style.display="inline";
                    mybtn4.innerHTML="Read less";
                }

                var dots13 = document.getElementById('dots13');
                var moretext13 = document.getElementById('more13');

                if (dots13.style.display === 'none')
                {
                    dots13.style.display='inline';
                    moretext13.style.display='none';
                    mybtn4.innerHTML="Read more";
                }
                else
                {
                    dots13.style.display="none";
                    moretext13.style.display="inline";
                    mybtn4.innerHTML="Read less";
                }

                var dots14 = document.getElementById('dots14');
                var moretext14 = document.getElementById('more14');

                if (dots14.style.display === 'none')
                {
                    dots14.style.display='inline';
                    moretext14.style.display='none';
                    mybtn4.innerHTML="Read more";
                }
                else
                {
                    dots14.style.display="none";
                    moretext14.style.display="inline";
                    mybtn4.innerHTML="Read less";
                }

            }
        </script>





@endsection

