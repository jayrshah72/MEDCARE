var popUpController = angular.module('popUp-Controller',[]);

popUpController.controller('popUpController',function ($scope, $rootScope, $location, $state, $uibModal,patientId,PopupAPI) {

    $scope.prescriptionList;
    $scope.prescriptions;
    $scope.note;

    PopupAPI.prescriptionDetails({"patientId":patientId}).success(function(response){
        if(response.status){
            $scope.prescriptionList = response.prescriptionList;
            $scope.activeTab = $scope.prescriptionList[0].id;
            $scope.prescriptions = $scope.prescriptionList[0].pmmList;
            $scope.note =$scope.prescriptionList[0].note;
            console.log($scope.prescriptionList);
        }
        else{
        }
    }).error(function(data, status, headers, config){console.log("Error");});

    $scope.selectTab = function(value){
        $scope.activeTab = value;
        $scope.noteIndex = value;
        $scope.prescriptions = $scope.prescriptionList.filter(function(item) {
            return item.id === value;
        })[0].pmmList;
        $scope.note = $scope.prescriptionList.filter(function(item) {
            return item.id === value;
        })[0].note;

        console.log($scope.prescriptions.pmmList);
    }

});