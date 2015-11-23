(function () {
  'use strict';

  function GridCtrl() {
    var vm = this;

    vm.remove = remove;
    vm.orderBy = orderBy;
    vm.resetOrder = resetOrder;
    vm.resetFilter = resetFilter;
    vm.isFilterable = isFilterable;
    vm.isSortable = isSortable;

    init();

    function init() {
      if (!vm.options.filter) {
        vm.options.filter = {};
      }

      if (!vm.options.order) {
        vm.options.order = {
          predicate: vm.options.cols[0].field,
          reverse: false
        };
      }

      vm.default = {
        filter: angular.copy(vm.options.filter),
        order: angular.copy(vm.options.order)
      };
    }

    function remove(entity) {
      var i = vm.data.indexOf(entity);
      if (~i) {
        vm.data.splice(i, 1);
      }
    }

    function orderBy(predicate) {
      var order = vm.options.order;
      order.reverse = (order.predicate === predicate) ? !order.reverse : false;
      order.predicate = predicate;
    }

    function resetOrder() {
      vm.options.order = angular.copy(vm.default.order);
    }

    function resetFilter() {
      vm.options.filter = angular.copy(vm.default.filter);
    }

    function isFilterable() {
      var filtered = vm.options.cols.filter(function (entity) {
        return entity.type === 'string' || entity.type === 'boolean';
      });
      return !!filtered.length;
    }

    function isSortable() {
      var filtered = vm.options.cols.filter(function (entity) {
        return entity.type === 'string';
      });
      return !!filtered.length;
    }
  }

  function grid() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '='
      },
      controller: 'GridCtrl',
      controllerAs: 'vm',
      transclude: true,
      replace: false,
      bindToController: true,
      templateUrl: 'app/common/grid/grid.html'
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridCtrl', GridCtrl)
    .directive('grid', grid);

})();
