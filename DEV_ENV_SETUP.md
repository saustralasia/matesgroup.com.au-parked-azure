# Development Environment

## Laravel

### Plugins

Seo:
artesaos/seotools
spatie/laravel-sitemap

Debugs:
barryvdh/laravel-debugbar

Authentication:
composer require tymon/jwt-auth
passport

"embed/embed": "^3.2",
"fideloper/proxy": "^3.3",
"graham-campbell/markdown": "^8.0",
"jenssegers/date": "^3.2",
"laravel/dusk": "^2.0",
"league/flysystem-aws-s3-v3": "~1.0",
"mcamara/laravel-localization": "^1.3",
"predis/predis": "^1.1",
"sentry/sentry-laravel": "^0.8.0",
"spatie/color": "^1.1",
"spatie/laravel-activitylog": "^2.2",
"spatie/laravel-backup": "^5.1",
"spatie/laravel-html": "^1.4",
"spatie/laravel-medialibrary": "^6.0",
"spatie/laravel-sluggable": "^2.0",
"spatie/laravel-tags": "^2.0",
"spatie/laravel-translatable": "^2.0",
"spatie/schema-org": "^1.4",
"themsaid/laravel-langman-gui": "^0.3.0",
"yab/laravel-scout-mysql-driver": "^2.0"

## Lumen plugins

https://packagist.org/packages/benjamincrozat/lumen-boilerplate
composer require flipbox/lumen-generator
composer require dusterio/lumen-passport
"require": {
    "dingo/api": "2.0.0-alpha1"
}
        "irazasyed/larasupport": "~1.0",
        "laravel/lumen-framework": "5.6.*",
        "league/fractal": "^0.17.0",
        "santigarcor/laratrust": "5.0.*",
        "tymon/jwt-auth": "^1.0.0",

## VS Code

* Vetur
* laravel-Blade

## PHP storm plugins

### [laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper)

#### Install for Laravel:

`composer require --dev barryvdh/laravel-ide-helper`
Add this lines in `app/Providers/AppServiceProvider.php`
```php
public function register()
{
    if ($this->app->environment() !== 'production') {
        $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
    }
}
```
Run:
`php artisan ide-helper:generate`

#### Install for Lumen (not working):

`composer require --dev barryvdh/laravel-ide-helper`
Add this lines in egister Service Providers section `bootstrap/app.php`
```php
if ($app->environment() !== 'production') {
    $app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
}
```
Run:
`php artisan ide-helper:generate`

## VS Code plugins

Vetur

- User settings
```json
"files.eol": "\n",
"emmet.showAbbreviationSuggestions": true,
"emmet.triggerExpansionOnTab": true,
"emmet.showExpandedAbbreviation": "always",
"emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html"
    },
```

vscode-sass-lint
markdownlint
Markdown Preview Enhanced
laravel-blade
DotENV
PHP Intelephense

## Sublime plugins

seti_UI
color Highlighter
emmet
git
sass
BracketHighlighter
AutoFileName

Just add this binding to your "Key Bindings - User" file: 
{"keys": ["alt+shift+f"], "command": "reindent", "args": {"single_line": false}} 
 
Sublime eslint 
http://www.hongkiat.com/blog/sublimetext-insert-file-path/ 
http://www.hongkiat.com/blog/sublime-text-plugins/



## Chrome plugin

Lighthouse
