(function () {
  'use strict';

  angular
    .module('realine', [
        'ui.router'
      , 'ngMessages'
      , 'realine.public'
      , 'realine.dashboard'
      , 'realine.dashboard.superheroes'
    ])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
      function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('realine', {
          url: '/',
          template: '<ui-view></ui-view>',
          controller: function(UserServ, $state){
            if ($state.is('realine')) {
              $state.go(UserServ.isLoggedIn() ? 'realine.dashboard.home' : 'realine.login');
            } else if ($state.is('realine.login') && UserServ.isLoggedIn()) {
              $state.go('realine.dashboard.home');
            } else if ($state.includes('realine.dashboard.**') && !UserServ.isLoggedIn()) {
              $state.go('realine.login');
            }
          }
        });

        $locationProvider.html5Mode(true);
      }]);

})();
