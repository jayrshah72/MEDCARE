var patientAdminController = angular.module('patient-admin-controller',[]);

patientAdminController.controller('patientAdminController', function($scope, $rootScope, $location,$state,$http,patientAdminAPI,$uibModal,$stateParams,$cookieStore){

    $scope.patients;

    patientAdminAPI.getPatientList()
        .success(function(response){
              $scope.patients = response;
              console.log(response);
          })
          .error(function(data, status, headers, config){
              console.log("Error");
          });

    $scope.open = function (id, $index) {
        patientAdminAPI.removePatient(id)
        .success(function(response){
             $scope.patients.splice($index,1);
           })
           .error(function(data, status, headers, config){
               console.log("Error");
           });
    }
});