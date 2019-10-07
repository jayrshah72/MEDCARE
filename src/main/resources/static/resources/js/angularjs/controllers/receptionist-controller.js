var receptionistController = angular.module('receptionist-controller',[]);

receptionistController.controller('receptionistController', function($scope, $rootScope, $location,$state,$http, receptionistAPI,$uibModal,$stateParams,$cookieStore){

    $scope.generateBill = function(){
        receptionistAPI.generateBill($rootScope.globals.currentUser.id).success(function(response){
                $scope.patient = response.user;
            }).error(function(data, status, headers, config){console.log("Error");});
    }
})
