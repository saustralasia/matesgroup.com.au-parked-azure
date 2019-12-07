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
<div class="pages-sologan contact-sologan">
 <div class="container container-padding">
    <h2>CONTACT US</h2>
 </div>   
</div><!-- pages-sologan -->
<div class="contact-pages-body">
    <div class="container-tw container-padding">
            <div class="contact-block-f">
               <h2>CONTACT US</h2>
               <div class="location-design-one">
                    <ul>
                        <li>Level 1, Suite 11/35-39 Auburn Road</li>
                        <li>Auburn New South Wales 2144</li>
                        <li>Australia</li>
                        <li>Tel: 02 87333549</li>
                        <li>Fax: 02 94236947</li>
                        <li>Email: info@matesglobal.com</li>
                    </ul>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.28800689763625!2d151.0328069337571!3d-33.85119350948275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcb1a7b9168b%3A0x9b513692dc17d3dd!2sLevel+1%2C+Suite+11%2F35-39+Auburn+Rd%2C+Auburn+NSW+2144%2C+Australia!5e0!3m2!1sen!2sbd!4v1559209635952!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>

            <div class="contact-block-f">
                <h2 class="text-uppercase">Send your Message</h2>
                <div class="location-design-input" id="feedbackForm">

                    <div v-if="showNofity" class="notification success">
                        @{{ response }}
                    </div>

                    <form method="post" action="{{ route('feedbackForm.store') }}" @submit.prevent="onSubmit"  @keydown="form.errors.clear($event.target.name)">
                        @csrf
                        <div class="input-group">
                            <label for="">Your company name:<span style="color:red">*</span></label><br>
                            <input name="name" v-model="form.name" type="text" placeholder="Company name" require>
                            <span v-if="form.errors.has('name')" v-text="form.errors.get('name')" class="msg error"></span>
                        </div> 
                        <div class="input-group">
                            <label for="">Your email address:<span style="color:red">*</span></label><br>
                            <input name="email" v-model="form.email" type="email" placeholder="Company name" require>  
                            <span v-if="form.errors.has('email')" v-text="form.errors.get('email')" class="msg error"></span>
                        </div>
                        <div class="input-group">
                            <label for="phone">Phone number:</label><br>
                            <input name="phone" v-model="form.phone" type="text" placeholder="Phone number">  
                            <span v-if="form.errors.has('phone')" v-text="form.errors.get('phone')" class="msg error"></span>
                        </div>
                        <div class="input-group">
                            <label for="">Message:</label><br>
                            <textarea name="message" v-model="form.message" placeholder="Please type message here..."></textarea>  
                            <span v-if="form.errors.has('message')" v-text="form.errors.get('message')" class="msg error"></span>
                        </div>
                        <div class="input_newsletter input-group">
                            <input name="newsletter" v-model="form.newsletter" type="checkbox" id="newsletter">
                            <label for="newsletter">Newsletters</label>
                        </div> 
                        <div class="input-group">
                            <input type="submit" :disabled="form.errors.any() || isLoading">
                            <span v-if="isLoading" class="notification warn">Working...</span>
                        </div>         
                    </form>       
                </div>
            </div>

            <div class="contact-block">
                <div class="location-design-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1392.9604772913615!2d151.2112590777946!3d-33.86293677203063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae69c100f92b%3A0xaa5c71b20935e5de!2s50+Bridge+St%2C+Sydney+NSW+2000%2C+Australia!5e0!3m2!1sen!2sbd!4v1559212776787!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
                    <h3>SYDNEY OFFICE</h3>
                    <ul>
                        <li>Level 34, AMP Tower 50 Bridge Street</li>
                        <li>Sydney New South Wales 2000</li>
                        <li>Australia</li>
                        <li>Landline: (02) 8733 3549</li>
                        <li>Landline: (02) 8216 0934</li>
                        <li>FAX: (02) 9475 0522</li>
                        <li>Email: info@matesworkforce.com.au</li>
                    </ul>       
                </div>
                <div class="location-design-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.28800689763625!2d151.0328069337571!3d-33.85119350948275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcb1a7b9168b%3A0x9b513692dc17d3dd!2sLevel+1%2C+Suite+11%2F35-39+Auburn+Rd%2C+Auburn+NSW+2144%2C+Australia!5e0!3m2!1sen!2sbd!4v1559209635952!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
                        <h3>MELBOURNE OFFICE</h3>
                        <ul>
                            <li>G05, 55 Produce Drive</li>
                            <li>Epping VIC 3076</li>
                            <li>Melbourne</li>
                            <li>Landline: (02) 8733 3549</li>
                            <li>Email: info@matesworkforce.com.au</li>
                        </ul>    
                </div>
                    <div class="location-design-two">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9622437585012!2d144.95395611584476!3d-37.81435334185111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4bfb6240df%3A0xe2c3e828a9070af0!2sLevel+10%2F555+Lonsdale+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sbd!4v1559212855629!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
                        <h3>PERTH, Forrest Centre</h3>
                        <ul>
                            <li>Level 29 221 St Georges Terrace</li>
                            <li>Perth Western Australia 6000</li>
                            <li>Australia</li>
                            <li>Landline: (02) 8733 3549</li>
                            <li>Email: info@matesworkforce.com.au</li>
                        </ul>       
                </div>
            </div>

            <div class="contact-block">                    
                <div class="location-design-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.9761961953322!2d153.02733241560117!3d-27.470000423293538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1c7fc6f701%3A0xe66859253e15068e!2sLevel+16%2F200+Mary+St%2C+Brisbane+City+QLD+4000%2C+Australia!5e0!3m2!1sen!2sbd!4v1559212942875!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> 
                    <h3>BRISBANE OFFICE</h3>
                    <ul>
                        <li>Level 16 200 Mary Street</li>
                        <li>Brisbane Queensland QLD 4000</li>
                        <li>Australia</li>
                        <li>Landline: (02) 8733 3549</li>
                        <li>Email: info@matesworkforce.com.au</li>
                    </ul>       
                </div>
                <div class="location-design-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2234081017637!2d138.5973063157712!3d-34.925933582126106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced7f016e5d1%3A0x1ceb5702dfe8a758!2sTransdirect!5e0!3m2!1sen!2sbd!4v1559213160930!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> 
                        <h3>ADELAIDE OFFICE</h3>
                        <ul>
                            <li>Level 5, City Central, Tower 2 121 King William Street</li>
                            <li>Adelaide South Australia 5000</li>
                            <li>Australia</li>
                            <li>Landline: (02) 8733 3549</li>
                            <li>Email: info@matesworkforce.com.au</li>
                        </ul>    
                </div>
                    <div class="location-design-two">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.0095682421615!2d151.03030766358856!3d-33.85059279736964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcb1a7b9168b%3A0xb08db37214d0db73!2sL35%2F39+Auburn+Rd%2C+Auburn+NSW+2144%2C+Australia!5e0!3m2!1sen!2sbd!4v1559213199482!5m2!1sen!2sbd" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> 
                        <h3>PERTH, Forrest Centre</h3>
                        <ul>
                            <li>Level 1, Suite 11/35-39 Auburn Road</li>
                            <li>Auburn Sydney NSW 2144</li>
                            <li>Australia</li>
                            <li>Landline: (02) 8733 3549</li>
                            <li>FAX: (02) 9423 6947</li>
                            <li>Email: info@matesworkforce.com.au</li>
                        </ul>       
                    </div>
            </div>
    </div>
</div>
@endsection