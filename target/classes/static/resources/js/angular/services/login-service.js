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
	loginAPI.forgotPassword = function(loginData) {
		return $http({
			method : 'POST',
			url : 'user/forgotPassword',
			data : loginData
		});
	};
	return loginAPI;
});

