'use strict';

angular.module('passwordmoduleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


