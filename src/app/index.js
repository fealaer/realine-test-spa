(function () {
  'use strict';

  angular
    .module('realine', ['ngRoute', 'ngMessages', 'realine.public'])
    .config(['$locationProvider', '$routeProvider',
      function ($locationProvider, $routeProvider) {
        $routeProvider
          .when('/', {
            controller: 'HomeCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });

        $locationProvider.html5Mode(true);
      }])
    .controller('HomeCtrl', ['$location', 'UserServ', HomeCtrl]);

  function HomeCtrl($location, UserServ) {
    console.log(UserServ.isLoggedIn());
    $location.path(UserServ.isLoggedIn() ? '/login' : '/login');
  }

})();
