var app = angular.module('myapp', ['ui.router','myapp.controllers','myapp.services']);
 
app.config([ '$stateProvider', '$urlRouterProvider' ,
            function($stateProvider, $urlRouterProvider) {
	 
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state ('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller  : 'homeController',
	})
    .state ('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller  : 'loginController',
    })
    .state('doctordash', {
    	url:'/doctor/dashboard',
		templateUrl: '/views/doctordash.html',
        controller  : 'doctordashController',

    })
}]);