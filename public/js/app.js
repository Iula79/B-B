var appBB = angular
.module('appBB', ['ui.router','ngAnimate'])
.config(function($stateProvider,$urlRouterProvider, $locationProvider){
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
});


