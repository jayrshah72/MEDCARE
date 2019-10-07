var receptionistService = angular.module('receptionist-service', []);
receptionistService.factory('receptionistAPI', function($http) {
	var receptionistAPI = {};
	receptionistAPI.generateBill = function(id) {
		return $http({
			method : 'GET',
			url : 'patient/billGenerator/' + id,
		});
	};
	return receptionistAPI;
});