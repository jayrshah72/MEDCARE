/*
var registerController = angular.module('register-controller',[]);
registerController.controller('registerController', function($scope, $rootScope, $location,RegisterAPI,$state){
    $scope.register = function($event){
        RegisterAPI.doRegister($scope.user).success(function(response){
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
});*/
