<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="{{asset('images/mgr.ico')}}">

    @include('layouts.includes.analytics_google')

    1. Meta tag delete
    2. twitter
    3. fb tag
    4. excel
    5. little space

    a. fb:

    b. twitter:

    c. linkedin:

    <!-- adding this three lines for search engine meta link -->
    <meta name="description" content="@yield('meta_description')">

    <link rel="canonical" href="https://matesgroup.com.au/sample-page/" />

    {{--Facebook Tag--}}
    <meta property="og:url" content="" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />

    <meta property="og:url" content="http://www.matesgroup.com.au/agriculture-recruitment" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Agriculture/Agribusiness Recruitment Agency, Rural Hire Australia" />
    <meta property="og:description" content="Australian company Mates Group provides agriculture, agribusiness, farm staff hire services in Adelaide, Brisbane, Sydney Melbourne" />
    <meta property="og:image" content="http://www.matesgroup.com.au/images/logo/mates_group_logo-200.png" />

    {{--Twitter Card Tags--}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@Gigya">
    <meta name="twitter:creator" content="@Gigya">
    <meta name="twitter:title" content="Gigya Documentation page title">
    <meta name="twitter:description" content="Page  description: Gigya’s Customer Identity Management is a complete solution for managing a new generation of user data that encompasses social identity data, social graph connections, behavior data, and traditional profile data.">
    <meta name="twitter:image" content="http://developers.gigya.com/download/attachments/10322062/BigDataWordBubble_sm.jpg">








    <title>@yield('title')</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

{{--    <link rel="stylesheet" href="{{ asset('css/bootstrap.css')}}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">--}}
    <link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">
{{--    <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/theme.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/aos.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/style.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/responsive.css') }}">--}}

    <!-- Fonts -->


</head>
<body class="antialiased">

    @include('layouts.header')
    @yield('content')
    @include('layouts.footer-page')

{{--    <script src="{{ asset('js/jquery.min.js') }}"></script>--}}
{{--    <script src="{{asset('js/bootstrap.min.js') }}"></script>--}}
{{--    <script src="{{asset('js/owl.carousel.min.js') }}"></script>--}}
{{--    <script src="{{asset('js/jquery.magnific-popup.min.js') }}"></script>--}}
{{--    <script src="{{asset('js/aos.js') }}"></script>--}}
{{--    <script src="{{asset('js/wow.min.js') }}"></script>--}}

    <script src="{{mix('js/manifest.js')}}"></script>
    <script src="{{mix('js/vendor.js')}}"></script>
    <script src="{{mix('js/app.js')}}"></script>

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
