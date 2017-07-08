var appBB = angular
.module('appBB', ['ui.router','ngAnimate','ngCookies','pascalprecht.translate'])
.config(function($stateProvider,$urlRouterProvider, $locationProvider, $translateProvider){
    $stateProvider
      .state( 'intro', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'home',{
      url:'/home',
      templateUrl:'show.html'
  }).state('apartment', {
      url:'/apartment/:id',
      templateUrl:'apartment.html'
});
$urlRouterProvider.otherwise('/');
$locationProvider.html5Mode(true);
$translateProvider.useCookieStorage();
$translateProvider.useUrlLoader('/api/lang');
$translateProvider.preferredLanguage('en');
// $translateProvider.translations('it', {
//     'HELLO': 'Ciao'
//   })
});


