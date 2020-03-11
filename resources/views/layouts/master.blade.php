<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{asset('images/mgr.ico')}}">
    <title>
      @isset($title)
          {{$title}}
          @endisset
    </title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">
    <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme.css') }}">
    <link rel="stylesheet" href="{{ asset('css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/responsive.css') }}">
</head>
<body>

@include('layouts.header')
@yield('content')
@include('layouts.footer')


<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{asset('js/bootstrap.min.js') }}"></script>
<script src="{{asset('js/owl.carousel.min.js') }}"></script>
<script src="{{asset('js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{asset('js/aos.js') }}"></script>
<script src="{{asset('js/wow.min.js') }}"></script>



    <script type="text/javascript">


$('.tab-menu a').hover(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

        function acceptsCookies(){
            document.getElementById("noti").style.display = "none";
            $.ajax({
            	url:"{{asset('home/cookiessAccept')}}",
            	method:"POST",
            	success:function(a){

            	}
           });
        }

        function declineCookies(){
            document.getElementById("noti").style.display = "none";
            $.ajax({
            	url:"{{asset('home/cookiessAccept')}}",
            	method:"POST",
            	success:function(a){

            	}
           });
        }

        $(".force-cross").click(function(){
            $("#loader_div").fadeOut(3000);
        })

        var item = 6;
        $(".service-image").owlCarousel({
            items: item,
            loop:true,
            autoplay: true,
            margin:10,
            responsive:{
                0:{
                    items:1

                },
                600:{
                    items:3
                },
                1000:{
                    items:6,
                    nav:true

                }
            }
        });

        $(function(){
            $('a[title]').tooltip();
        });

        AOS.init();
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 600);
        });



		// This will be triggered everytime a user types anything
		// in the input field with id as input-field
		$("#input-field").keyup(function(e) {
		  // Our regex
		  // a-z => allow all lowercase alphabets
		  // A-Z => allow all uppercase alphabets
		  // 0-9 => allow all numbers
		  // @ => allow @ symbol
		  var regex = /^[a-zA-Z]+$/;
		  // This is will test the value against the regex
		  // Will return True if regex satisfied
		  if (regex.test(this.value) !== true)
		  //alert if not true
		  //alert("Invalid Input");

		  // You can replace the invalid characters by:
		    this.value = this.value.replace(/[^a-zA-Z]+/, '');
		});
</script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</body>

</html>
