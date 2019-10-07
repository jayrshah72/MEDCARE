/**
 * 
 */
'use strict';

var addPreTestModalController = angular.module('admin-add-pretest-modal-controller', []);

addPreTestModalController.controller('addPreTestModalController', function($scope, $rootScope, $location,toaster,$uibModalInstance,content,RegistrationAPI){
	$scope.pretest={};
	$scope.newPreTest = content;
	$scope.addPreTest = function($event){
		$event.preventDefault();
		console.log($scope.pretest.name);
		
	RegistrationAPI.addPreTest($scope.pretest).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					$('form#addPreTest').trigger('reset');
					$scope.pretest = {};
					$scope.newPreTest.push(response.preTest);
					console.log($scope.newPreTest);
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
	
	$scope.cancel = function () {
	      $uibModalInstance.dismiss('cancel');
	    };
	
	})
	