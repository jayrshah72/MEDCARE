/**
 * 
 */
'use strict';

var updateEmployeeController = angular.module('admin-update-employee-modal-controller', []);

updateEmployeeController.controller('updateEmployeeController', function($scope,$state, $rootScope, $location,toaster,$uibModalInstance,content,UpdateEmployeeAPI){
	
	$scope.$state = $state;
	$scope.employee = content;
	$scope.employee.contact = parseInt($scope.employee.contact , 10);
	console.log($scope.employee);

    $scope.updateEmployeeDetail = function ($event) {
    	$event.preventDefault();
		
    	UpdateEmployeeAPI.updateEmoloyeeDetail($scope.employee).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					
				}
			else
				{
				
				toaster.pop('error', "Admin", response.message);
				
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
	