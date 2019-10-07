var adminService = angular.module('admin-service', []);
adminService.factory('adminAPI', function($http) {

	var adminAPI = {};

	adminAPI.getPatientList = function() {
		return $http({
			method : 'GET',
			url : 'admin/patientsList/',
		});
	};

	adminAPI.getStaffList = function() {
        return $http({
            method : 'GET',
            url : 'admin/staffList/',
        });
    };

    adminAPI.getMedicineList = function() {
        return $http({
            method : 'GET',
            url : 'admin/medicineList/',
        });
    };
	return adminAPI;
});