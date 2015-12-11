var appBB = angular
.module('appBB', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', MainRouter]);

function MainRouter(states, router) {
    states
    .state( 'home', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'show',{
      url:'/show',
      templateUrl:'show.html'
  });
    router.otherwise('/');

}
