(function () {
  'use strict';

  function gridToolbarEdit() {
    return {
      restrict: 'A',
      require: '^grid',
      transclude: true,
      replace: true,
      template: '<td></td>'
    };
  }

  angular
    .module('realine.common.grid')
    .directive('gridToolbarEdit', gridToolbarEdit);

})();
