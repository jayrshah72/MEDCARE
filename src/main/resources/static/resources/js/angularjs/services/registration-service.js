/**
 * 
 */
var registrationService = angular.module('registration-service', []);

registrationService.factory('RegistrationAPI', function($http) {

	var registrationAPI = {};

	registrationAPI.addPreTest = function(addPreTestData) {
		return $http({
			method : 'POST',
			url : 'preTest/addPreTest',
			data : addPreTestData
		});
	};
	

	return registrationAPI;
});