var staffAdminService = angular.module('staff-admin-service',[]);

staffAdminService.factory('staffAdminAPI', function ($http) {
    var staffAdminAPI = {};

    staffAdminAPI.staffList = function(){
        return $http({
            method : 'GET',
            url : 'admin/staffList',
        });
    };
    return staffAdminAPI;
});