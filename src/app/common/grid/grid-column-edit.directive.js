(function () {
  'use strict';

  function GridColumnEditCtrl($state) {
    var vm = this;

    vm.edit = function() {
      $state.go('realine.dashboard.superheroes.edit', {email: vm.entity.email});
    }
  }

  function gridColumnEdit() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnEditCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'app/common/grid/grid-column-edit.html'
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridColumnEditCtrl', ['$state', GridColumnEditCtrl])
    .directive('gridColumnEdit', gridColumnEdit);

})();
