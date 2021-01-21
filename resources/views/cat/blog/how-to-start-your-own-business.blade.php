@extends('layouts.page')

@section('title', 'A Step by Step Guide to Starting Your Own Business | Mates Group')
@section('meta_description', 'Setting up your own business is inspiring but also challenging if you do not know how to do it. In this article, you will know how to start your own business effectively.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/business-suit.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">Guide to Starting your Own Business</h1>
                <p>January 13, 2021 by <a href="/contact-us">Mark</a></p>
                <hr>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-8 blog-main">
                <div class="blog-post">

                    <figure class="figure">
                        <img src="/images/blogs/money.jpg" class="figure-img img-fluid rounded" alt="The 8 Best Tips to Prepare for an Interview">
                    </figure>
                    <!-- <img src="/images/money.jpg" height="150px", width="250px"> -->

                    <p>People frequently ask us for a list of steps to start their own business that they can use. There are so many factors of business that varies from company to company.</p>
                    <p>There are things, however, that any organization needs to do to get off the ground. So to start a new business, here are some main steps you need to take. Mind that, just be versatile.</p>
                    <p>Every organization is unique and, as you go, you will need to modify this list as yours. Here are some tips on how to start your own business:</p>

                    <ul>
                        <li>
                            <strong>Firstly</strong> you need to ask yourself what type of business is best for you. When trying to set up your own company, there are three main choices. You may become a consultant, set up a business of your own, buy a company, or purchase a franchise.
                            <ol>
                                <li>Become a consultant: You can use your current expertise and go into consultation. Equipped with a computer, a laptop, and a car, studying how to sell your consultancy, attracting your first customer, setting your fees, and delivering excellence is a matter of learning. </li>
                                <li>Starting a start-up business: By starting from scratch, you could create your own company. The advantage of this is that you can establish any type of business you want. It depends on demand, of course, as to whether someone is going to buy your service or product, but that's where your research comes into play beforehand. </li>
                                <li>Buying an established corporation: If you think that you have enough money to buy an existing business company that is widely profitable, you can buy that corporation then. </li>
                            </ol>
                        </li>
                        <li><strong>Secondly,</strong> you asked yourself do I need to have a business plan? </li>
                        <p>For the short and long term, a business plan helps you coordinate your strategy. You don't have to blindly adhere to it but the more your plan is detailed the more organized you will be. Use it to approach banks, lenders, angel investors, or venture capitalists for investment, with a detailed business plan in place.</p>
                        <li>Now determine what will be your business name. You must register your business name, domain, and other essential license papers. This is necessary for every start-up organization to have a government-issued license.</li>
                        <li>Make sure, you have the business insurance. To ensure you are adequately covered, you must speak with an insurance agent in your field. </li>
                        <li>Now it’s time to think if you need a company website. Every company has its own website that is its’ identity. What the company all about, what kind of company is this, how can I benefited from that company is explained on a website. Hence, nowadays to have a website of an organization is a damn necessary thing.  </li>
                        <li><strong>Lastly,</strong> think what if you invest a lot of money in your business. If you see that your business is developing aggressively, you can invest a lot of money then. But in some cases, it does not happen. It can come to you as a great loss. Therefore, before investing a lot of money you need to think again and over again. </li>
                    </ul>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>
        </div>
    </div>
@endsection
