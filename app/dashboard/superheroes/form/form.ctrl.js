(function () {
  'use strict';

  function SuperheroesFormCtrl($state, $stateParams, SuperheroServ) {
    var vm = this;
    vm.hero;

    vm.saveHero = saveHero;
    vm.hasError = hasError;

    init();

    function init() {
      SuperheroServ.getSuperheroByEmail($stateParams.email).then(function (result) {
        vm.hero = result;
      });
    }

    function saveHero() {
      vm.hero.power = Number.parseFloat(vm.hero.power);
      SuperheroServ.saveSuperhero(vm.hero).then(function() {
        $state.go('realine.dashboard.superheroes.list');
      });
    }

    function hasError(elem) {
      return elem.$touched && elem.$invalid;
    }
  }

  angular
    .module('realine.dashboard.superheroes')
    .controller('SuperheroesFormCtrl', ['$state', '$stateParams', 'SuperheroServ', SuperheroesFormCtrl]);

})();
