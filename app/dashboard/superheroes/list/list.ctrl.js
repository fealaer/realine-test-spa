(function () {
  'use strict';

  function SuperheroesListCtrl($scope, SuperheroServ) {
    var vm = this;
    vm.data;

    vm.gridOptions = {
      name: 'Grid #1',
      filter: '',
      cols: [
        {field: 'username', type: 'string'},
        {field: 'description', type: 'string'},
        {field: 'details', type: 'string'},
        {field: 'email', type: 'string'},
        {field: 'edit', type: 'edit'}
      ]
    };

    $scope.$watch('search', function(newVal) {
      vm.gridOptions.filter = newVal;
    });

    init();

    function init() {
      SuperheroServ.getSuperheroes().then(function (result) {
        vm.data = result;
      })
    }
  }

  angular
    .module('realine.dashboard.superheroes')
    .controller('SuperheroesListCtrl', ['$scope', 'SuperheroServ', SuperheroesListCtrl]);

})();
