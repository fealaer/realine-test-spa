(function () {
  'use strict';

  function GridColumnCtrl() {
  }

  function gridColumn($compile) {
    return {
      restrict: 'A',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnCtrl',
      controllerAs: 'vm',
      link: link,
      transclude: true,
      replace: false,
      bindToController: true
    };

    function link (scope, element, attr, vm) {
      var template = '<td grid-column-' + vm.options.type + ' entity="vm.entity" options="vm.options"></div>';
      element.replaceWith($compile(template)(scope));
    }
  }

  angular
    .module('realine.common.grid')
    .controller('GridColumnCtrl', GridColumnCtrl)
    .directive('gridColumn', ['$compile', gridColumn]);

})();

