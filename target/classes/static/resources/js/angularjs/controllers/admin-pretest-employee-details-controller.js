/**
 * 
 */
'use strict';

var testDetailController = angular.module('admin-pretest-employee-details-controller', ['ngAudio']);

testDetailController.controller('preTestEmployeeDetailController', function($scope, $rootScope, $location,toaster,ngAudio,$stateParams, $localStorage,PreTestEmployeeDetailAPI,$uibModal){
	
	$scope.employeeDetails = $localStorage.$default({
		employeeId : 'null',
	 });
	$scope.employeeDetails = $localStorage.$default({
		preTestId : 'null',
	 });
	$scope.employeeDetails = $localStorage.$default({
		rubricId : 'null',
	 });
	$scope.Names = $localStorage.$default({
		employeeName : 'null',
	 });
	$scope.Names = $localStorage.$default({
		preTestName : 'null',
	 });
	
	
	$scope.ids = $stateParams.ids;
	$scope.names = $stateParams.names;
	
	if($scope.ids != null)
		{
		$scope.employeeDetails.employeeId = $scope.ids.employeeId;
		$scope.employeeDetails.preTestId = $scope.ids.preTestId;
		$scope.employeeDetails.rubricId = $scope.ids.rubricId;
		$scope.Names.employeeName = $scope.names.employeeName;
		$scope.Names.preTestName = $scope.names.preTestName;
		}
	else
		{
			$scope.ids = $scope.employeeDetails;
			$scope.names = $scope.Names
		}

	console.log($scope.employeeDetails);
	console.log($scope.Names);
	
	PreTestEmployeeDetailAPI.getPreTestEmployeeDetails($scope.ids).success(function (response) { 
					if(response.status)
					{
						toaster.pop('success', "Admin", response.message);
						$scope.employeeResult = response.employeeDetails;
						$scope.employeeRecord = response.employeeRecord;
						$scope.rubric = response.rubric;
						console.log(response);
					}
				else
					{
					toaster.pop('error', "Admin", response.message);
					}
				}).
				error(function(data, status, headers, config) {
					toaster.pop('error', "Admin", "");
				});

	
	$scope.gradingModalContent = {};
    //Create Modal
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'myModalContent.html',
            controller: 'speakingGradingModalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {
            	gradingModalContent: $scope.rubric,
            	employeeDetails : $scope.employeeDetails,
            	employeeRecord : $scope.employeeRecord
                }
        
        });
    }
    
    //Custom Sizes
    $scope.open = function (size) {
    	//$scope.gradingModalContent = data;
        modalInstances(true, size, true, true);
    }
	
})
	