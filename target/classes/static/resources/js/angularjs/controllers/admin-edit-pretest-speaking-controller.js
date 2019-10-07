/**
 * 
 */
'use strict';

var editPreTestController = angular.module('admin-edit-pretest-speaking-controller', ['ui.router','oc.lazyLoad','dndLists']);

editPreTestController.controller('editPreTestSpeakingController', function($scope,$state, $rootScope, $location,toaster,$localStorage,$uibModal,$stateParams,EditPreTestSpeakingQuestionsAPI,$filter){
	
	$scope.$state = $state;
	
	 
	if($stateParams.preTestId!=null) {
		
		$scope.preTestId = $stateParams.preTestId;
		$scope.preTestName = $stateParams.preTestName;
		$localStorage.preTest_Id = $scope.preTestId;
		$localStorage.preTest_Name = $scope.preTestName;
		console.log($scope.preTestId);
		console.log($scope.preTestName);
	}
	
	else {
		
		$scope.preTestId = $localStorage.preTest_Id;
		$scope.preTestId = $localStorage.preTest_Name;
		console.log($scope.preTestId);
		console.log($scope.preTestName);
	}
	
	$scope.modalQuestionData = {};
	EditPreTestSpeakingQuestionsAPI.preTestQuestionList({"preTestId" : $scope.preTestId}).success(function (response) {
		if(response.status)
			{
				toaster.pop('success', "Admin", response.message);
				console.log(response);
				$scope.speakingQuestions = response.preTestSpeakingQuestions;
				
				
				
				$scope.models = {
				        selected: null,
				        lists: {"Question": [], "PreTest": []}
				    };
					
				if($scope.speakingQuestions.questions!=null) {
				    // Generate initial model
				    for (var i = 0; i < $scope.speakingQuestions.questions.length; ++i) {
				        $scope.models.lists.Question.push($scope.speakingQuestions.questions[i]);
				    }
				}
				
				if($scope.speakingQuestions.questionsSelected!=null) {
					
				    for (var i = 0; i < $scope.speakingQuestions.questionsSelected.length; ++i) {
				        $scope.models.lists.PreTest.push($scope.speakingQuestions.questionsSelected[i]);
				    }
				}

				    // Model to JSON for demo purpose
				    $scope.$watch('models', function(model) {
				        $scope.modelAsJson = angular.toJson(model, true);
				    }, true);
				    
				
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
	
	
    //Create Modal
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'editQuestionDetailModal.html',
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
    
    //Custom Sizes
    $scope.open = function (questionData,size) {
    	$scope.modalQuestionData = questionData;
        modalInstances(true, size, 'static', true)
    }
	
	$scope.questionAdded = function(list,index,questionData) {
		var i = $scope.models.lists.PreTest.map(function(e) { return e.id; }).indexOf(questionData.id);
		list.splice(index, 1);
		$scope.models.lists.PreTest.splice(i, 1);
		console.log(questionData);
		EditPreTestSpeakingQuestionsAPI.addQuestionToPreTestSpeaking({"preTestId" : $scope.preTestId,"questionId" : questionData.id}).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					questionData.lastId = response.id;
					console.log(questionData);
					console.log($scope.models.lists.PreTest);
					$scope.models.lists.PreTest.splice(i,0,questionData);
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
	
	$scope.questionRemoved = function(list,index,questionData) {
		
		list.splice(index, 1);
		console.log(questionData);
		
		EditPreTestSpeakingQuestionsAPI.removeQuestionFromPreTestSpeaking({"lastId" : questionData.lastId}).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					
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
	