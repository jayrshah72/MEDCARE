/**
 * 
 */
'use strict';

var testListController = angular.module('admin-pretest-employee-list-controller', []);

testListController.controller('preTestEmployeeListController', function($scope, $rootScope, $location,toaster,$stateParams, $localStorage,PreTestListAPI){
	
	$scope.preTestLocal = $localStorage.$default({
		name : 'null',
	 });
	$scope.preTestLocal = $localStorage.$default({
		instruction : 'null',
	 });
	$scope.preTestLocal = $localStorage.$default({
		id : 'null',
	 });
	$scope.preTest = $stateParams.preTest;
	if($scope.preTest != null)
		{
			$scope.preTestLocal.id = $scope.preTest.id;
			$scope.preTestLocal.name = $scope.preTest.name;
			$scope.preTestLocal.instruction = $scope.preTest.instruction;
		}
	else {
			$scope.preTest = $scope.preTestLocal;
		}
		//get employee list
	       PreTestListAPI.getPreTestEmployeeList({"preTestId":$scope.preTest.id}).success(function (response) { 
				if(response.status)
				{
					console.log(response);
					toaster.pop('success', "Admin", response.message);
					$scope.preTestEmployees = response.preTests;
					console.log($scope.preTestEmployees);
				}
			else
				{
					toaster.pop('error', "Admin", response.message);
				}
			}).
			error(function(data, status, headers, config) {
				toaster.pop('error', "Admin", "");
					
			});
	
})
