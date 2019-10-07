var loginController = angular.module('login-controller',[]);
loginController.controller('loginController', function($scope, $rootScope, $location,LoginAPI,$state){
	//$scope.user = {};
	$scope.login = function($event){
		LoginAPI.doLogin($scope.user).success(function(response){
			console.log(response);
			if(response.status){
				if(response.user.type === 'doctor'){
					alert(response.user.type);
					$location.path("/doctor/dashboard");
				}
			}
			else {
			}
		}).error(function(data, status, headers, config){console.log("Error");});
	}
});