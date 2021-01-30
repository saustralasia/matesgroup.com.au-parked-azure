@extends('layouts.page')

@section('title', 'How to Write a Job Advert that Works | Mates Group')
@section('meta_description', 'Setting up your own business is inspiring but also challenging if you do not know how to do it. In this article, you will know how to start your own business effectively.')
@section('image', 'http://matesgroup.com.au/images/logo/mates_group_logo.png')

@section('content')
    <header class="py-5 bg-image-full" style="background-image: url('{{asset('images/hiring.png')}}');">
        <img class="img-fluid d-block mx-auto" src="{{asset('images/logo/mates_group_logo-200.png')}}" alt="Approach">
    </header>

    <div class="container">
        <div class="row mt-6">
            <div class="col-md-8">
                <h1 class="display-4 mb-2 blog-post-title">How to Write a Job Description That Attracts Applicants</h1>
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
                    <img src="/images/looking-for-a-job.jpg" height="150px", width="250px">

                    <h3>How to Write a Job Ad?</h3>
                    <p>Are you currently hiring a new member of staff or still in the early stages of preparing for a new employee and thinking where to start? You definitely have to make the job description as efficient and effective in order to accelerate and make the recruiting process more efficient. </p>
                    <p>For any hiring manager, accurate and well-written work criteria are an absolute must in today's dynamic job market. It can be the difference between only recruiting adequate candidates and seeking the next star performer (which eventually slows down the hiring process). </p>
                    <p>Here are several tips with an appropriate job description about how to recruit the best talent. </p>

                    <h3>Contractual, Temporary, and Permanent Jobs</h3>
                    <p>Deciding what kind of employee you need is the first step in writing your work advertisement. Are you looking for a staff member, an accomplished interim manager, or an employee to join the team on a temporary basis to fill a permanent position? Before writing the work ad, this is an important factor that you need to decide on. </p>
                    <p>A significant factor in determining whether you want to retain the level of headcount and efficiency of your workers or whether you want to develop a new position in order to add value to the company in the long term. </p>

                    <h3>Set a Start Date</h3>
                    <p>Your job description should state when you want the new worker to start, as well as defining if the role is contract/temporary/permanent. With the desired start date in mind, have you funded for the new hire, or do you still need to get the required approvals? Will there be ample overlap for information transfer if the new employee replaces someone who is leaving? How versatile will the starting date be for you? Before estimating a start date for the new worker, make sure you've considered all potential possibilities. </p>

                    <h3>Describe Job Requirements and Responsibilities</h3>
                    <p>Identifying all of the new employee's important roles and duties will form the basis of your work ads and help you understand the expertise and experience that you should search for in the new employee member. </p>
                    <p>If this process is completed, you can start improving your work advertising. If you are a writer or author of a job ad then ask yourself: </p>
                    <ol>
                        <li>Which responsibilities are most essential?</li>
                        <li>What lines are there for news, and to whom? </li>
                        <li>What results should be delivered by the employee? </li>
                        <li>What is the extent of his/her authority, if it is a managerial role? </li>
                        <li>See around and try to understand on what salary scale employee will sale their work?</li>
                    </ol>

                    <h3>Determine the Essential Qualifications and Skills </h3>
                    <p>The next step to developing a good job description is to put together key qualifications for the new position based on your answers to the above questions. As each has subtle distinctions, be careful not to confuse credentials with technical skills or soft skills. </p>
                    <ul>
                        <li>Qualifications, such as undergraduate degrees or business certifications, refer to what the applicant wants in order to do the job. </li>
                        <li>Technical skills are linked to what can be achieved by the applicant, such as dealing with various computer systems or accounting packages. </li>
                        <li>Soft skills, such as a positive, and flexible mindset, or an ability to interact with others, are not as easy to quantify or describe. </li>
                    </ul>

                    <p>If there are many applicants competing for the job, the above employment conditions will become extremely relevant. Having a clearly specified set of key criteria will allow you to exclude from the list a large number of candidates that won't suit your position perfectly. </p>

                    <h3>Select a Salary Scale</h3>
                    <p>Although it is not mandatory to include the payment in your work ad, it is always advisable. On the basis of the qualifications, abilities, and experience of the employee, along with area or sector, you should be prepared to set a wage. You can further search on the economist or journalism websites for the salary scale and other related information. </p>
                </div>
            </div>

            <aside class="col-md-4 blog-aside">
                @include('layouts.asides.blog')
                @include('layouts.asides.aboutus')
            </aside>
        </div>
    </div>
@endsection
