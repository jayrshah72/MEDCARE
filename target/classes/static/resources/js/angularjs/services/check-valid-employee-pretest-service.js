var checkValidEmployeePreTest = angular.module('check-valid-employee-pretest-service', []);

checkValidEmployeePreTest.factory('CheckValidEmployeePreTestAPI', function($http) {

	var checkValidEmployeePreTestAPI = {};

	checkValidEmployeePreTestAPI.checkValidEmployeePreTest = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/checkValidEmployeePreTest',
			data : data,
		});
	};
	
	return checkValidEmployeePreTestAPI;
});
