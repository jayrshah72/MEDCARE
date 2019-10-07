var preTestList = angular.module('admin-pretest-employee-details-service', []);

preTestList.factory('PreTestEmployeeDetailAPI', function($http) {

	var PreTestEmployeeListAPI = {};

	PreTestEmployeeListAPI.getPreTestEmployeeDetails = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/getPreTestEmployeeDetails',
			data : data,
		});
	};
	PreTestEmployeeListAPI.employeeGraded = function(data) {
		return $http({
			method : 'POST',
			url : 'preTest/employeeGraded',
			data : data,
		});
	};
	PreTestEmployeeListAPI.updateSpeakingQuestionImage = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/updateSpeakingQuestionImage',
			headers : {
				'Content-Type' : undefined
			},
			data : data,
			transformRequest : function(data, headersGetterFunction) {
				return data;
			}
		});
	};
	PreTestEmployeeListAPI.updateSpeakingQuestionDetails = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/updateSpeakingQuestionDetails',
			data : data,
		});
	};
	return PreTestEmployeeListAPI;
});
