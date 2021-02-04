<table id="ko_logoBlock_4" class="vb-outer" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bfbfbf">
    <tbody>
    <tr>
        <td class="vb-outer" align="center" valign="top">
            <div>
                <table class="vb-row" role="presentation" border="0" width="570" cellspacing="9" cellpadding="0">
                    <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <div>
                                <table class="vb-content" role="presentation" border="0" width="184" cellspacing="9" cellpadding="0">
                                    <tbody>
                                    <tr>
                                        <td class="links-color" align="center" valign="top" width="100%"><a href="http://www.matesgroup.com.au" target="_new"><img src="http://www.matesgroup.com.au/images/logo/email/mates-group-australia.jpg" alt="Mates Group" width="166" align="center" border="0" hspace="0" vspace="0" /></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table id="ko_titleBlock_5" class="vb-outer" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bfbfbf">
    <tbody>
    <tr>
        <td class="vb-outer" align="center" valign="top">
            <div>
                <table class="vb-row" role="presentation" border="0" width="570" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                    <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <div>
                                <table class="vb-content" role="presentation" border="0" width="552" cellspacing="9" cellpadding="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" valign="top" width="100%"><h1>Hello From <strong>{{ config('app.name') }}</strong>!</h1></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table id="ko_textBlock_6" class="vb-outer" style="height: 290px; width: 100%;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bfbfbf">
    <tbody>
    <tr style="height: 290px;">
        <td class="vb-outer" style="height: 290px;" align="center" valign="top">
            <div>
                <table class="vb-container" role="presentation" border="0" width="570" cellspacing="18" cellpadding="0" bgcolor="#ffffff">
                    <tbody>
                    <tr>
                        <td class="long-text links-color" align="left" valign="top" width="100%">
                            <p>Dear <strong>{{$contactUs->name}}</strong>,<br />Thank you for reaching out to us via our <a href="http://www.matesgroup.com.au">website</a>; we'll be in touch as soon as we can.</p>
                            <p>Summary of web form submission:</p>
                            <p>Your Name: <strong><em>{{$contactUs->name}}</em></strong><br />Email Address: <em>{{$contactUs->email}}</em><br />Case Number: <em>{{$contactUs->case_number}}</em><br />Cell Phone Number: <em>{{$contactUs->phone}}</em></p>
                            <p>Message:<br /><em>{{$contactUs->message}}</em></p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table id="ko_buttonBlock_8" class="vb-outer" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bfbfbf">
    <tbody>
    <tr>
        <td class="vb-outer" align="center" valign="top">
            <div>
                <table class="vb-container" role="presentation" border="0" width="570" cellspacing="18" cellpadding="0" bgcolor="#ffffff">
                    <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <p>We have an experienced and diverse team who follow current market trends and employment</p>
                            <table role="presentation" border="0" cellspacing="0" cellpadding="12" align="center">
                                <tbody>
                                <tr>
                                    <td align="center" valign="middle" bgcolor="#1f497d" width="auto"><span style="text-decoration: underline;"><span style="color: #ffffff; text-decoration: underline;"><a style="color: #ffffff; text-decoration: underline;" title="Mates Group" href="http://www.matesgroup.com.au">VISIT US</a></span></span></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    </tbody>
</table>



{{--<tr>--}}
{{--    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="http://www.matesgroup.com.au"><img src="http://www.matesgroup.com.au/images/logo/email/mates-group-australia.jpg" alt="Mates Group" style="display: block;" width="130" title="Mates Group"></a></td>--}}
{{--</tr>--}}


{{--<h1>Hello From {{ config('app.name') }}</h1>--}}

{{--<p>Dear <strong>{{$contactUs->name}}</strong>,</p>--}}
{{--<p>Thank you for reaching out to us via our <a href="{{ url('http://www.matesgroup.com.au/') }}">website</a>; we'll be in touch as soon as we can.</p>--}}
{{--<p>Summary of web form submission:</p>--}}

{{--<p>Your Name: test</p>--}}
{{--<p>Email Address: [captcha2002@gmail.com](mailto:captcha2002@gmail.com)</p>--}}
{{--<p>Case Number: 10411942</p>--}}
{{--<p>Cell Phone Number: 1231231234</p>--}}

{{--<p>Message:</p>--}}
{{--<p>sdsdfsdfsdfsdf</p>--}}





{{--@component('mail::message')--}}
{{--    # Hello From {{ config('app.name') }}--}}

{{--    Dear {{$contactUs->name}},<br>--}}
{{--    Thank you for reaching out to us via our [website]({{ url('http://www.matesgroup.com.au/') }}); we'll be in touch as soon as we can.--}}

{{--    <a href="{{ url('your-url') }}">Click me!</a>--}}
{{--    <a href="{{ url('http://www.matesgroup.com.au/') }}">website</a>--}}
{{--    Summary of web form submission:--}}

{{--    Your Name: test--}}
{{--    Email Address: [captcha2002@gmail.com](mailto:captcha2002@gmail.com)--}}
{{--    Case Number: 10411942--}}
{{--    Cell Phone Number: 1231231234--}}

{{--    Message:--}}
{{--    sdsdfsdfsdfsdf--}}


{{--    @component('mail::button', ['url' => ''])--}}
{{--        Mates Group--}}
{{--    @endcomponent--}}

{{--    Regards,<br>--}}
{{--    {{ config('app.name') }}--}}
{{--    [Mates Group](http://www.matesgroup.com.au/)--}}
{{--@endcomponent--}}
