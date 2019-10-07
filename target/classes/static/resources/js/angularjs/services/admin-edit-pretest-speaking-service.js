var editPreTest = angular.module('admin-edit-pretest-speaking-service', []);

editPreTest.factory('EditPreTestSpeakingQuestionsAPI', function($http) {

	var editPreTestspeakingQuestionsAPI = {};

	editPreTestspeakingQuestionsAPI.preTestQuestionList = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/editPreTestSpeakingQuestion',
			
			data : data,
			
		});
	};
	
	editPreTestspeakingQuestionsAPI.addQuestionToPreTestSpeaking = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/addQuestionToPreTestSpeaking',
			data : data,
			
		});
	};
	
	editPreTestspeakingQuestionsAPI.removeQuestionFromPreTestSpeaking = function(data) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/removeQuestionFromPreTestSpeaking',
			data : data,
			
		});
	};
	
	return editPreTestspeakingQuestionsAPI;
});
