var resetEmployee = angular.module('admin-reset-employee-service', []);

resetEmployee.factory('ResetEmployeeAPI', function($http) {

	var resetEmployeeAPI = {};

	resetEmployeeAPI.getListOfEmployeePreTest = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/getListOfEmployeePreTest',
			data : data,
		});
	};
	
	resetEmployeeAPI.resetEmployeePreTest = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/resetEmployeePreTest',
			data : data,
		});
	};
	
	return resetEmployeeAPI;
});
