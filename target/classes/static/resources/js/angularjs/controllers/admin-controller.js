var adminController = angular.module('admin-controller',[]);

adminController.controller('adminController', function($scope, $rootScope, $location,$state,$http,adminAPI,$uibModal,$stateParams,$cookieStore){

    $scope.patients;
    $scope.staff;
    $scope.medicines;

    $scope.getPatientList = function(){
        adminAPI.getPatientList()
                .success(function(response){
                    $scope.patients = response;
                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });

    }

    $scope.getStaffList = function() {
        adminAPI.getStaffList()
                .success(function(response){
                    $scope.staff = response;
                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });

    }

    adminAPI.getMedicineList()
        .success(function(response){
            $scope.medicines = response;
            $scope.getPatientList();
            $scope.getStaffList();
        })
        .error(function(data, status, headers, config){
            console.log("Error");
        });
});