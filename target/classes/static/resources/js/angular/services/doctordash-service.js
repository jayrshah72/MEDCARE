var doctordashService = angular.module('doctordash-service', []);
doctordashService.factory('doctordashAPI', function($http) {
	var doctordashAPI = {};
	doctordashAPI.getCount = function() {
		return $http({
			method : 'GET',
			url : 'patient/count',
		});
	};
    doctordashAPI.getOpdList = function() {
        return $http({
            method : 'GET',
            url : 'patient/opdList',
        });
    };
    doctordashAPI.getAdmittedList = function() {
        return $http({
            method : 'GET',
            url : 'patient/admitList',
        });
    };
	return doctordashAPI;
});