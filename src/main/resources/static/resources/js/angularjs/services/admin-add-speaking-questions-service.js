var preTestList = angular.module('admin-add-speaking-questions-service', []);

preTestList.factory('SpeakingQuestionsAPI', function($http) {

	var speakingQuestionsAPI = {};

	speakingQuestionsAPI.addQuestion = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/addQuestion',
			headers : {
				'Content-Type' : undefined
			},
			data : data,
			transformRequest : function(data, headersGetterFunction) {
				return data;
			}
		});
	};
	return speakingQuestionsAPI;
});
