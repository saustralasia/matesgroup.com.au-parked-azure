@extends('layouts.page')

@section('title', 'Mates Group | Recruitment & Labour Hire Agency Adelaide, Brisbane and Perth')
@section('meta_description',
    'Australian company Mates Group provides skilled labour recruitment services in Adelaide,
    Brisbane, Perth and Tasmania.',)
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')

{{-- Delwar H --}}

<div class="expanding-nav-wrapper">
    <div data-collapse="small" data-animation="default" data-duration="400" role="banner" class="falgunnavbar w-nav">
        <div class="nav-bar-script w-embed w-script">
            <style>
                @media (min-width: 767px) {
                    .falgunnavbar {
                        transition: background-color 350ms, height 350ms;
                    }

                    .falgunnavbar .nav-menu .nav-link {
                        transition: background-color 350ms, color 350ms, margin 350ms;
                    }

                    .falgunnavbar-expanded {
                        background: transparent;
                        box-shadow: none;
                        height: 100px;
                    }

                    .falgunnavbar-expanded .nav-logo {
                        margin-left: 30px;
                        height: 40px;
                    }

                    .falgunnavbar-expanded .nav-menu .nav-link {
                        color: white;
                    }

                    .falgunnavbar-expanded .nav-menu .nav-link-button {
                        background: white;
                        border-color: white;
                        color: #F27B30 !important;
                        margin-right: 30px;
                    }
                }
            </style>

            <script>
                window.addEventListener('DOMContentLoaded', function () {
                    const maxOffset = 75;
                    const wrapperElement = document.querySelector('.expanding-nav-wrapper');

                    if (wrapperElement) {
                        const falgunnavbarElement = wrapperElement.querySelector('.falgunnavbar');

                        function setfalgunnavbarState() {
                            const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

                            if (scrollPosition < maxOffset) {
                                falgunnavbarElement.classList.add('falgunnavbar-expanded');
                            } else {
                                falgunnavbarElement.classList.remove('falgunnavbar-expanded');
                            }
                        }

                        setfalgunnavbarState();
                        window.addEventListener('scroll', setfalgunnavbarState);
                    }
                });
            </script>
        </div>
        <div class="falgunconta w-falgunconta"><a href="https://www.optimism.co.nz/" aria-current="page"
                class="link-block-3 w-inline-block w--current"><img
                    src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1HOIkg3ZC2uNjSZFnXXaxZpXa.png"
                    alt="Optimism logo" class="nav-logo" /></a>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <div data-hover="1" data-delay="100" class="nav-dropdown w-dropdown">
                    <div class="dropdown-toggle-button w-dropdown-toggle">
                        <div class="text-block-15">Services</div>
                        <div class="icon w-icon-dropdown-toggle"></div>
                    </div>
                    <nav class="dropdown-list w-dropdown-list">
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a
                                        href="#"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Strategies &amp; Frameworks</div>
                                    </a></div>
                                <div role="listitem" class="w-dyn-item"><a
                                        href="#"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Targeted Learning Solutions</div>
                                    </a></div>
                                <div role="listitem" class="w-dyn-item"><a
                                        href="#"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Digital Learning Solutions</div>
                                    </a></div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div data-hover="1" data-delay="100" class="nav-dropdown w-dropdown">
                    <div class="dropdown-toggle-button w-dropdown-toggle">
                        <div class="text-block-15">Specialties</div>
                        <div class="icon w-icon-dropdown-toggle"></div>
                    </div>
                    <nav class="dropdown-list w-dropdown-list">
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a
                                        href="https://www.optimism.co.nz/service-specialty/induction"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Induction</div>
                                    </a></div>
                                <div role="listitem" class="w-dyn-item"><a
                                        href="https://www.optimism.co.nz/service-specialty/health-safety-wellbeing"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Health, Safety &amp; Wellbeing</div>
                                    </a></div>
                                <div role="listitem" class="w-dyn-item"><a
                                        href="https://www.optimism.co.nz/service-specialty/technical"
                                        class="nav-dropdown-link w-inline-block">
                                        <div class="text-block-16">Technical</div>
                                    </a></div>
                            </div>
                        </div>
                    </nav>
                </div><a href="#" class="nav-link w-nav-link">The Induction
                    App</a><a href="#" class="nav-link w-nav-link">Case
                    Studies</a><a href="#" class="nav-link tmp w-nav-link">Our Story</a><a
                    href="#"
                    class="nav-link nav-link-button w-nav-link">Contact</a>
            </nav>
            <div class="menu-button w-nav-button">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
</div>
<div class="home-hero-section">
    <div class="looping-images-wrapper home-hero-background-image-wrapper">
        <div class="html-embed-8 w-embed">
            <style>
                .home-hero-background-image-wrapper {
                    position: fixed !important;
                }

                @media (max-width: 768px) {
                    .home-hero-background-image-wrapper {
                        position: absolute !important;
                        top: 50% !important;
                        height: calc(50% + 425px) !important;
                    }
                }
            </style>
        </div>
            <img
                src="images/1.jpg"
                loading="lazy" sizes="100vw"
                alt="" class="home-hero-cycling-image home-hero-cycling-image-reveal"
            />
            <img
                src="images/2.jpg"
                loading="lazy" sizes="100vw"
                alt="" class="home-hero-cycling-image"
            />
        </div>
    <div class="div-block-22">
        <div class="div-block-27"></div>
        <div class="home-hero-curve-embed w-embed">
            <style>
                .home-hero-curve {
                    position: absolute;
                    top: 0;
                }

                .home-hero-curve--vertical {
                    right: 25%;
                }

                .home-hero-curve--horizontal,
                .home-hero-curve-extension--horizontal {
                    display: none;
                }

                .home-hero-curve--horizontal {
                    bottom: 0;
                    /*height: auto;*/
                    height: 75px;
                    position: relative;
                    /*transform: rotateY(180deg);*/
                    width: 100%;

                    margin: -2px 0 0 0;
                    transform: rotate(180deg);
                }

                .home-hero-curve-extension--horizontal {
                    /*background: rgba(242, 123, 49, 0.9);*/
                    background: #F27B30;
                    height: 500px;
                }

                @media (max-width: 1100px) {
                    .home-hero-curve--vertical {
                        right: calc(25% - 100px);
                    }
                }

                @media (max-width: 991px) {
                    .home-hero-curve--vertical {
                        right: calc(-600px + 65%);
                    }
                }

                @media (max-width: 767px) {
                    .home-hero-curve--vertical {
                        display: none;
                    }

                    .home-hero-curve--horizontal,
                    .home-hero-curve-extension--horizontal {
                        display: block;
                    }

                    .home-hero-curve-wrapper {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                    }
                }
            </style>

            <div class="home-hero-curve-wrapper">
                <svg class="home-hero-curve home-hero-curve--vertical" height="720" fill="none" style="height: 100%"
                    viewBox="0 0 2560 720" width="2560">
                    <path
                        d="M2200.58,360c-179.7,360 -287.53,360 -359.41,360l-1841.17,0l0,-720l2560,0c-71.89,0 -179.71,0 -359.42,360Z"
                        fill="hsla(23, 88%, 57%, 0.9)" />
                </svg>

                <div class="home-hero-curve-extension--horizontal"></div>
                <svg class="home-hero-curve home-hero-curve--horizontal" width="1000" height="105"
                    viewBox="0 0 1000 105" preserveAspectRatio="none">
                    <path d="M0,100c500,0 500,-100 1000,-100l0,105l-1000,0l0,-5Z" fill="#F27B30" />
                </svg>
                <!--<svg
  class="home-hero-curve home-hero-curve--horizontal"
  xmlns="http://www.w3.org/2000/svg"
width="1281" height="405"
viewBox="0 0 1281 405"
fill="none"
preserveAspectRatio="none"
>
<path d="M0 5C67.5754 98.9591 173.534 163.251 294.8 174.707L986.2 235.293C1107.47 246.749 1213.42 311.041 1281 405V0H0V5Z" fill="#F27B30"/>
</svg>-->
            </div>
        </div>
        <div class="falgunconta-4 w-falgunconta">
            <h1 class="hero-heading">Making it easy for your people to be great at what they do</h1>
            <h2 class="heading-9">Optimising performance through<br />targeted learning solutions</h2>
        </div>
    </div>
</div>
<div class="base-section client-logos-section">
    <div class="div-block-26"><img
            src="images/layer.svg"
            alt="" class="image-24" /></div>
    <div class="falgunconta-8 w-falgunconta">
        <div class="w-embed">
            <style>
                @media (min-height: 720px) {
                    .client-logos {
                        top: 0;
                    }
                }
            </style>
        </div>
        <div class="collection-list-wrapper-7 client-logos w-dyn-list">
            <div role="list" class="collection-list-7 w-dyn-items">
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/2.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/3.png" alt="" class="image-20" /></div>
                <div role="listitem" class="collection-item-3 w-dyn-item"><img src="images/logo/4.png" alt="" class="image-20" /></div>
            </div>
        </div>
    </div>
</div>

<div style="height: 2000px; background-color: white; "></div>

{{-- Delwar H --}}


    <br>
        <div class="container-fluid">
            <div class="second-banner">
                <div class="banner-head">
                    <div class="banner-heading-line">
                        <a href="">
                            <h1>Mates Group</h1>
                        </a>
                    </div>
                    <h2 class="banner-head-h1">Providing Recruitment and Labour Hire around The Globe</h2>
                </div>
                <br>
                <div class="banner-area">
                    <img src="{{ asset('images/logo/mates_group_logo.png') }}" alt="MATES GROUP logo">
                </div>
            </div>

            <div class="row">
                <div class="col-md-2">
                    <div class="side-text">
                        <a href="mission">
                            <h4>Our Mission</h4>
                        </a>
                        <p>
                            Our mission is to assist our clients to grow their business by providing the right labor
                            solutions.
                            <!-- lasting, and substantial enhancements in their business and to make a good firm that draws, develops, excites, and retains exceptional professionals. -->
                            <a href="mission" class="read-more">(read more…)</a>
                        </p>
                        <a href="vision">
                            <h4>Our Vision</h4>
                        </a>
                        <p>
                            Our vision is to put Mates Group on the map as one of the leading organisations.
                            <!-- and 3. Associated with clients, networks, controllers and one another; these qualities mirror the best parts of our legacy, and stay key to our long haul achievement. -->
                            <a href="vision" class="read-more">(read more…)</a>
                        </p>
                        <a href="approach">
                            <h4>Our Approach</h4>
                        </a>
                        <p>Our approach is to conduct our business in an honest and ethical manner.
                            <!--  creating connections that last. Our faith in making the best decision stays key to our prosperity. -->
                            <a href="approach" class="read-more">(read more…)</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="banner-head">
                        <div class="banner-heading-line">
                            <a href="">
                                <h1>Mates Group</h1>
                            </a>
                        </div>

                        <h2 class="banner-head-h1">Providing Recruitment and Labour Hire around The Globe</h2>

                    </div>
                    <br>
                    <div class="banner-area">
                        <img src="{{ asset('images/logo/mates_group_logo.png') }}"
                            alt="MATES GROUP PROVIDES RECRUITMENT AND LABOUR HIRE AROUND THE GLOBE">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="side-text">
                        <a href="team">
                            <h4>Our Team</h4>
                        </a>
                        <p>Our team members at Mates Group are well trained in their respective fields.
                            <!-- Together, we ensure you're contributing where the best returns are, while building confidence over each touchpoint. -->
                            <a href="team" class="read-more">(read more…)</a>
                        </p>
                        <a href="safety">
                            <h4>Our Safety</h4>
                        </a>
                        <p>Safety and hygiene are our number one priority when it comes to our workers.
                            <!-- unsafe   practices and occurrences of environmental injury from our activities. Our goal is to ensure a workplace that is completely free of injuries and accidents.-->
                            <a href="safety" class="read-more">(read more…)</a>
                        </p>
                        <a href="commitment">
                            <h4>Our Commitment</h4>
                        </a>
                        <p>Our commitment is to gather and select the best candidates which meet our clients criteria.
                            <!--  and it’s 	the only  cause you can choose us. We dedicate ourselves to make sure our valued clients are successful. If they’re not prosperous then neither are we.-->
                            <a href="commitment" class="read-more">(read more…)</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row mt-5">
            </div>
        </div>

        <!--    =================  Carousel    =================-->
        <h4 class="text-center partners-text">Our Partners and Associates</h4>
        {{-- <div style="overflow:hidden !important;margin:0 auto"> --}}
        <div class="partners-carousel owl-carousel owl-theme">
            <div class="item">
                <a rel="nofollow" href="http://www.freshexport.com.au" target="_blank">
                    <img src="{{ asset('images/logo/freshexport.png') }}"
                        alt="Specialises in exporting fresh fruits and fresh vegetables">
                </a>
                <p class="slogan">Specialises in exporting fresh fruits and fresh vegetables.</p>
            </div>
            <div class="item">
                <a rel="nofollow" href="http://jobsgalore.com.au" target="_blank">
                    <img src="{{ asset('images/logo/logo2.jpg') }}"
                        alt="Specialises in job recruitment, interviews and candidate selection">
                </a>
                <p class="slogan">Specialises in job recruitment, interviews and candidate selection.</p>
            </div>
            <div class="item">
                <a rel="nofollow" href="http://matesglobal.com" target="_blank">
                    <img src="{{ asset('images/logo/Mates-Global.png') }}"
                        alt="Specialises in providing staff recruitment and labour hire to clients around the world">
                </a>
                <p class="slogan">Specialises in providing staff recruitment and labour hire to clients around the world.
                </p>
            </div>
            <div class="item">
                <a rel="nofollow" href="http://asc.net.au/" target="_blank">
                    <img src="{{ asset('images/logo/asc.png') }}"
                        alt="Specialises in worldwide import, export and shipping services.">
                </a>
                <p class="slogan">Specialises in worldwide import, export and shipping services.</p>
            </div>
            <div class="item">
                <a rel="nofollow" href="http://winfred.com.au" target="_blank">
                    <img src="{{ asset('images/logo/winfred.png') }}"
                        alt="Speciallises in experienced cleaning labour and providing Security personal">
                </a>
                <p class="slogan">Speciallises in experienced cleaning labour and providing Security personal.</p>
            </div>
            <div class="item">
                <a rel="nofollow" href="http://matesgroup.com.au/office-staff-recruitment" target="_blank">
                    <img src="{{ asset('images/logo/logomw.png') }}"
                        alt="Specializing providing skilled and unskilled labour to Australian companies">
                </a>
                <p class="slogan">Specialising providing skilled and unskilled labour to Australian companies.</p>
            </div>
        </div>
        {{-- </div> --}}
        <!--    =================  First Slider    =================-->
        <div class="main-bg">
            <div class="single-main-area">
                <div class="single-site-area">
                    <div class="heading">
                        <div class="page-header">
                            <h3 class="section-head">MG OFFICE STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">Mates Group office provides specialised office support staff Australia
                                wide. The main contribution of our company is to have the right kind of staff who help to
                                achieve goals in a business and reach the required targets.
                            </p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

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
                                            <li>Book keeper</li>
                                            <li>Accounts payable officer</li>
                                            <li>Assistant accountant</li>
                                            <li>Financial analyst</li>
                                        </ul>
                                    </td>

                                    <td>
                                        <ul class="tab-l">
                                            <li>Office administrator</li>
                                            <li>Executive assistant</li>
                                            <li>Receptionist</li>
                                            <li>Customer service officer</li>
                                            <li>coordinator</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>IT Business Analyst</li>
                                            <li>Network administrator</li>
                                            <li>Database developer</li>
                                            <li>Systems engineer</li>
                                            <li>Help desk officer</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>Recruitment consultant </li>
                                            <li>Business development manager</li>
                                            <li>Sales consultant</li>
                                            <li>Assistant recruitment consultant</li>
                                            <li>Assistant business development executive</li>
                                        </ul>
                                    </td>

                                </tr>

                            </table>
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
                        <div class="page-header">
                            <h3 class="section-head">MG CONSTRUCTION STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">Mates group supply civil and construction workers to various sites
                                around the Australia, from small to large level of projects and development. Mates Group
                                provides construction services, managing and developing production.</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>
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
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>Joiner</li>
                                            <li>Joiner</li>
                                            <li>Inspector</li>
                                            <li>Plasterer </li>
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
                                        </ul>
                                    </td>

                                    <td>
                                        <ul class="tab-l">
                                            <li>Concrete Laborers</li>
                                            <li>Pipefitter</li>
                                            <li>Crane Operator</li>
                                            <li>Carpet layer</li>
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
                <div class="single-site-area-6">
                    <div class="heading">
                        <div class="page-header">
                            <h3 class="section-head">MG SHIPBUILDING</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">Mates provides ship and submarine building facilities with the
                                assistance of highly qualified employees who specialise in the field.</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

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
                                        <li>Mechanical Engineer</li>
                                        <li>Electrical Engineers</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="tab-l">
                                        <li>Welders</li>
                                        <li>Solderers</li>
                                        <li>Structural Fabricators</li>
                                        <li>Plumbers</li>
                                        <li>Electricians</li>
                                        <li>Carpenters</li>
                                        <li>Riggers</li>
                                        <li>Supervisors</li>
                                        <li>Marine Surveyors</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="tab-l">
                                        <li>Quality Control Inspectors</li>
                                        <li>Painters</li>
                                        <li>Interior Plasterers</li>
                                    </ul>
                                </td>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="main-bg">
            <div class="single-main-area">
                <div class="single-site-area-7">
                    <div class="heading">
                        <div class="page-header">
                            <h3 class="section-head">MG AGRICULTURE STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">Mates is an Australian company with clients around the world. Proudly
                                representing major agribusiness, large primary producers and rural operators. We provide
                                pickers, packer, turf cleaners and more suitable experienced workers according to
                                requirements</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

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
                                            <li>Washing/cleaning</li>
                                            <li>Vegetable pickers</li>
                                            <li>Vegetable packers</li>
                                            <li>Stock control clerk</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>Fruit pickers</li>
                                            <li>Forklift operator</li>
                                            <li>Administration clerk</li>
                                            <li>Fruit grower</li>
                                            <li>Orchard hand</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>Dairy farm hand</li>
                                            <li>Heard manager</li>
                                            <li>Milkers</li>
                                            <li>Calf rearing</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="tab-l">
                                            <li>General farm work</li>
                                            <li>Weed sprayingr</li>
                                            <li>Painting job</li>
                                            <li>Farm sitter</li>
                                            <li>Turf cleaning</li>
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
                <div class="single-site-area-2">
                    <div class="heading">
                        <div class="page-header">
                            <h3 class="section-head">MG ENGINEERING STAFF</h3>
                        </div>

                        <div class="main-section-area">
                            <p class="white text-18">With a database of highly skilled office support staff, MG Engineers
                                specialises in recruiting employees for a wide range of engineering jobs. Our specialist
                                recruitment services include the recruitment of permanent, part time or casual staff who
                                hold extensive experience in the desired engineering field.</p>
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
                        <div class="page-header">
                            <h3 class="section-head">MG IT STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white">We source and place high quality technology, digital and business
                                transformation professionals to clients who require.</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>
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
                        <div class="page-header">
                            <h3 class="section-head">MG GLOBAL STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">Specialising in recruitment for both Australian and international
                                requirements.</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

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
                        <div class="page-header">
                            <h3 class="section-head">MG WAREHOUSE STAFF</h3>
                        </div>
                        <div class="main-section-area">
                            <p class="white text-18">We source staff for Permanent /Temporary /Part time /Casual /Long term
                                and Short-term jobs. Fulfilling logistics, manufacturing, cleaning and gardening
                                requirements.</p>
                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

                        </div>
                    </div>
                </div>
                <!-- Ten Slider    -->
                <div class="main-bg">
                    <div class="single-main-area">
                        <div class="single-site-area-10">
                            <div class="heading">
                                <div class="page-header">
                                    <h3 class="section-head">MG TRANSPORT STAFF</h3>
                                </div>
                                <div class="main-section-area">
                                    <p class="white text-18">Mates Group supply staff for transport and logistics this
                                        includes, Delivery Drivers, Forklift Operators, Truck Drivers.

                                    </p>
                                    <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>
                                </div>
                            </div>
                        </div>
                        <!-- eleven Slider    -->
                        <div class="main-bg">
                            <div class="single-main-area">
                                <div class="single-site-area-11">
                                    <div class="heading">
                                        <div class="page-header">
                                            <h3 class="section-head">MG MAINTENANCE STAFF</h3>
                                        </div>
                                        <div class="main-section-area">
                                            <p class="white text-18">We source staff who maintain domestic households and
                                                industrial places, gathering workers with a good amount of experience and
                                                willingness to work work the desired time of our clients.


                                            </p>
                                            <p><a class="white text-18" href = "/why-choose">Why choose us?</a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- ================= Forth Slider  = = =  -->

                        <div class="main-bg">
                            <div class="single-main-area">
                                <div class="single-site-area-4">
                                    <div class="heading">
                                        <div class="page-header">
                                            <h3 class="section-head">MG LABOURER</h3>
                                        </div>

                                        <div class="main-section-area">
                                            <p class="white text-18">We have worked with the major industry groups
                                                and we have a strong knowledge of their employment needs. We have
                                                experienced personnel who understand the labour market and can find
                                                the best candidates for any business.</p>
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


                    @endsection
