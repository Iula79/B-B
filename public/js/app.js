var appBB = angular
.module('appBB', ['ui.router','ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider', MainRouter]);

function MainRouter(states, router) {
    states
    .state( 'index', {
      url:'/',
      templateUrl: 'index.html'
  }).state( 'show',{
      url:'/show',
      templateUrl:'show.html'
  }).state('showSingle', {
      url:'/showSingle/:id',
      templateUrl:'show_single.html'
});
    router.otherwise('/');
}
