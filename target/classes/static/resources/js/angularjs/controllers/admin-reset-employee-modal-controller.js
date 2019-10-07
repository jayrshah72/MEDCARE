/**
 * 
 */
'use strict';

var resetEmployeeModalController = angular.module('admin-reset-employee-modal-controller', []);

resetEmployeeModalController.controller('resetEmployeeModalController', function($scope, $rootScope, $location,toaster,$uibModalInstance,content,ResetEmployeeAPI){
	
	$scope.employeeData = content;
	$scope.resetPreTestId = "";
	
		
	ResetEmployeeAPI.getListOfEmployeePreTest($scope.employeeData).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					$scope.employeePreTestList = response.listOfEmployeePreTest;
					console.log($scope.employeePreTestList);
					console.log($scope.employeePreTestList.length);
				}
			else
				{
				toaster.pop('error', "Admin", response.message);
				
				}
			}).
			error(function(data, status, headers, config) {
				toaster.pop('error', "Admin", response.message);
					
			});
	
	
	$scope.resetEmployeePreTest = function() {
		
		console.log($scope.resetPreTestId);
		
		if($scope.resetPreTestId){
			
			ResetEmployeeAPI.resetEmployeePreTest({'preTestId' : $scope.resetPreTestId,'employeeId' : $scope.employeeData.id}).success(function (response) {
				if(response.status)
					{
						toaster.pop('success', "Admin", response.message);
						console.log(response);
						$uibModalInstance.close();
					}
				else
					{
					toaster.pop('error', "Admin", response.message);
					
					}
				}).
				error(function(data, status, headers, config) {
					toaster.pop('error', "Admin", response.message);
						
				});
			
		}
		
		else {
			
			toaster.pop('error', "Admin", "Pleae Select PreTest...");
		}
	}
		
	
	
	$scope.cancel = function () {
	      $uibModalInstance.dismiss('cancel');
	    };
	
	})
	