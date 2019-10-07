var patientAdminService = angular.module('patient-admin-service', []);
patientAdminService.factory('patientAdminAPI', function($http) {

	var patientAdminAPI = {};
	patientAdminAPI.getPatientList = function() {
		return $http({
			method : 'GET',
			url : 'admin/patientsList/',
		});
	};

	patientAdminAPI.removePatient = function(id) {
        return $http({
            method : 'GET',
            url : 'admin/removePatient/' + id,
        });
    };
	return patientAdminAPI;
});