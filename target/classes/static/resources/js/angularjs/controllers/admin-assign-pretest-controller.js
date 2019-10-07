/**
 * 
 */
'use strict';

var assignPreTestController = angular.module('admin-assign-pretest-controller', []);

assignPreTestController.controller('assignPreTestController', function($scope,$state, $rootScope, $location,toaster,AssignPreTestAPI){
	$scope.$state = $state;
	$scope.employeeList = {};
	$scope.notEmployeePreTestList = {};
	$scope.assign = {};
	
	AssignPreTestAPI.getEmployeeList().success(function (response) {
		if(response.status)
			{
				toaster.pop('success', "Admin", response.message);
				console.log(response);
				$scope.employeeList = response.employeeList;		
			}
		else
			{
			toaster.pop('error', "Admin", response.message);
			
			}
		}).
		error(function(data, status, headers, config) {
			toaster.pop('error', "Admin", response.message);
				
		});
	
	$scope.callPreTest = function() {
		
		console.log($scope.assign.employeeId);
		
		if($scope.assign.employeeId) {
			
			AssignPreTestAPI.getNotEmployeePreTestList({'employeeId' : $scope.assign.employeeId}).success(function (response) {
				if(response.status)
					{
						toaster.pop('success', "Admin", response.message);
						console.log(response);
						$scope.notEmployeePreTestList = response.notEmployeePreTestList;
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
	
	}
	
	$scope.assignPreTest = function($event) {
		
		$event.preventDefault();
		console.log($scope.assign);
		console.log($scope.assign.employeeId);
		console.log($scope.assign.preTestId);
		
		if($scope.assign.employeeId!=null && $scope.assign.preTestId!=null) {
			
			AssignPreTestAPI.assignPreTest($scope.assign).success(function (response) {
				if(response.status)
					{
						toaster.pop('success', "Admin", response.message);
						console.log(response);
						$scope.assign = {};
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
		
		else if(!$scope.assign.preTestId) {
			toaster.pop('error', "Admin", "Please Select PreTest");
		}
		
		else {
			toaster.pop('error', "Admin", "Please Select Employee");
		}
	}
	
	})
	