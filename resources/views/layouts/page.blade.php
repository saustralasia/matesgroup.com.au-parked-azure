<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="{{asset('images/mgr.ico')}}">

    @include('layouts.includes.analytics_google')

    <!-- adding this three lines for search engine meta link -->
    <title>@yield('title')</title>
    <meta name="description" content="@yield('meta_description')">

    <link rel="canonical" href="{{ url(Request::url()) }}" />

    {{--Facebook Tag--}}
    <meta property="og:url" content="{{ url(Request::url()) }}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:description" content="@yield('meta_description')" />
    <meta property="og:image" content="@yield('image')" />

    {{--Twitter Card Tags--}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@matesgroupau">
    <meta name="twitter:creator" content="@matesgroupau">
    <meta name="twitter:title" content="@yield('title')">
    <meta name="twitter:description" content="@yield('description')">
    <meta name="twitter:image" content="@yield('image')">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>

<body class="antialiased">

    @include('layouts.header')
    @yield('content')
    @include('layouts.footer')

    <script src="{{mix('js/manifest.js')}}"></script>
    <script src="{{mix('js/vendor.js')}}"></script>
    <script src="{{mix('js/app.js')}}"></script>

    <script>

        // Owl Carousel Settings:
        let partnersCarousel = $('.partners-carousel');
        partnersCarousel.owlCarousel({
            loop:true,
            //default settings:
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,

            // autoWidth:true,
            center: true,
            items:2,
            margin:10,
            autoWidth:true,
            nav:false,
            // dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        partnersCarousel.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                partnersCarousel.trigger('next.owl');
            } else {
                partnersCarousel.trigger('prev.owl');
            }
            e.preventDefault();
        });

    </script>

</body>
</html>
