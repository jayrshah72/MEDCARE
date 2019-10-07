var patientController = angular.module('patient-controller',[]);

patientController.controller('patientController', function($scope, $rootScope, $location,$state,$http, PrescriptionAPI, PatientAPI,$uibModal,$stateParams,$cookieStore){
    $rootScope.globals = $cookieStore.get('globals');

    $scope.patientPrescriptions;
    $scope.patient;
    $scope.prescriptionId;
    $scope.index;

    PatientAPI.patientPrescriptionList({"patientId":$rootScope.globals.currentUser.id}).success(function(response){
        if(response.status){
            $scope.patientPrescriptions = response.prescriptionList;
        }
        else{
        }
    }).error(function(data, status, headers, config){console.log("Error");});

    PrescriptionAPI.getPatientById($rootScope.globals.currentUser.id).success(function(response){
        $scope.patient = response.user;
    }).error(function(data, status, headers, config){console.log("Error");});

    $scope.gradingModalContent = {};
    function modalInstances(animation, size, backdrop, keyboard) {
        var modalInstance = $uibModal.open({
            animation: animation,
            templateUrl: 'showPrescription.html',
            controller: 'modalController',
            size: size,
            backdrop: backdrop,
            keyboard: keyboard,
            resolve: {prescriptionId : $scope.prescriptionId,index : $scope.index}
        });
    }

    $scope.open = function (size, id,index) {
        $scope.prescriptionId = id;
        $scope.index = index;
        modalInstances(true, size, true, true);
    }
});
