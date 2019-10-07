var medicineAdminService = angular.module('medicine-admin-service',[]);

medicineAdminService.factory('medicineAdminAPI', function ($http) {
    var medicineAdminAPI = {};

    medicineAdminAPI.getMedicineList = function(data){
        return $http({
            method : 'GET',
            url : 'admin/medicineList',
            data : data
        });
    };

    medicineAdminAPI.removeMedicine = function(id) {
        return $http({
            method : 'POST',
            url : 'admin/removeMedicine/' + id,
        });
    };

    medicineAdminAPI.addNewMedicine = function(medicineData) {
        return $http({
            method : 'POST',
            url : 'admin/addNewMedicine/',
            data : medicineData
        });
    };
    return medicineAdminAPI;
});