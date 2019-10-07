var doctordashController = angular.module('doctordash-controller',[]);


doctordashController.controller('doctordashController', function($scope, $rootScope, $location,$state,doctordashAPI){
        $scope.count = {};
        $scope.patienList = {};
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
            alert("AAi gayu");
            doctordashAPI.getOpdList().success(function(response){
                console.log(response);
                if(response.status){
                    $scope.patienList = response.patientOpdList;
                    $scope.listname=response.listname;
                }
                else{
                }
            }).error(function(data, status, headers, config){console.log("Error");});
    },

    $scope.getAdmittedPatients= function () {
        alert("Admitted");
        doctordashAPI.getAdmittedList().success(function(response){
            console.log(response);
            if(response.status){
                $scope.patienList = response.patientAdmittedList;
                $scope.listname=response.listname;
            }
            else{
            }
        }).error(function(data, status, headers, config){console.log("Error");});
    }

    $scope.gradingModalContent = {};
    //Create Modal
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'editPatient.html',
            controller: 'popUp-Controller',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {}

        });
    }

    $scope.open = function (size) {
        //$scope.gradingModalContent = data;
        modalInstances(true, size, true, true);
    }
});