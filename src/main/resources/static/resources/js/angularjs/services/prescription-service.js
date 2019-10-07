var prescriptionService = angular.module('prescription-service',[]);

prescriptionService.factory('PrescriptionAPI', function ($http) {
    var PrescriptionAPI = {};
    PrescriptionAPI.prescriptionInsertion = function(data){
        return $http({
            method : 'POST',
            url : 'doctor/prescriptionInsertion',
            data : data
        });
    };

    PrescriptionAPI.getPatientById = function(id) {
        return $http({
            method : 'GET',
            url : 'doctor/getUserById/' + id,
        });
    };

    PrescriptionAPI.getDoctorById = function(id) {
        return $http({
            method : 'GET',
            url : 'doctor/getUserById/' + id,
        });
    };

    return PrescriptionAPI;
});