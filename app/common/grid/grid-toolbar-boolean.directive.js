(function () {
  'use strict';

  function GridToolbarBooleanCtrl() {
    var vm = this;

    vm.isFilterable = function () {
      return vm.options.filterable !== undefined ? vm.options.filterable : true;
    };

    vm.isFieldEqualTo = function (value) {
      console.log(vm.filter, vm.options.field, vm.filter[vm.options.field], value);
      return vm.filter[vm.options.field] === value;
    };

    vm.setFilter = function (value) {
      console.log(vm.filter, vm.options.field, vm.filter[vm.options.field], value);
      if (vm.isFieldEqualTo(value)) {
        delete vm.filter[vm.options.field];
      } else {
        vm.filter[vm.options.field] = value;
      }
    };

    vm.buttonColorClass = function (value, buttonClass) {
      if (!vm.isFilterable()) {
        return 'btn-default btn-disabled';
      }
      return vm.isFieldEqualTo(value) ? buttonClass : 'btn-default';
    };
  }

  function gridToolbarBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        options: '=',
        filter: '='
      },
      controller: 'GridToolbarBooleanCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: '/realine-test-spa/app/common/grid/grid-toolbar-boolean.html'
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridToolbarBooleanCtrl', GridToolbarBooleanCtrl)
    .directive('gridToolbarBoolean', gridToolbarBoolean);

})();
