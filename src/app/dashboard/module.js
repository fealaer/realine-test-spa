(function () {
  'use strict';

  angular
    .module('realine.dashboard', ['ui.router', 'ngMessages', 'realine.common'])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('realine.dashboard', {
            abstract: true,
            url: 'dashboard',
            templateUrl: 'app/dashboard/layout/layout.html'
          })
          .state('realine.dashboard.home', {
            url: '/',
            views:{
              'content@realine.dashboard': {
                templateUrl: 'app/dashboard/home/home.html'
              }
            }
          });
      }]);

})();
