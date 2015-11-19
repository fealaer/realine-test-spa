(function () {
  'use strict';

  angular
    .module('realine.public', ['ngRoute', 'realine.common'])
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/login', {
            templateUrl: 'app/public/login/login.html'
          });
      }]);

})();
