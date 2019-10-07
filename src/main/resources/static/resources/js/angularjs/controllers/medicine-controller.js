var medicineController = angular.module('medicine-controller',[]);

medicineController.controller('medicineController', function($scope, $rootScope, $location,$state,$http,medicineAPI,$uibModal,$stateParams,$cookieStore){

    $scope.medicines;

    $scope.getMedicineList = function(){
        adminAPI.getMedicineList()
                .success(function(response){
                    $scope.medicines = response;
                    console.log(response);
                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });
    }

    $scope.removeMedicine = function(){
        medicineAPI.removeMedicine()
                .success(function(response){

                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });
    }

    $scope.addNewMedicine = function(){
        medicineAPI.addNewMedicine()
                .success(function(response){
                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });
    }


});