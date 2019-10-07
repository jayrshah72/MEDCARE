'use strict';

var testInstructionController = angular.module('pretest-speaking-controller', []);

testInstructionController.controller('preTestSpeakingController', function($scope, $rootScope, $location,toaster,$stateParams, $localStorage){

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
	else
		{
		$scope.preTest = $scope.preTestLocal;
		}
	
	console.log($scope.preTestLocal);
});

