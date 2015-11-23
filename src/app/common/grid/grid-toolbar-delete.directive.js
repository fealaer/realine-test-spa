(function () {
  'use strict';

  function gridToolbarDelete() {
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
    .directive('gridToolbarDelete', gridToolbarDelete);

})();
