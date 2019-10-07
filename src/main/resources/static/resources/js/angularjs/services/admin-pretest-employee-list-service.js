var preTestList = angular.module('admin-pretest-employee-list-service', []);

preTestList.factory('PreTestListAPI', function($http) {

	var PreTestListAPI = {};

	PreTestListAPI.getPreTestEmployeeList = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/getPreTestEmployeeList',
			data : data,
		});
	};
	return PreTestListAPI;
});
