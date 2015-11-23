(function () {
  'use strict';

  function GridColumnDeleteCtrl() {
  }

  function gridColumnDelete() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnDeleteCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'app/common/grid/grid-column-delete.html',
      link: function(scope, element, attrs, vm) {
        scope.vm.remove = function() {
          vm.remove(scope.vm.entity);
        };
      }
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridColumnDeleteCtrl', GridColumnDeleteCtrl)
    .directive('gridColumnDelete', gridColumnDelete);

})();
