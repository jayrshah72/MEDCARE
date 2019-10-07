/**
 * 
 */
'use strict';

var addSpeakingQuesController = angular.module('admin-add-speaking-questions-controller', []);

addSpeakingQuesController.controller('addSpeakingQuestionsController', function($scope, $rootScope, $location,toaster,SpeakingQuestionsAPI,$uibModal,preTestSpeakingQuestionList){
	$scope.question = {};
	$scope.preTestSpeakingQuestionList = preTestSpeakingQuestionList;
	console.log(preTestSpeakingQuestionList);
	$scope.addQuestion =  function($event)
	{ 
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
					$scope.question = {};
					
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
	}
	
	//$scope.addSpeakingQuestionModalContent = {};
    //Create Modal
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'addSpeakingQuestionModal.html',
            controller: 'addSpeakingQuestionModalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {
                content: function () {
                    return $scope.preTestSpeakingQuestionList;
                }
            }
        });
    }
    
    //Custom Sizes
    $scope.open = function (size) {
    	//$scope.gradingModalContent = data;
        modalInstances(true, size, true, true);
    }
    
  //Open Modal For Edit
    $scope.openModalForEdit = function (questionData,size) {
    	$scope.modalQuestionData = questionData;
        modalInstancesForEdit(true, size, 'static', true);
    }
    
  //Create Modal For Edit
    function modalInstancesForEdit(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
        	animation: animation,
            templateUrl: 'editSpeakingQuestionModal.html',
            controller: 'speakingModalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {
                content: function () {
                	console.log($scope.modalQuestionData);
                    return $scope.modalQuestionData;
                }
            }
           
        });
    }
    

})
	