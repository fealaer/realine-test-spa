(function () {
  'use strict';

  angular
    .module('realine.public', ['ui.router', 'ngMessages', 'realine.common'])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('realine.login', {
            url: 'login',
            templateUrl: '/realine-test-spa/app/public/login/login.html'
          });
      }]);

})();
