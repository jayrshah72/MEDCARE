/**
 * 
 */
'use strict';

var addEmployeeController = angular.module('admin-add-employee-controller', []);

addEmployeeController.controller('addEmployeeController', function($scope,$state, $rootScope, $location,toaster,AddEmployeeAPI){
	$scope.$state = $state;
	$scope.employee = {};
	$scope.addEmployee = function($event){
		
		$event.preventDefault();
		console.log($scope.employee);
		
		AddEmployeeAPI.addEmoloyee($scope.employee).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					$('form#addEmployee').trigger('reset');
					$scope.employee = {};
					
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
	