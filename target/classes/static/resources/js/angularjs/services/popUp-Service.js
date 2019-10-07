var popUpService = angular.module('popUp-service',[]);

popUpService.factory('PopupAPI', function($http) {
    var PopupAPI = {};
    PopupAPI.prescriptionDetails = function(data) {
        return $http({
            method : 'POST',
            url : 'doctor/prescriptionList',
            data : data
        });
    };
    return PopupAPI;
});