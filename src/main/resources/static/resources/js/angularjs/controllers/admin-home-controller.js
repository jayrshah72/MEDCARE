/**
 * 
 */
'use strict';

var adminHomeController = angular.module('admin-home-controller', ['ui.router','oc.lazyLoad']);

adminHomeController.controller('adminHomeController', function($scope,$state, $rootScope, $location,toaster,preTestList){
	
	$scope.$state = $state;
	$scope.preTestList = preTestList.preTests;
	console.log($scope.preTestList);
	
	})
	