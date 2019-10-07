var medicineService = angular.module('medicine-service',[]);

medicineService.factory('medicineAPI', function ($http) {
    var medicineAPI = {};
    medicineAPI.getMedicineList = function(data){
        return $http({
            method : 'POST',
            url : 'admin/medicineList',
            data : data
        });
    };
    medicineAPI.removeMedicine = function(id) {
        return $http({
            method : 'GET',
            url : 'admin/removeMedicine/' + id,
        });
    };

    medicineAPI.addNewMedicine = function() {
        return $http({
            method : 'POST',
            url : 'admin/addNewMedicine/',
        });
    };
    return medicineAPI;
});
