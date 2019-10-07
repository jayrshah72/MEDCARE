var editPreTestQuestion = angular.module('admin-speaking-modal-service', []);

editPreTestQuestion.factory('EditPreTestSpeakingQuestionsModalAPI', function($http) {

	var editPreTestspeakingQuestionsModalAPI = {};

	editPreTestspeakingQuestionsModalAPI.updateSpeakingQuestionImage = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/updateSpeakingQuestionImage',
			headers : {
				'Content-Type' : undefined
			},
			data : data,
			transformRequest : angular.identity
			
		});
	};
	
	editPreTestspeakingQuestionsModalAPI.updateSpeakingQuestionDetails = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/updateSpeakingQuestionDetails',
			data : data,
			
		});
	};
	
	return editPreTestspeakingQuestionsModalAPI;
});
