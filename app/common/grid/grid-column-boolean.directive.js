(function () {
  'use strict';

  function GridColumnBooleanCtrl() {
    var vm = this;

    vm.isEditable = function () {
      return vm.options.editable || false;
    };

    vm.toggleValue = function () {
      if (vm.isEditable()) {
        vm.entity[vm.options.field] = !vm.entity[vm.options.field];
      }
    };

    vm.colColorClass = function () {
      return vm.entity[vm.options.field] ? 'bool-true' : 'bool-false';
    }
  }

  function gridColumnBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnBooleanCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: '/realine-test-spa/app/common/grid/grid-column-boolean.html'
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridColumnBooleanCtrl', GridColumnBooleanCtrl)
    .directive('gridColumnBoolean', gridColumnBoolean);

})();
