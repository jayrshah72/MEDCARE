var addEmployee = angular.module('admin-add-employee-service', []);

addEmployee.factory('AddEmployeeAPI', function($http) {

	var AddEmployeeAPI = {};

	AddEmployeeAPI.addEmoloyee = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/addEmployee',
			data : data,
		});
	};
	
	return AddEmployeeAPI;
});
