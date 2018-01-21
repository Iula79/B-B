var appBB = angular
    .module('appBB', ['ui.router', 'ngAnimate', 'ngCookies', 'pascalprecht.translate', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
      
        $stateProvider
            .state('intro', {
                url: '/:lang?',
                templateUrl: 'home.html',
                resolve: {
                    lang: ["$translate", "$stateParams", function($translate, $stateParams){
                        // console.log($stateParams)
                        $translate.use($stateParams.lang);
                        return $stateParams.lang;
                    }]
                }
            }).state('home', {
                url: '/home/:lang?',
                templateUrl: 'show.html',
                resolve: {
                    lang: ["$translate", "$stateParams", function($translate, $stateParams){
                        $translate.use($stateParams.lang);
                        return $stateParams.lang;
                    }]
                },
                params: {
                    lang: "en"
                }
            }).state('apartment', {
                url: '/apartment/:lang?/:id',
                templateUrl: 'apartment.html',
                resolve: {
                    lang: ["$translate", "$stateParams", function($translate, $stateParams){
                        $translate.use($stateParams.lang);
                        return $stateParams.lang;
                    }]
                },
            }).state('about', {
                url: '/about/:lang?',
                templateUrl: 'about.html',
                resolve: {
                    lang: ["$translate", "$stateParams", function($translate, $stateParams){
                        $translate.use($stateParams.lang);
                        return $stateParams.lang;
                    }]
                },
            });
            
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $translateProvider.useCookieStorage();
        $translateProvider.useUrlLoader('/api/lang')
                .registerAvailableLanguageKeys(['en','it'], {
                    '*': 'en'
                })
                .preferredLanguage('en')
                .fallbackLanguage('en')
                .useSanitizeValueStrategy('escape');
    });


