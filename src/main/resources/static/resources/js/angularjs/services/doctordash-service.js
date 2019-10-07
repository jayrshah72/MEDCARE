var doctordashService = angular.module('doctordash-service', []);
doctordashService.factory('doctordashAPI', function($http) {
	var doctordashAPI = {};
	doctordashAPI.getCount = function() {
		return $http({
			method : 'GET',
			url : 'doctor/count',
		});
	};
    doctordashAPI.getOpdList = function() {
        return $http({
            method : 'GET',
            url : 'doctor/opdList',
        });
    };
    doctordashAPI.getAdmittedList = function() {
        return $http({
            method : 'GET',
            url : 'doctor/admitList',
        });
    };
	return doctordashAPI;
});