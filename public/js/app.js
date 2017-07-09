var appBB = angular
    .module('appBB', ['ui.router', 'ngAnimate', 'ngCookies', 'pascalprecht.translate'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
        // var preferredLanguage = $translateProvider.preferredLanguage();
        // function getRouteInfo(baseRouteInfo) { 
        //     return { 
        //         url: urlList[preferredLanguage][baseRouteInfo.url],
        //         templateUrl: baseRouteInfo.templateUrl
        //     }

        // }

        // .state('intro', getRouteInfo({url: '/', templateUrl}))
        routesInfo = { 
            en: { 
                home: '/',
                apartment: 'apartment'
            },
            es: { 
                home: '/es',
                apartment: 'apartimento'
            }

        }

        // })
        $stateProvider
            // .state('app', {
            //     abstract: true,
            //     url: '/{locale}',
            // })
            .state('intro', {
                url: '/',
                templateUrl: 'home.html'
            }).state('home', {
                url: '/home',
                templateUrl: 'show.html'
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


