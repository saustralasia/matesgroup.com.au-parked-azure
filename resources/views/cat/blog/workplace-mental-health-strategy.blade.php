@extends('layouts.page')

@section('title', 'Managing Your Mental Health in The Workplace | Mates Group')
@section('meta_description', 'In this article, you will learn how to manage your mental health in the workplace effectively.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/workplace-mental-health-startegy1.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">Managing your Mental Health in the Workplace</h1>
                <p>December 18, 2020 by <a href="/contact-us">Mark</a></p>
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
                        <img src="/images/blogs/workplace-mental-health-startegy2.jpg" class="figure-img img-fluid rounded" alt="Managing Your Mental Health in The Workplace">
                    </figure>

                    <h2>Workplace Mental Health Strategy</h2>
                    <p>According to the world health organization “Mental health is a state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community.”</p>
                    <p>Our emotional, psychological, and social well-being requires mental well-being. It determines how we think, feel, and behave. It also helps decide how we handle stress, interacts with others, and make decisions. At every stage of life, from infancy and adolescence through adulthood, mental health is important.</p>
                    <p>Over the lifetime of a person, ones thinking, attitude, and actions may be influenced if he/she has mental health issues. Several variables lead to mental health disorders.</p>
                    <h2>Managing Workplace Mental Health Issues</h2>
                    <p>You might find changes in somebody's behaviour or attitude at the workplace. This can temporarily affect their efficiency or capacity, and also their overall well-being, to reach the performance goals. You have to prepare the conversation before you ask a colleague or worker about their mental health. Thinking about it in advance will lead you to what you need to say. A good starting point is to communicate your concern to your partner and be clear about the problems you have noticed in the workplace.</p>
                    <h2>What If a Mental Health Condition Is Revealed By an Employee Or Colleague?</h2>
                    <p>It is normal to have mental illness problems and most of them are manageable. Most people would be able to work successfully most of the time without assistance and modifications. Mental health issues may affect various individuals in various ways - don't presume that you know the effect their diagnosis can have on their job or life. Ask if they are affected by the disease.</p>
                    <p>Improvements and Solutions in The Workplace and Staff Employers may make a number of workplace changes (for conditions of mental health or disability) at very little expense. Think of what kind of help and modifications an individual may need to continue working efficiently in the role. Changing situations and position requirements might be a solution. Psychotherapy is also a good solution. In the military force, some psychotherapy helps their personnel to keep them mentally healthy.</p>
                    <h2>Psychologically Safe Organizational Support Is Needed</h2>
                    <p>Of course, regardless of the setting, many mental health conditions will arise. Excellent workplace practices and procedures will benefit the workers. Keep a good environment in the workplace.</p>
                    <h2>Workplace Changes and Employee Solutions</h2>
                    <p>The following are a few proposals for the person to help with keeping up ideal mental wellness:</p>
                    <ul>
                        <li>Focus on preserving a balanced lifestyle, including having enough sleep, eating a healthy diet, and exercising regularly.</li>
                        <li>Take some work break.</li>
                        <li>Schedule periodic feedback on results from your boss</li>
                        <li>Build methods of stress reduction</li>
                        <li>Have someone to talk to. Such as a work partner, acquaintance, member of the family, or a counsellor. Therefore, you can express your emotion.</li>
                        <li>Identify what causes tension</li>
                        <li>Have some entertainment in the workplace.</li>
                        <li>The employer must do something for the welfare of the employees. Like as, make a game plan for the entertainment of the staff.</li>
                        <li>Some strategic plan may help.</li>
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
