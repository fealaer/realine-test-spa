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
    vm.getLoggedUser = getLoggedUser;
    vm.getUsers = getUsers;
    vm.signOut = signOut;

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
        if (!localStorage.loggedUser) return;
        var user = JSON.parse(localStorage.loggedUser);
        user.bio.fullName = user.bio.firstName + ' ' + user.bio.lastName;
        return user;
      }
      return loggedUser;
    }

    function getUsers() {
      return users;
    }

    function signOut() {
      if (typeof(Storage) !== "undefined") {
        delete localStorage.loggedUser;
      }
      loggedUser = undefined;
    }
  }

  angular
    .module('realine.common')
    .service('UserServ', ['$q', UserServ]);

})();
