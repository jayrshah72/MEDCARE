var modalController = angular.module('modal-controller',[]);

modalController.controller('modalController',function ($scope,$rootScope,$location,$state,$http,$uibModal,$stateParams,$cookieStore,prescriptionId,ModalAPI,index) {

    $rootScope.globals = $cookieStore.get('globals');
    //Prescribed:
    $scope.prescriptionList;
    $scope.prescriptions;
    $scope.note;

    console.log("dssdsd" + index);
    //Generic:
    $scope.genericPrescriptionList;

    ModalAPI.prescriptionDetails({"patientId":$rootScope.globals.currentUser.id}).success(function(response){
        if(response.status){
            $scope.prescriptionList = response.prescriptionList;
            $scope.activeTab = $scope.prescriptionList[index].id;
            $scope.prescriptions = $scope.prescriptionList[index].pmmList;
            $scope.note = $scope.prescriptionList[index].note;
            console.log($scope.prescriptionList);
        }
        else{
        }
    }).error(function(data, status, headers, config){console.log("Error");});

    ModalAPI.genericPrescription({"prescriptionId":prescriptionId}).success(function(response){
        if(response.status){
            $scope.genericPrescriptionList = response.genericPrescriptionsList;
            console.log($scope.genericPrescriptionList);
        }
        else{
        }
    }).error(function(data, status, headers, config){console.log("Error");});

});