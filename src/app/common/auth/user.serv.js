(function () {
  'use strict';

  var users = [
    {
      credentials: {
        email: 'admin@example.com',
        password: 'password'
      },
      bio: {
        lastName: 'Sharapov',
        firstName: 'Volodya'
      },
      role: 'admin'
    },
    {
      credentials: {
        email: 'super@admin.com',
        password: 'superadmin'
      },
      bio: {
        lastName: 'Zhiglov',
        firstName: 'Gleb'
      },
      role: 'super admin'
    }
  ];

  function UserServ($q) {
    var vm = this;

    var loggedUser;

    vm.login = login;
    vm.isLoggedIn = isLoggedIn;
    vm.getUsers = getUsers;

    function login(data) {
      var deffered = $q.defer();

      setTimeout(function () {
        users.forEach(function (user) {
          if (user.credentials.email === data.email && user.credentials.password === data.password) {
            saveLoggedUser(user);
            deffered.resolve(user);
          }
        });
        deffered.reject({credentials: true});
      }, 2000);

      return deffered.promise;
    }

    function isLoggedIn() {
      return !!getLoggedUser();
    }

    function saveLoggedUser(user) {
      if (typeof(Storage) !== "undefined") {
        localStorage.loggedUser = JSON.stringify(user);
      }
      loggedUser = user;
    }

    function getLoggedUser() {
      if (typeof(Storage) !== "undefined") {
        return localStorage.loggedUser;
      }
      return loggedUser;
    }

    function getUsers() {
      return users;
    }
  }

  angular
    .module('realine.common')
    .service('UserServ', ['$q', UserServ]);

})();
