/**
 * 
 */
'use strict';

var editPreTestController = angular.module('admin-edit-pretest-controller', ['ui.router','oc.lazyLoad']);

editPreTestController.controller('editPreTestController', function($scope,$state, $rootScope, $location,toaster,$uibModal,preTestList){
	
	$scope.$state = $state;
	$scope.preTestList = preTestList.preTests;
	console.log($scope.preTestList);
	
	//Create Modal For Edit PreTest
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'editPreTestModal.html',
            controller: 'editPreTestModalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {
                content: function () {
                	console.log($scope.modalPreTestData);
                    return $scope.modalPreTestData;
                }
            }
        
        });
    }
    
    //Custom Sizes Modal For Edit PreTest
    $scope.open = function (preTestData,size) {
    	$scope.modalPreTestData = preTestData;
        modalInstances(true, size, true, true)
    }
    
    
  //Modal For Add New PreTest
    $scope.openForAddPreTest = function (size) {
        modalInstancesForAddPreTest(true, size, true, true)
    }
    
  //Create Modal For Add New PreTest
    function modalInstancesForAddPreTest(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'addPreTestModal.html',
            controller: 'addPreTestModalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {
                content: function () {
                	console.log($scope.preTestList);
                    return $scope.preTestList;
                }
            }
            
        });
    }
    
	
	})
	