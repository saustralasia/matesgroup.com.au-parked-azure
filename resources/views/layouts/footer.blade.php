<!-- === FOOTER === -->
<footer>
  <div class="footer-main">
   <div class="top-polka"><img src="images/logo/corner-footer.png" alt=""></div>
   <div class="top-polka-m"><img src="images/logo/polka-top-m.png" alt=""></div>
    <div class="container container-padding">
      <div class="top-footer">
          <div class="top-fo-block first-fo-block">
              <h2>Sudney Office</h2>
              <p>
              <span>Level 34, AMP Tower 50 Bridge Street</span><br>
              <span>Sydney New South Wales 2000 Australia</span><br>
              <span>Landline: (02) 8216 0934</span><br>
              <span>FAX: (02) 9475 0522</span>
            </p>
            </div><!-- top-fo-block -->
            <div class="top-fo-block sec-fo-block">
              <h2>Join Our Social Community</h2>
              <span><a href="https://www.facebook.com/pg/Mates-Group-2402073380080387"><i class="fab fa-facebook-f"></i></a></span>
              <span><a href="https://twitter.com/matesgroupau"><i class="fab fa-twitter"></i></a></span>
              <span><a href="https://www.linkedin.com/company/matesgroup"><i class="fab fa-linkedin-in"></i></a></span>
              <span><a href="https://www.instagram.com/matesgroup.au"><i class="fab fa-instagram"></i></a></span>
            </div><!-- top-fo-block -->
            <div class="top-fo-block third-fo-block">
              <h2>Sudney Office</h2>
              <p>
              <span>Let's Discuss What's Next</span><br>
              <span>Have a project or a question?</span><br>
              <span>We'd love to hear from you.</span><br>
            </p>
              <a href="contact"><button>Contact Us <i class="fas fa-angle-right"></i></button></a>
            </div><!-- top-fo-block -->
      </div><!-- top-footer -->
   </div><!-- container -->
  <div class="last-footer">
    <div class="contanier">
        <div class="last-footer-p">
            <p>Copyright © 2019 Mates Workforce <a href="">Privacy / Policy</a></p>
        </div>
      <div class="last-footer-p-m">
          <p>Copyright © 2019 Mates Workforce</p>
          <p><a href="">Privacy / Policy</a></p>
      </div>
    </div>
    <div class="last-polka"><img src="images/corner-footer2.png" alt=""></div>
    <div class="last-polka-m"><img src="images/polka-last-m.png" alt=""></div>
  </div><!-- last-footer -->
  </div><!-- footer-main -->
</footer>
<!-- End Footer -->

<script src="{{mix('js/manifest.js')}}"></script>
  <script src="{{mix('js/vendor.js')}}"></script>
  <script src="{{mix('js/app.js')}}"></script>

  <script type="text/javascript">  
    $(document).ready(function(){
      $('.owl-main-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots: true,
        nav:true,
        navText : ['<i class="fas fa-chevron-left" aria-hidden="true"></i>','<i class="fas fa-chevron-right" aria-hidden="true"></i>']
      });
    });
  </script>
  <script type="text/javascript">  
    $(document).ready(function(){
      $('.owl-partner-slider').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:false,
        dots:false
      });
    });
  </script>
<script>
function menuFunction() {
    var x = document.getElementById("drop-down-menu-m");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>
</body>
</html>