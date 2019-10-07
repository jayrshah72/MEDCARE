var modalService = angular.module('modal-service',[]);

modalService.factory('ModalAPI', function($http) {
    var ModalAPI = {};
    ModalAPI.prescriptionDetails = function(data) {
        return $http({
            method : 'POST',
            url : 'doctor/prescriptionList',
            data : data
        });
    };

    ModalAPI.genericPrescription = function(data) {
        return $http({
            method : 'POST',
            url : 'patient/prescriptionId',
            data : data
        });
    };
    return ModalAPI;
});