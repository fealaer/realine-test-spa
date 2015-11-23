(function () {
  'use strict';

  function LoginCtrl($timeout, UserServ) {
    var vm = this;
    vm.data = {};
    vm.formError = null;

    vm.login = login;
    vm.cleanFormError = cleanFormError;
    vm.hasError = hasError;
    vm.getUsers = getUsers;

    function login() {
      if (vm.form.$valid) {
        UserServ.login(vm.data).then(function (result) {
          console.log(result);
        }, function (err) {
          console.log(err);
          vm.formError = err;
          $timeout(cleanFormError, 3000);
        });
      }
    }

    function cleanFormError() {
      vm.formError = null;
    }

    function hasError(elem) {
      return elem.$touched && elem.$invalid;
    }

    function getUsers() {
      return UserServ.getUsers();
    }
  }

  angular
    .module('realine.public')
    .controller('LoginCtrl', ['$timeout', 'UserServ', LoginCtrl]);

})();
