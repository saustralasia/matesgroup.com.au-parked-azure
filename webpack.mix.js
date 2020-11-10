const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.autoload({ 'jquery': ['window.$', 'window.jQuery'] });
mix.autoload({ jquery: ['$', 'window.jQuery', 'jQuery'] });
// mix.autoload({ jquery: ['$', 'window.jQuery'] });
// mix.autoload({
//     jQuery: 'jquery',
//     $: 'jquery',
//     jquery: 'jquery'
// });

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
        .options({
            processCssUrls: false
        })
        //.sourceMaps(true, 'source-map')
        .extract(['vue', 'jquery']); //always ON, except sourcemap

mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/fonts', 'public/fonts');
//mix.copy('resources/sass/slicknav.min.css', 'public/css/slicknav.min.css');

// Versioning
if (mix.inProduction()) {
    mix.version();
}

// Proxy server address
mix.browserSync('http://localhost:8000');
