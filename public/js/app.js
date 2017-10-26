var appBB = angular
    .module('appBB', ['ui.router', 'ngAnimate', 'ngCookies', 'pascalprecht.translate'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
      
        $stateProvider
            .state('intro', {
                url: '/:lang?',
                templateUrl: 'home.html',
                resolve: {
                    lang: ["$translate", "$stateParams", function($translate, $stateParams){
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
                url: '/apartment/:id',
                templateUrl: 'apartment.html'
            }).state('about', {
                url: '/about',
                templateUrl: 'about.html'
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $translateProvider.useCookieStorage();
        $translateProvider.useUrlLoader('/api/lang');
        $translateProvider.preferredLanguage('en');
    });


