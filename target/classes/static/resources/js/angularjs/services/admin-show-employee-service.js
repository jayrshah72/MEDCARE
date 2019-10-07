var showEmployee = angular.module('admin-show-employee-service', []);

showEmployee.factory('ShowEmployeeListAPI', function($http) {

	var showEmployeeListAPI = {};

	showEmployeeListAPI.showEmoloyee = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/showEmployeeList',
			data : data,
		});
	};
	
	return showEmployeeListAPI;
});
