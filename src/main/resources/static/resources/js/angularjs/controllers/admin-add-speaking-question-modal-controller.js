/**
 * 
 */
'use strict';

var editPreTestModalController = angular.module('admin-add-speaking-question-modal-controller', []);

editPreTestModalController.controller('addSpeakingQuestionModalController', function($scope,$state, $rootScope, $location,toaster,$uibModalInstance,content,SpeakingQuestionsAPI){
	
	$scope.$state = $state;
	$scope.alreadyQuestion = content;

    $scope.ok = function ($event) {
    	$event.preventDefault();
		var formData = new FormData();
		formData.append("description", $scope.question.description);
		formData.append("duration", $scope.question.duration);
		formData.append("image", image.files[0]);
		
		SpeakingQuestionsAPI.addQuestion(formData).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Employee", response.message);
					console.log(response);
					console.log(response.submitedQuestionData);
					$scope.question = {};
					$scope.alreadyQuestion.ques.push(response.submitedQuestionData);
					
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
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
	
	})
	