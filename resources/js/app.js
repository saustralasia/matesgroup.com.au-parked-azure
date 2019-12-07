/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');
import 'owl.carousel';
window.Vue = require('vue');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// New laravel changes!
// Vue.component('example-component', require('./components/ExampleComponent.vue').default); 

// Switching to EcmaScript imports is the recommended option:
// import ExampleComponent from './components/ExampleComponent.vue';
// Vue.component('example-component', ExampleComponent);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

window.axios = axios;
window.Form = Form;

const app = new Vue({
    el: '#feedbackForm',
    data: {
        //notificationClasses: null, 
        form: new Form({
            name: '',
            email: '',
            phone: '',
            message: '',
            newsletter: true
        }),
        response: '',
        isLoading: false,
        showNofity: false,

    },
    methods: {
        onSubmit() {
            this.isLoading = true;
            this.form.post('/feedback')
                .then(response => (
                    this.response = 'Thank you for contacting us!',
                    this.nofity()
                    ))
                .catch((err) => {
                    console.log('Error!');
                    //this.nofity();
                })
                .finally(() => (this.isLoading = false));
        },
        nofity() {
            this.showNofity = true; 
            setTimeout(() => {
                this.showNofity = false;
                this.response = '';
            }, 3000);

        }
    }
});



var nav = document.getElementById('nav');
var open = document.getElementById('open_menu');
var close = document.getElementById('close_menu');
var phoneIcon = document.getElementById('phone-icon');

open.addEventListener('click',function(){
    nav.style.right = '0';
    open.style.display = 'none';
    phoneIcon.style.display = 'none';
});

close.addEventListener('click', function () {
    nav.style.right = '-100%';
    open.style.display = 'block';
    phoneIcon.style.display = 'block';
});

var topheader = document.querySelector('#top-header-home'); 

 
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
         $('.menu-d').addClass('sticky-a');  
          topheader.style.background = '#fff';
          //topheader.style.background = '#343E13';
          topheader.style.borderBottom = '3px solid #e6e3e3';
          topheader.style.height = '68px';
        }else{
            topheader.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.4), rgba(0,0,0,.3), rgba(0,0,0,.2), rgba(0,0,0,.0)), transparent';
            $('.menu-d').removeClass('sticky-a');
            topheader.style.height = '80px';
            topheader.style.borderBottom = 'none';
        }
    });
    });