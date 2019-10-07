var loginService = angular.module('login-service', []);

loginService.factory('LoginAPI', function($http) {

    var loginAPI = {};

    loginAPI.doLogin = function(loginData) {
        return $http({
            method : 'POST',
            url : 'user/login',
            data : loginData
        });
    };
    loginAPI.doRegister = function(registerData) {
        return $http({
            method : 'POST',
            url : 'user/register',
            data : registerData
        });
    };
    loginAPI.forgotPassword = function(loginData) {
        return $http({
            method : 'POST',
            url : 'user/forgotPassword',
            data : loginData
        });
    };
    return loginAPI;
});

loginService.factory('AuthenticationService', [
    'Base64',
    '$http',
    '$cookieStore',
    '$rootScope',
    '$timeout',
    function(Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.SetCredentials = function(user_name, password,loginType,id) {
            var authdata = Base64.encode(user_name + ':' + password);
            $rootScope.globals = {
                currentUser : {
                    user_name : user_name,
                    password : password,
                    authdata : authdata,
                    login_type : loginType,
                    id: id,
                }
            };
            $rootScope.loginType = loginType;
            //console.log("in auth "+JSON.stringify($rootScope.globals))
            $http.defaults.headers.common['Authorization'] = 'Basic '
                + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);

        };

        service.ClearCredentials = function() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    } ]);