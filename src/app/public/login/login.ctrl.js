(function () {
  'use strict';

  function LoginCtrl($timeout, $state, UserServ) {
    var vm = this;
    vm.data = {};
    vm.formStatus = null;

    vm.login = login;
    vm.setFormError = setFormStatus;
    vm.hasError = hasError;
    vm.getUsers = getUsers;
    vm.cleanFormStatus = cleanFormStatus;

    function login() {
      if (vm.form.$valid) {
        UserServ.login(vm.data).then(function (result) {
          if (result) {
            setFormStatus({loggedIn: true});
            $timeout(function redirect() {
              $state.reload('realine');
            }, 3000);
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
    .controller('LoginCtrl', ['$timeout', '$state', 'UserServ', LoginCtrl]);

})();
