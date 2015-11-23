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
            templateUrl: '/realine-test-spa/app/dashboard/layout/layout.html'
          })
          .state('realine.dashboard.home', {
            url: '/',
            views:{
              'content@realine.dashboard': {
                templateUrl: '/realine-test-spa/app/dashboard/home/home.html'
              }
            }
          });
      }]);

})();
