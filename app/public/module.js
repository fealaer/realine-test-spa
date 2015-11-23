(function () {
  'use strict';

  angular
    .module('realine.public', ['ui.router', 'ngMessages', 'realine.common'])
    .config(['$stateProvider',
      function ($stateProvider) {
        $stateProvider
          .state('realine.login', {
            url: 'login',
            templateUrl: 'app/public/login/login.html'
          });
      }]);

})();
