(function () {
  'use strict';

  function GridToolbarCtrl() {
  }

  function gridToolbar($compile) {
    return {
      restrict: 'A',
      scope: {
        options: '=',
        filter: '=',
        order: '='
      },
      controller: 'GridToolbarCtrl',
      controllerAs: 'vm',
      link: link,
      transclude: true,
      replace: false,
      bindToController: true
    };

    function link (scope, element, attr, vm) {
      var template = '<td grid-toolbar-' + vm.options.type + ' filter="vm.filter" order="vm.order" options="vm.options"></div>';
      element.replaceWith($compile(template)(scope));
    }
  }

  angular
    .module('realine.common.grid')
    .controller('GridToolbarCtrl', GridToolbarCtrl)
    .directive('gridToolbar', ['$compile', gridToolbar]);

})();

