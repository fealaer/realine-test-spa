(function () {
  'use strict';

  function SuperheroesListCtrl($scope) {
    var vm = this;

    vm.data = [
      {
        username: 'Peter parker',
        description: 'The Spider-man! My good friend!',
        details: 'Superhero mutant',
        email: 'spider-man@email.com',
        active: true,
        locked: false
      },
      {
        username: 'Henry McCoy',
        description: 'Beast',
        details: 'X-Men',
        email: 'beast@xmen.com',
        active: false,
        locked: true
      },
      {
        username: 'James \'Logan\' Howlett',
        description: 'Wolverine',
        details: 'X-Men',
        email: 'wolverine@xmen.com',
        active: false,
        locked: true
      },
      {
        username: 'Scott Summers',
        description: 'Cyclops',
        details: 'X-Men',
        email: 'cyclops@xmen.com',
        active: true,
        locked: false
      },
      {
        username: 'Jean Grey',
        description: 'Phoenix',
        details: 'X-Men',
        email: 'jean.grey@xmen.com',
        active: false,
        locked: true
      }
    ];

    var descriptionValidator = function (val) {
      return Math.random() <= 0.8;
    };

    var detailsValidator = function (val) {
      return val.toLowerCase() !== 'fuck';
    };

    var emailValidator = function (val) {
      return ~val.indexOf('@');
    };

    vm.gridOptions = {
      name: 'Grid #1',
      filter: '',
      cols: [
        {field: 'username', type: 'string'},
        {field: 'description', type: 'string', editable: true, validator: descriptionValidator},
        {field: 'details', type: 'string', editable: true, validator: detailsValidator},
        {field: 'email', type: 'string', editable: true, validator: emailValidator},
        {field: 'edit', type: 'edit'}
      ]
    };

    $scope.$watch('search', function(newVal) {
      vm.gridOptions.filter = newVal;
    });
  }

  angular
    .module('realine.dashboard.superheroes')
    .controller('SuperheroesListCtrl', ['$scope', SuperheroesListCtrl]);

})();
