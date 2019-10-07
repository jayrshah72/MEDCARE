var medicineAdminController = angular.module('medicine-admin-controller',[]);

medicineAdminController.controller('medicineAdminController', function($scope, $rootScope, $location,$state,$http,medicineAdminAPI,$uibModal,$stateParams,$cookieStore){

    $scope.medicines;
    $scope.medicine = {};

        medicineAdminAPI.getMedicineList()
                .success(function(response){
                    $scope.medicines = response;
                })
                .error(function(data, status, headers, config){
                    console.log("Error");
                });

        $scope.removeMedicine = function(id, $index){
            medicineAdminAPI.removeMedicine(id)
                    .success(function(response){
                        $scope.medicines.splice($index,1);
                    })
                    .error(function(data, status, headers, config){
                        console.log("Error");
                    });
        }

        $scope.insertMed = function($event){
                $event.preventDefault();
                medicineAdminAPI.addNewMedicine($scope.medicine)
                    .success(function(response){
                        if(response.status){
                            toaster.pop('success', "Inserted Successfully..!!", response.message);
                        }
                    })
                    .error(function(data, status, headers, config){
                        console.log("Error");
                    });
        }

        $scope.open = function (id, $index) {
            medicineAdminAPI.removeMedicine(id)
            .success(function(response){
                 $scope.medicines.splice($index,1);
               })
               .error(function(data, status, headers, config){
                   console.log("Error");
               });
        }
});