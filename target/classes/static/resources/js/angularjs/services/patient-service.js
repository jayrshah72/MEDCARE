var patientService = angular.module('patient-service',[]);

patientService.factory('PatientAPI', function ($http) {
    var PatientAPI = {};
    PatientAPI.patientPrescriptionList = function(data){
        return $http({
            method : 'POST',
            url : 'patient/patientPrescriptionList',
            data : data
        });
    };
    return PatientAPI;
});
