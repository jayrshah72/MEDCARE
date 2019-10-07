/**
 * 
 */
'use strict';

var editPreTestModalController = angular.module('admin-edit-pretest-modal-controller', []);

editPreTestModalController.controller('editPreTestModalController', function($scope,$state, $rootScope, $location,toaster,$uibModalInstance,content,EditPreTestAPI){
	
	$scope.$state = $state;
	
	$scope.modalPreTestData = content;
	$scope.modalPreTestData.level = $scope.modalPreTestData.level+"";
	console.log($scope.modalPreTestData);
	
	$scope.updatePreTest = function($event) {
		
		$event.preventDefault();
		
		EditPreTestAPI.editPreTest($scope.modalPreTestData).success(function (response) {
			if(response.status)
				{
					toaster.pop('success', "Admin", response.message);
					console.log(response);
					$uibModalInstance.close();
					
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

    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
	
	})
	