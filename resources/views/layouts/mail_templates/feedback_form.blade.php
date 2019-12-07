<html>
    <head></head>
    <body style="">
        
        <p>Hello, <br>
        my company name is <strong>{{ $data['name'] }}</strong>. I have some query like, {{ $data['message'] }}.</p>
        
        <p>It would be appriciative, if you gone through this feedback.</p>

        <p> 
            Company name: {{ $data['name'] }}
            email: {{ $data['email'] }}<br>
            Phone: {{ $data['phone'] }}
        </p>

        <p>This email generate from {{ $data['ip'] }} IP address.</p>
        <p>This email generate from MatesWrokforce.com.au website's feedback/contact-us form.</p>
    </body>
</html>