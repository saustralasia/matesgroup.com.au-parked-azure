@extends('layouts.page')

@section('title', 'How to Write a Good Australian Style Resume | CV Writing Tips')
@section('meta_description', 'Many candidates search for how to write an Australian style resume. In this article, you will find tips for writing a professional CV for your dream job.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/resume-writing-tips1.png')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">How to Write a Professional Resume</h1>
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
                        <img src="/images/blogs/resume-writing-tips2.jpg" class="figure-img img-fluid rounded" alt="How to Write a Good Australian Style Resume">
                    </figure>
                    <h2>Resume Writing Tips Australia:</h2>
                    <p>If you are a job applicant, your curriculum vitae or resume is a very important thing to make impressed your employer. Get your resume up-to-date focusing on your skills and experiences. A good resume summarises your ability to start a new job.</p>
                    <p>Many candidates search for how to write an Australian style resume. There are some tricks and tips for writing a resume for a job in Australia. Here’s what you need to know to write a CV before applying for a job.</p>
                    <h2>Make your CV brief and summarised:</h2>
                    <p>In your resume, you have to highlight your skills, achievements, and experience. A resume should not be more than 3 to 4 pages. Next, you have to use a standard font. Like as, Times new roman, Arial, etc. Use a neutral color while writing your resume.</p>
                    <h2>Display your personal details:</h2>
                    <p>You must focus on your personal details, such as your full name, contact number, nationality, skilled languages, and some other related things you have. Your resume is like a document. Therefore, you have to show yourself through a resume.</p>
                    <h2>Demonstrate your vocation profile:</h2>
                    <p>If you are a fresh graduate, we will advise you to start your CV with a career objective. Be straightforward to express your qualifications, accomplishments, and job interest. Attach your training and professional experiences simply and broadly.</p>
                    <h2>Focus on your key skills:</h2>
                    <p>Simply focus on your key skills summarising your resume. As a result, you will get an advantage in expressing yourself to the employer.</p>
                    <h2>Write detail about your work experience:</h2>
                    <p>You have to arrange your industrial experiences step-by-step. Your present job should be on the top, then the previous ones’. Explain smartly in which company you gathered what experiences.</p>
                    <h2>Include your hobbies:</h2>
                    <p>You can simply include your hobbies, for example, crafting, poetry, typing, composing, writing, making screenwriting, editing pictures, picture sketching, etc.</p>
                    <h2>What you should not add to your resume:</h2>
                    <p>Irrelevant information should be prohibited from writing in the CV. Like as, do not indicate your race, political preferences, etc.</p>
                    <p>Your CV must be awesome like in the beginning and at the ending. Use synonym words to make your CV rich. Continue updating your resume. Focus on your own clue words. Make your employer reopen your resume. Remember, a CV is the first option to express yourself.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>
        </div>
    </div>
@endsection
