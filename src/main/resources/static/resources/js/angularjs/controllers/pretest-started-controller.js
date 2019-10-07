'use strict';

var preTestStartedController = angular.module('pretest-started-controller', ['angularAudioRecorder']);

preTestStartedController.controller('preTestStartedController', function($scope, $rootScope, $location,toaster,AudioAPI,preTestList){

	console.log(preTestList);
	$scope.preTest = preTestList.preTest;
	$scope.preTestQue = preTestList.preTestQue;
	$scope.timeLimit = preTestList.preTestQue.duration;
	$scope.recordId = preTestList.recordId;
	
	console.log(preTestList);
	$scope.submitAudio =  function()
	{ 
		var formData = new FormData();
		formData.append("audio", $scope.recorded);
		formData.append("lastId", $scope.preTestQue.lastId);
		formData.append("preTestId", $scope.preTest.id);
		formData.append("recordId", $scope.recordId);
		formData.append("questionId", $scope.preTestQue.id);
		
		AudioAPI.submitAudio(formData).success(function (response) {
			if(response.status)
				{  
					toaster.pop('success', "Employee", response.message);
					console.log(response);
					$scope.preTestQue = response.preTestQue;
					$scope.timeLimit = response.preTestQue.duration;
					$rootScope.$emit("startRecord", {});
				}
			else
				{
				toaster.pop('error', "Admin", response.message);
				
				if(response.isCompleted)
					{
					$location.path("/home");
					}
				}
			}).
			error(function(data, status, headers, config) {
				toaster.pop('error', "Admin", response.message);
					
			});
		$('.page-loader').fadeOut();
	}
});

