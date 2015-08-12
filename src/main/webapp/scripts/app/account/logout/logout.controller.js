'use strict';

angular.module('passwordmoduleApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
