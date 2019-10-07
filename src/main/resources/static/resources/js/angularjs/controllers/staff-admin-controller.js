var staffAdminController = angular.module('staff-admin-controller',[]);

staffAdminController.controller('staffAdminController', function($scope, $rootScope, $location,$state,$http,staffAdminAPI,$uibModal,$stateParams,$cookieStore){

    $scope.staff;

    staffAdminAPI.staffList()
        .success(function(response){
           $scope.staff = response;
           console.log($scope.staff);
       })
       .error(function(data, status, headers, config){
           console.log("Error");
       });
});