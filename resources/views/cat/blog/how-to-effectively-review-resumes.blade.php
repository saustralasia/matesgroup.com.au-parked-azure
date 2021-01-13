@extends('layouts.page')

@section('title', 'How to Effectively Review Resumes | Quick Tips to Follow')
@section('meta_description', 'How do you analyze the resume review process? In this article, you will find all the necessary tips to hire the right candidate for your company.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/blog.jpg')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">How to Effectively Review Resumes?</h1>
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
                    <img src="/images/word-cloud.png" height="150px", width="250px">

                    <p>If you are an HR manager you must have experience in sorting out hundreds and thousands of resumes in a short time. So, the question is how can you boost up the process and sort out the resume efficiently. Here is some guidance to sort out resumes. Firstly, you have to determine what skills are mandatory and what skills are non-mandatory.</p>

                    <h3>Mandatory Skills </h3>
                    <p>In your initial scan of the paper, part of the art of evaluating resumes is knowing what to concentrate on. The first step in shortlisting star candidates is to search for qualities and abilities you have defined in your selection requirements through their resume and corresponding cover letter, beginning with the "must-have" that are important to the job. </p>

                    <h3>Non-Mandatory Skills</h3>
                    <p>You will still come across resumes with all the "must-have" abilities, but when it comes to "nice-to-have" abilities, don't check every box (or qualifications). Sometimes these non-mandatory skills help you to raise your company growth. </p>

                    <h3>Determining a Pay Scale</h3>
                    <p>Using a market pay report and the additional wage analysis materials that you have on hand, assess the salary range. Before they spend too much time in your corporation, better candidates can ask about the pay scale. In an effective answer, be prepared so that you will not lose the best candidates. </p>

                    <h3>Create a List or Applicant Profile of Key Qualifications </h3>
                    <p>This method gets you started. The next key is to nail down all of this data for HR workers and the hiring manager. Build a list that sets out the most critical requirements for choosing your candidate. This is also referred to as a profile for candidates. You'll like to list: </p>

                    <ul>
                        <li>The main features or characteristics. </li>
                        <li>The most vital talents.</li>
                        <li>The most suitable experience.</li>
                        <li>And the desired standard of education.</li>
                        <li>The other most significant considerations that you will include in the selection of candidates. </li>
                    </ul>

                    <h3>Read the Cover Letter Carefully</h3>
                    <p>Review rigidly the cover letters of the applicants. See what the goal of the candidates is. Just focus on the main key points. While managing the curriculum vitae, look at the educational qualifications the applicants have. Review the applicants’ running job and then survey on it. Use the candidate’s cover letter while questioning in the interview. Raise the questions you made before the interview.  </p>

                    <h3>Line Up a Shortlist</h3>
                    <p>Lastly, time to summarize, sketch up, and sum up. If an applicant ticks enough boxes to merit an interview, add him or her to your target list and take note of the possible issues during the interview that you would like to discuss.</p>

                    <p>Following these steps would allow you to do your proper research and understand exactly what you need to look for in the resumes of applicants, in less effort and with less trouble. Remember, effectiveness in reviewing resumes is an art. It takes up your skill of recruiting potential candidates. Keep a connection with all the applicants.</p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>
        </div>
    </div>
@endsection
