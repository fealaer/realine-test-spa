(function () {
  'use strict';

  function DashboardHomeCtrl(UserServ) {
    var vm = this;

    vm.user = getLoggedUser();

    function getLoggedUser() {
      return UserServ.getLoggedUser();
    }
  }

  angular
    .module('realine.dashboard')
    .controller('DashboardHomeCtrl', ['UserServ', DashboardHomeCtrl]);

})();
