(function () {
  'use strict';

  angular
    .module('realine', ['ngRoute', 'realine.public'])
    .config(['$locationProvider',
      function ($locationProvider) {
        $locationProvider.html5Mode(true);
      }])
    .controller('MainCtrl', function () {});

})();
