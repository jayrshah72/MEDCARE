var doctordashController = angular.module('doctordash-controller',[]);


doctordashController.controller('doctordashController', function($scope, $rootScope, $location,$state,doctordashAPI,$uibModal){
    $scope.count = {};
    $scope.patientList = {};
    $scope.patientId;

    doctordashAPI.getCount().success(function(response){
        console.log(response);
        if(response.status){
            $scope.count.opdCount = response.opdCount;
            $scope.count.admitCount = response.admitCount;
        }
        else{
        }
    }).error(function(data, status, headers, config){console.log("Error");});

    $scope.getOpdPatients= function () {
        doctordashAPI.getOpdList().success(function(response){
            console.log(response);
            if(response.status){
                $scope.patientList = response.patientOpdList;
                $scope.listname=response.listname;
            }
            else{}
        }).error(function(data, status, headers, config){console.log("Error");});
    },

    $scope.getAdmittedPatients= function () {
        doctordashAPI.getAdmittedList().success(function(response){
            console.log("Admitted: " + response);
            if(response.status){
                $scope.patientList = response.patientAdmittedList;
                $scope.listname=response.listname;
            }
            else{}
        }).error(function(data, status, headers, config){console.log("Error");});
    },

    $scope.gradingModalContent = {};
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'editPatient.html',
            controller: 'popUpController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {patientId : $scope.patientId}
        });
    }

    $scope.open = function (size, id) {
        $scope.patientId = id;
        modalInstances(true, size, true, true);
    }

});