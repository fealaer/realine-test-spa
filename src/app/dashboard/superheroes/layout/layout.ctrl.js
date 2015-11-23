(function () {
  'use strict';

  function SuperheroesLayoutCtrl($scope) {
    var vm = this;

    $scope.setActions([
      {
        title: 'Add',
        action: function () {
          console.log('Action add is called');
        }
      },
      {
        title: 'Delete',
        action: function () {
          console.log('Action delete is called');
        }
      }
    ]);

    vm.sideMenu = ['One', 'Two', 'Three', 'Four', 'Five'];
  }

  angular
    .module('realine.dashboard.superheroes')
    .controller('SuperheroesLayoutCtrl', ['$scope', SuperheroesLayoutCtrl]);

})();
