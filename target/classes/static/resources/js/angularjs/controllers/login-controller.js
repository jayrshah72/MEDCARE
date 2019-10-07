var loginController = angular.module('login-controller', ['ui.router','oc.lazyLoad']);

loginController.controller('loginController', function($scope, $rootScope, $location,LoginAPI,toaster,$state,AuthenticationService,$cookieStore){
    $scope.switch = true;
    $scope.user={};
    $scope.patient={};
    $scope.login = function($event){
        $event.preventDefault();
            LoginAPI.doLogin($scope.user).success(function (response) {
                if(response.status=="true"){
                    toaster.pop('success', "Login", response.message);
                    if(response.user.type=="doctor"){
                        AuthenticationService.SetCredentials($scope.user.phno, $scope.user.password,response.user.type,response.user.id);
                        $state.go("doctordash");
                        $rootScope.currentPage = "/doctor/dashboard";
                    }
                    else if(response.user.type=="patient"){
                        AuthenticationService.SetCredentials($scope.user.phno, $scope.user.password,response.user.type,response.user.id);
                        $rootScope.adminDetails = response;
                        $state.go("patient");
                        $rootScope.currentPage = "/patient/dashboard";
                    }
                    else if(response.user.type=="admin"){
                        AuthenticationService.SetCredentials($scope.user.phno, $scope.user.password,response.user.type,response.user.id);
                        $rootScope.adminDetails = response;
                        $state.go("admin");
                        $rootScope.currentPage = "/admin/dashboard";
                    }
                }
                else{
                    toaster.pop('failure', "Login Again", response.message);
                }
            }).
            error(function(data, status, headers, config) {
                toaster.pop('error', "History", "There is some error to save basic info..!!");
            });
        },

        $scope.clickswitch = function ($event) {
            $scope.switch = !$scope.switch;
        },

        $scope.register = function($event){
            $event.preventDefault();
            LoginAPI.doRegister($scope.patient).success(function (response) {
                if(response.status){
                    toaster.pop('success', "Registered Successfully..!!", response.message);
                    $scope.switch = true;
                }
                else{
                    toaster.pop('failure', "Patient Already Exists..!!", response.message);
                }
            }).
            error(function(data, status, headers, config) {
                toaster.pop('error', "History", "There is some error to save basic info..!!");
            });
        }
});