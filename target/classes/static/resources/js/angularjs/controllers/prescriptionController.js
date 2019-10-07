var prescriptionController = angular.module('prescription-controller',[]);

prescriptionController.controller('prescriptionController',function($scope, $rootScope, $location,$state,$http, PrescriptionAPI,$uibModal,$stateParams,$cookieStore){

    $scope.meds = [{"medicineId":"","description":""}];
    $rootScope.globals = $cookieStore.get('globals');

    $scope.patient;
    $scope.doctor;

    console.log($stateParams.id + "state p id"+$rootScope.globals);
    console.log($stateParams.patient);

   /* PrescriptionAPI.getPatientById($stateParams.patient.id).success(function (response){
        $scope.patient = response.user;
    }).error(function(data, status, headers, config){console.log("Error");});

    PrescriptionAPI.getDoctorById($stateParams.patient.doctorId).success(function (response){
        $scope.doctor = response.user;
    }).error(function(data, status, headers, config){console.log("Error");});
*/
    $scope.addNewMedicine = function()
    {
        $scope.meds.push({"medicineId":"","description":""});
        $scope.medicines = [];
    }

    $scope.submitPrescription = function()
    {
        for(var i = 0; i < $scope.meds.length; i++)
        {
            $scope.meds[i].medicineId = $scope.meds[i].medicine.id;
        }

        PrescriptionAPI.prescriptionInsertion({"IdDescriptionList":$scope.meds,"patientId":$stateParams.id,"note":$scope.note}).success(function (response){
            console.log(response);
            $state.go('doctordash');
        }).error(function(data, status, headers, config){console.log("Error");});
    }

    if ($('[data-action="print"]')[0]) {
        $('body').on('click', '[data-action="print"]', function(e){
            e.preventDefault();
            var originalContents = document.body.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
        })
    }

    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
        $scope.medicines;
        $http.get('doctor/medicineSuggestion/'+val).then(function(response){
            console.log(response);
            $scope.medicines = response.data.medicines;
        });
        return $scope.medicines;
    }
});