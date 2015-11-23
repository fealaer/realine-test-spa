(function () {
  'use strict';

  function GridColumnStringCtrl() {
    var vm = this;

    function init () {
      vm.mode = 'view';

      Object.defineProperty(vm, "value", {
        get : function () {
          return vm.entity[vm.options.field];
        },
        set : function (val) {
          if (!vm.options.validator || vm.options.validator(val)) {
            vm.entity[vm.options.field] = val;
          } else {
            alert('This value does not allowed!');
          }
          vm.changeMode('view');
        }
      });
    }

    vm.changeMode = function (mode) {
      if (vm.isEditable()) {
        vm.mode = mode;
      }
    };

    vm.isEditable = function () {
      return vm.options.editable || false;
    };

    vm.isEditMode = function () {
      return vm.mode === 'edit';
    };

    vm.onEnter = function (event) {
      if (event.keyCode === 13 ) {
        event.target.blur();
      }
    };

    init();
  }

  function gridColumnString() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnStringCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'app/common/grid/grid-column-string.html'
    };
  }

  angular
    .module('realine.common.grid')
    .controller('GridColumnStringCtrl', GridColumnStringCtrl)
    .directive('gridColumnString', gridColumnString);

})();
