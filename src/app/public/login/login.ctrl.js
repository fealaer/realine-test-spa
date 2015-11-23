(function () {
  'use strict';

  function LoginCtrl($timeout, UserServ) {
    var vm = this;
    vm.data = {};
    vm.formStatus = null;

    vm.login = login;
    vm.setFormError = setFormStatus;
    vm.hasError = hasError;
    vm.getUsers = getUsers;

    function login() {
      if (vm.form.$valid) {
        UserServ.login(vm.data).then(function (result) {
          if (result) {
            setFormStatus({loggedIn: true});

          }
        }, function (err) {
          setFormStatus(err);
        });
      }
    }

    function setFormStatus(status) {
      vm.formStatus = status;
      $timeout(cleanFormStatus, 3000);
    }

    function cleanFormStatus() {
      vm.formStatus = null;
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
