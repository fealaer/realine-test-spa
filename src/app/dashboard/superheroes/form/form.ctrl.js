(function () {
  'use strict';

  function SuperheroesFormCtrl($state, $stateParams, SuperheroServ) {
    var vm = this;
    vm.hero;

    vm.saveHero = saveHero;

    init();

    function init() {
      SuperheroServ.getSuperheroByEmail($stateParams.email).then(function (result) {
        vm.hero = result;
      });
    }

    function saveHero() {
      SuperheroServ.saveSuperhero(vm.hero).then(function() {
        $state.go('realine.dashboard.superheroes.list');
      });
    }
  }

  angular
    .module('realine.dashboard.superheroes')
    .controller('SuperheroesFormCtrl', ['$state', '$stateParams', 'SuperheroServ', SuperheroesFormCtrl]);

})();
