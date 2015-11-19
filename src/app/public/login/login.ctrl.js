(function () {
  'use strict';

  function LoginCtrl ($timeout, UserServ) {
    var vm = this;
    vm.data = {};
    vm.formError = null;

    vm.login = login;
    vm.cleanFormError = cleanFormError;

    function login () {
      if (vm.form.$valid) {
        UserServ.login(vm.data).then(function (result) {
          console.log(result);
        }, function (err) {
          vm.formError = err;
          $timeout(cleanFormError, 2000);
        });
      }
    }

    function cleanFormError () {
      vm.formError = null;
    }
  }

  angular
    .module('realine.public')
    .controller('LoginCtrl', ['$timeout', 'UserServ', LoginCtrl]);

})();
