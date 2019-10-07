var assignpreTest = angular.module('admin-assign-pretest-service', []);

assignpreTest.factory('AssignPreTestAPI', function($http) {

	var AssignPreTestAPI = {};

	AssignPreTestAPI.getEmployeeList = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/getEmployeeList',
			data : data,
		});
	};
	
	AssignPreTestAPI.getNotEmployeePreTestList = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/getNotEmployeePreTestList',
			data : data,
		});
	};
	
	AssignPreTestAPI.assignPreTest = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/assignPreTest',
			data : data,
		});
	};
	
	return AssignPreTestAPI;
});
