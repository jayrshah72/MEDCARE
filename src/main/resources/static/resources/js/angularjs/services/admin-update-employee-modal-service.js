var updateEmployee = angular.module('admin-update-employee-modal-service', []);

updateEmployee.factory('UpdateEmployeeAPI', function($http) {

	var updateEmployeeAPI = {};

	updateEmployeeAPI.updateEmoloyeeDetail = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/updateEmployee',
			data : data,
		});
	};
	
	return updateEmployeeAPI;
});
