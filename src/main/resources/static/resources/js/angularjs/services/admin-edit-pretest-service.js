var editPreTest = angular.module('admin-edit-pretest-service', []);

editPreTest.factory('EditPreTestAPI', function($http) {

	var editPreTestAPI = {};

	editPreTestAPI.editPreTest = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/editPreTest',
			data : data,
			
		});
	};
	
	return editPreTestAPI;
});
