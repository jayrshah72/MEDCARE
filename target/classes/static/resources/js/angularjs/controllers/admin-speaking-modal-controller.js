/**
 * 
 */
'use strict';

var speakingModalController = angular.module('admin-speaking-modal-controller', []);

speakingModalController.controller('speakingModalController', function($scope,$state, $rootScope, $location,toaster,$uibModalInstance,content,EditPreTestSpeakingQuestionsModalAPI){
	
	$scope.$state = $state;
	
	$scope.modalQuestionData = content;
	
	console.log($scope.modalQuestionData);
	
	$scope.edit = false;

    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      console.log($scope.modalQuestionData);
      $uibModalInstance.dismiss('cancel');
    };
    
    // open hidden input
    $scope.selectFile = function($event) {
    	$('#imageFile').click();
    }
    
    //Update Question Image
    $scope.fileChanged = function() {
    	console.log($scope.modalQuestionData.id);
    	console.log(imageFile.files[0]);
    	var formData = new FormData();
		formData.append("image", imageFile.files[0]);
		formData.append("questionId", $scope.modalQuestionData.id);
		formData.append("duration", $scope.modalQuestionData.duration);
		formData.append("imageDescription", $scope.modalQuestionData.imageDescription);
    	
		EditPreTestSpeakingQuestionsModalAPI.updateSpeakingQuestionImage(formData).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					$scope.modalQuestionData.imageUrl = response.image;
				}
			else
				{
				toaster.pop('error', "Admin", response.message);
				console.log(response);
				}
			}).
			error(function(data, status, headers, config) {
				toaster.pop('error', "Admin", response.message);
					
			});
    	
    }
    
    $scope.updateQuestionDetails = function($event){
    	$event.preventDefault();
    	
    	EditPreTestSpeakingQuestionsModalAPI.updateSpeakingQuestionDetails($scope.modalQuestionData).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					$scope.edit = false;
					
				}
			else
				{
				toaster.pop('error', "Admin", response.message);
				console.log(response);
				}
			}).
			error(function(data, status, headers, config) {
				toaster.pop('error', "Admin", response.message);
					
			});
    }
	
	})
	