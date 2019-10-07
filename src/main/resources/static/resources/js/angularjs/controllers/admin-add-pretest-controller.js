/**
 * 
 */
'use strict';

var addPreTestController = angular.module('admin-add-pretest-controller', []);

addPreTestController.controller('addPreTestController', function($scope, $rootScope, $location,toaster,RegistrationAPI){
	$scope.pretest={};
	
	$scope.addPreTest = function($event){
		$event.preventDefault();
		console.log($scope.pretest.name);
		
	RegistrationAPI.addPreTest($scope.pretest).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					$('form#addPreTest').trigger('reset');
					$scope.pretest = {};
					
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
	