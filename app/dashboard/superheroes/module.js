(function () {
  'use strict';

  angular
    .module('realine.dashboard.superheroes', ['ui.router', 'ngMessages', 'realine.common'])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('realine.dashboard.superheroes', {
            abstract: true,
            url: '/superheroes',
            views:{
              'content@realine.dashboard': {
                templateUrl: '/realine-test-spa/app/dashboard/superheroes/layout/layout.html'
              }
            }
          })
          .state('realine.dashboard.superheroes.list', {
            url: '/list',
            views:{
              'content@realine.dashboard.superheroes': {
                templateUrl: '/realine-test-spa/app/dashboard/superheroes/list/list.html'
              }
            }
          })
          .state('realine.dashboard.superheroes.edit', {
            url: '/edit/:email',
            views:{
              'content@realine.dashboard.superheroes': {
                templateUrl: '/realine-test-spa/app/dashboard/superheroes/form/form.html'
              }
            }
          });
      }]);

})();
