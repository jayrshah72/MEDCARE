/**
 * 
 */
'use strict';

var speakingModalController = angular.module('admin-speaking-grading-modal-controller', []);

speakingModalController.controller('speakingGradingModalController', function($scope,$state, $rootScope, $location,toaster,$uibModalInstance,gradingModalContent,PreTestEmployeeDetailAPI,employeeDetails,employeeRecord){
	
	$scope.$state = $state;
	$scope.rubricContent = gradingModalContent;
	$scope.employeeDetails = employeeDetails;
	$scope.employeeRecord = employeeRecord;
	console.log($scope.employeeDetails);
	$scope.grade = employeeRecord.employeeScore;
	
	$scope.radioSelected = function(index,grade){
		$scope.selectedIndex = index;
		$scope.grade = grade;
		}
    $scope.ok = function () {
    
    	PreTestEmployeeDetailAPI.employeeGraded({"employeeId":$scope.employeeDetails.employeeId,"grade":$scope.grade,"preTestId":$scope.employeeDetails.preTestId}).success(function (response) { 
			if(response.status)
			{
				toaster.pop('success', "Admin", response.message);
				console.log(response);
				employeeRecord.employeeScore = $scope.grade;
			}
		else
			{
			toaster.pop('error', "Admin", response.message);
			}
		}).
		error(function(data, status, headers, config) {
			toaster.pop('error', "Admin", "");
		});


      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
	
	})
	