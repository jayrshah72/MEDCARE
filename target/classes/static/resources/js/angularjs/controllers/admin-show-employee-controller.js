/**
 * 
 */
'use strict';

var showEmployeeController = angular.module('admin-show-employee-controller', []);

showEmployeeController.controller('showEmployeeController', function($scope,$state, $rootScope, $location,toaster,$uibModal,ShowEmployeeListAPI,DeleteEmployeeAPI){
	$scope.$state = $state;
	
		
		ShowEmployeeListAPI.showEmoloyee().success(function (response) {
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
		
	    
	  //Create Modal For Update Employee Detail
	    function modalInstances(animation, size, backdrop, keyboard) {
	        var modalInstance = $uibModal.open({
	        	animation: animation,
	            templateUrl: 'myModalContent.html',
	            controller: 'updateEmployeeController',
	            size: size,
	            backdrop: backdrop,
	            keyboard: keyboard,
	            resolve: {
	                content: function () {
	                	console.log($scope.modalEmployeeData);
	                    return $scope.modalEmployeeData;
	                }
	            }
	           
	        });
	    }
	    
	  //Open Modal For Update Employee Detail
	    $scope.open = function (employeeData,size) {
	    	$scope.modalEmployeeData = employeeData;
	        modalInstances(true, size, 'static', true);
	    }
	    
	  //Open Modal For Reset Employee PreTest
	    $scope.openResetModal = function (employeeData,size) {
	    	$scope.modalResetEmployeeData = employeeData;
	        modalInstancesForReset(true, size, 'static', true);
	    }
	    
	  //Create Modal For Reset Employee PreTest
	    function modalInstancesForReset(animation, size, backdrop, keyboard) {
	        var modalInstance = $uibModal.open({
	        	animation: animation,
	            templateUrl: 'modalForReset.html',
	            controller: 'resetEmployeeModalController',
	            size: size,
	            backdrop: backdrop,
	            keyboard: keyboard,
	            resolve: {
	                content: function () {
	                	console.log($scope.modalResetEmployeeData);
	                    return $scope.modalResetEmployeeData;
	                }
	            }
	           
	        });
	    }
	    
	    $scope.deleteUser = function($event,employee,index) {
	    	
	    	DeleteEmployeeAPI.deleteEmoloyee(employee).success(function (response) {
				if(response.status)
					{
						toaster.pop('success', "Admin", response.message);
						console.log(response);
						$scope.employeeList.splice(index,1);
						
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
	
	})
	