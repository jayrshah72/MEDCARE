var preTestStarted = angular.module('pretest-started-service', []);

preTestStarted.factory('AudioAPI', function($http) {

	var AudioAPI = {};

	AudioAPI.submitAudio = function(audio) {
		return $http({
			method : 'POST',
			url : 'preTestSpeaking/submitAudio',
			headers : {
				'Content-Type' : undefined
			},
			data : audio,
			transformRequest : function(data, headersGetterFunction) {
				return data;
			}
		});
	};
	
	return AudioAPI;
});
