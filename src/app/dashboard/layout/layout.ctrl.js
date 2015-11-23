(function () {
  'use strict';

  function DashboardLayoutCtrl($state, UserServ) {
    var vm = this;

    var actions;
    
    vm.user = getLoggedUser();
    vm.signOut = signOut;
    vm.getActions = getActions;

    function getLoggedUser() {
      return UserServ.getLoggedUser();
    }

    function signOut() {
      UserServ.signOut();
      $state.reload('realine');
    }

    function getActions() {
      return actions;
    }
  }

  angular
    .module('realine.dashboard')
    .controller('DashboardLayoutCtrl', ['$state', 'UserServ', DashboardLayoutCtrl]);

})();
