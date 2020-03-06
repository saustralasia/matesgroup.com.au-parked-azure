# Descriptions

## Webpack.mix.js description

### URL Processing

```javascript
    .sass('resources/assets/sass/main-style.scss', 'public/css')
          .options({
              processCssUrls: false
    });
```

```scss
background: url(/images/example.png?d41d8cd98f00b204e9800998ecf8427e);
```

### sourceMaps +

```javascript
mix.js('resources/assets/js/app.js', 'public/js')
   .sourceMaps(true, 'source-map');
```

### Vendor Extraction +

```javascript
mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'jquery']);
```
The extract method accepts an array of all libraries or modules that you wish to extract into a  vendor.js file.   
To avoid JavaScript errors, be sure to load these files in the proper order:
```html
<!–– See Versioning: ––>
<script src="/js/manifest.js"></script>
<script src="/js/vendor.js"></script>
<script src="/js/app.js"></script>
```

### Versioning / Cache Busting +

```javascript
mix.js('resources/assets/js/app.js', 'public/js');

if (mix.inProduction()) {
    mix.version();
}
```

```html
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">

<script src="{{mix('js/manifest.js')}}"></script>
<script src="{{mix('js/vendor.js')}}"></script>
<script src="{{mix('js/app.js')}}"></script>
```

### Browsersync Reloading +

```javascript
mix.browserSync('http://localhost:8000');+

// Or...

// https://browsersync.io/docs/options
mix.browserSync({
    proxy: 'my-domain.dev'
});
```