(function () {
  'use strict';

  var superheroes = [
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

  function SuperheroServ($q) {
    var vm = this;

    vm.getSuperheroes = getSuperheroes;
    vm.getSuperheroByEmail = getSuperheroByEmail;
    vm.saveSuperhero = saveSuperhero;

    function getSuperheroes() {
      var deffered = $q.defer();

      setTimeout(function () {
        deffered.resolve(superheroes);
      }, 500);

      return deffered.promise;
    }

    function getSuperheroByEmail(email) {
      var deffered = $q.defer();

      setTimeout(function () {
        deffered.resolve(superheroes[findIndexByEmail(email)]);
      }, 500);

      return deffered.promise;
    }

    function saveSuperhero(superhero) {
      superheroes[findIndexByEmail(superhero.email)] = superhero;
      var deffered = $q.defer();

      setTimeout(function () {
        deffered.resolve(true);
      }, 500);

      return deffered.promise;

    }

    function findIndexByEmail(email) {
      return superheroes.map(function (hero) {
        return hero.email;
      }).indexOf(email);
    }
  }

  angular
    .module('realine.common')
    .service('SuperheroServ', ['$q', SuperheroServ]);

})();
