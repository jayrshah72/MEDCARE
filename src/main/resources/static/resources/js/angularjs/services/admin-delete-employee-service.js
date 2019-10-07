var deleteEmployee = angular.module('admin-delete-employee-service', []);

deleteEmployee.factory('DeleteEmployeeAPI', function($http) {

	var deleteEmployeeAPI = {};

	deleteEmployeeAPI.deleteEmoloyee = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/deleteEmployee',
			data : data,
		});
	};
	
	return deleteEmployeeAPI;
});
