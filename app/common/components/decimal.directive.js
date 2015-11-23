(function () {
  'use strict';

  var DECIMAL_REGEXP = /^\d*\.?\d*$/;

  function decimal() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.decimal = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          return DECIMAL_REGEXP.test(viewValue);
        };
      }
    };
  }

  angular
    .module('realine.common')
    .directive('decimal', [decimal]);

})();
