(function () {
  'use strict';

  function DashboardLayoutCtrl($state, $scope, UserServ) {
    var vm = this;

    vm.actions;
    vm.user = getLoggedUser();
    vm.signOut = signOut;

    $scope.search = '';
    $scope.setActions = function (actions) {
      vm.actions = actions;
    };

    function getLoggedUser() {
      return UserServ.getLoggedUser();
    }

    function signOut() {
      UserServ.signOut();
      $state.reload('realine');
    }
  }

  angular
    .module('realine.dashboard')
    .controller('DashboardLayoutCtrl', ['$state', '$scope', 'UserServ', DashboardLayoutCtrl]);

})();
