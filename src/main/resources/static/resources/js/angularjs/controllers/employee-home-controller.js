var homeController = angular.module('employee-home-controller', []);


homeController.controller('homeController', function($scope,$state, $rootScope, $location,toaster,preTestList,CheckValidEmployeePreTestAPI){
	$scope.$state = $state;
	$scope.preTestList = preTestList.preTests;
	console.log($scope.preTestList);
	$scope.param = {};
	
	$scope.check = function(preTest) {
		
		CheckValidEmployeePreTestAPI.checkValidEmployeePreTest({"preTestId":preTest.pretestId,"employeeId":preTest.employeeId}).success(function (response) {
			if(response.status)
				{
					if(response.goAhed) {
						
						$state.go(preTest.type, { 'preTest': preTest});
						
					}
					
					else {
						
						toaster.pop('success', "Admin", response.message);
					}
					
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
