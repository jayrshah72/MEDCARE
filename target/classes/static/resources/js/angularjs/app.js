var app = angular.module('myapp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'oc.lazyLoad',
    'nouislider',
    'ngTable',
    'myapp.controllers',
    'myapp.services',
    'toaster',
    'ngCookies',
    'ngPassword',
    'angularAudioRecorder',
    'ngStorage'
])
 

app.config(function (recorderServiceProvider) {
	recorderServiceProvider
    .forceSwf(false)
    //.setSwfUrl('/lib/recorder.swf')
    .withMp3Conversion(true);

	  });


app.config([ '$stateProvider', '$urlRouterProvider' ,'$locationProvider',
            function($stateProvider, $urlRouterProvider,$locationProvider) {
            $urlRouterProvider.otherwise("/login");
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
                .state('doctordash.newPrescription', {
                url:'/newPrescription/{type}/{id}',
                templateUrl: '/views/newPrescription.html',
                controller  : 'prescriptionController',
                    params: {id:"",type:"",patient:{}}
                })
                .state('patient', {
                    url:'/patient/dashboard',
                    templateUrl: '/views/patientPrescriptionList.html',
                    controller  : 'patientController',

                })
                .state('receptionist', {
                    url:'/receptionist/dashboard',
                    templateUrl:'/views/receptionist-dash.html',
                    controller:'billController',
                })
                .state('admin', {
                    url:'/admin/dashboard',
                    templateUrl:'/views/admin-panel.html',
                    controller:'adminController',
                })
                .state('patientAdmin', {
                    url:'/admin/patients',
                    templateUrl:'/views/patient-admin.html',
                    controller:'patientAdminController',
                })
                .state('medicineAdmin', {
                    url:'/admin/medicines',
                    templateUrl:'/views/medicine-admin.html',
                    controller:'medicineAdminController',
                })
                .state('staffAdmin', {
                    url:'/admin/staff',
                    templateUrl:'/views/staff-admin.html',
                    controller:'staffAdminController',
                })
                .state ('adminhome', {
                url: '/admin/home',
                templateUrl: 'views/adminhome.html',
                controller  : 'adminHomeController',
                data: {
                    authorizedRoles: "admin",
                    status:"1"
                  },
       
                resolve: {
                        preTestList : function($http){
                          return $http.post("preTest/preTestList").then(function(response){
                                  return response.data;
                          })
                        },
                    }
                })
    .state ('adminhome.preTestEmployeeList', {
        url: '/preTestEmployeeList',
        templateUrl: 'views/preTestEmployeeList.html',
        controller  : 'preTestEmployeeListController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
          params: {preTest: null},
          
    })
    .state ('preTestEmployeeDetail', {
        url: '/preTestEmployeeDetail',
        templateUrl: 'views/preTestEmployeeDetail.html',
        controller  : 'preTestEmployeeDetailController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
          params: {
        	  ids: null,
        	  names : null,
        	  },
    })
    .state ('preTest', {
        url: '/preTest',
        templateUrl: 'views/preTest.html',
        controller  : 'addPreTestController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
    })
   .state ('preTest.addPreTest', {
        url: '/addPreTest',
        templateUrl: 'views/addPreTest.html',
        controller  : 'addPreTestController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
    })
    .state ('preTest.editPreTest', {
        url: '/editPreTest',
        templateUrl: 'views/editPreTest.html',
        controller  : 'editPreTestController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
          resolve: {
          	
	        	preTestList : function($http){
	      		  return $http.post("preTest/preTestList").then(function(response){
	      			  return response.data;
	      		  })		  			
	      	  },
    
    loadPlugin: function($ocLazyLoad) {
        return $ocLazyLoad.load ([
            {
                name: 'css',
                insertBefore: '#app-level',
                files: [
                    'resources/vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
                    'resources/vendors/bower_components/nouislider/jquery.nouislider.css',
                    'resources/vendors/farbtastic/farbtastic.css',
                    'resources/vendors/bower_components/summernote/dist/summernote.css',
                    'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                    'resources/vendors/bower_components/chosen/chosen.min.css'
                ]
            },
            {
                name: 'vendors',
                insertBefore: '#app-level-js',
                files: [
                    'resources/vendors/sparklines/jquery.sparkline.min.js',
                    'resources/vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                    'resources/vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js',
                    'resources/vendors/input-mask/input-mask.min.js',
                    'resources/vendors/bower_components/nouislider/jquery.nouislider.min.js',
                    'resources/vendors/bower_components/moment/min/moment.min.js',
                    'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                    'resources/vendors/bower_components/summernote/dist/summernote.min.js',
                    'resources/vendors/fileinput/fileinput.min.js',
                    'resources/vendors/bower_components/chosen/chosen.jquery.js',
                    'resources/vendors/bower_components/angular-chosen-localytics/chosen.js',
                    'resources/vendors/bower_components/angular-farbtastic/angular-farbtastic.js',
                    'resources/vendors/bower_components/autosize/dist/autosize.min.js'
                ]
            }
        ])
    }
    
  }
    })
    
    .state ('preTest.editPreTest.editPreTestSpeaking', {
        url: '/editPreTestSpeaking',
        templateUrl: 'views/editPreTestSpeaking.html',
        controller  : 'editPreTestSpeakingController',
        data: {
            authorizedRoles: "admin",
            status:"1"
          },
          params: {
        	  preTestId: null,
        	  preTestName : null,
        	  },
          
    })
    .state ('addPreTestQuestions', {
        url: '/addPreTestQuestions',
        templateUrl: 'views/addPreTestQuestions.html',
        controller  : 'addPreTestQuestionsController',
    })
    .state ('addPreTestQuestions.addSpeakingQuestions', {
        url: '/addSpeakingQuestions',
        templateUrl: 'views/addSpeakingQuestions.html',
        controller  : 'addSpeakingQuestionsController',
        resolve: {
      	  
      	  preTestSpeakingQuestionList : function($http){
      		  return $http.post("preTestSpeaking/preTestSpeakingQuestionList").then(function(response){
      			  return response.data;
      		  })
      		  			
      	  }
        }

    })
    
    .state ('employee', {
        url: '/employee',
        templateUrl: 'views/employee.html',
        controller  : 'employeeController',
    })
    .state ('employee.assignPreTest', {
        url: '/assignPreTest',
        templateUrl: 'views/assignPreTest.html',
        controller  : 'assignPreTestController',
    })
    .state ('employee.addEmployee', {
        url: '/addEmployee',
        templateUrl: 'views/addEmployee.html',
        controller  : 'addEmployeeController',
    })
    .state ('employee.showEmployee', {
        url: '/showEmployee',
        templateUrl: 'views/showEmployee.html',
        controller  : 'showEmployeeController',
    })
//    .state ('addSpeakingQues', {
//        url: '/addSpeakingQues',
//        templateUrl: 'views/addSpeakingQues.html',
//        controller  : 'addSpeakingQuesController',
//    })
//    .state ('addSpeakingQues', {
//        url: '/addSpeakingQues',
//        templateUrl: 'views/addSpeakingQues.html',
//        controller  : 'addSpeakingQuesController',
//    })
//    .state ('addSpeakingQues', {
//        url: '/addSpeakingQues',
//        templateUrl: 'views/addSpeakingQues.html',
//        controller  : 'addSpeakingQuesController',
//    })
    .state ('resultList', {
        url: '/resultList',
        templateUrl: 'views/resultList.html',
        controller  : 'resultListController',
    })
    .state ('resultList.resultDetail', {
        url: '/resultDetail',
        templateUrl: 'views/resultDetail.html',
        controller  : 'resultDetailController',
    })
    
    .state ('gradebook', {
        url: '/grade-book',
        templateUrl: 'views/grade-book.jsp',
        controller  : 'gradebookController',
        resolve: {
            loadPlugin: function($ocLazyLoad) {
                return $ocLazyLoad.load ([
                    {
                        name: 'css',
                        insertBefore: '#app-level',
                        files: [
                            'resources/vendors/bower_components/nouislider/jquery.nouislider.css',
                            'resources/vendors/farbtastic/farbtastic.css',
                            'resources/vendors/bower_components/summernote/dist/summernote.css',
                            'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'resources/vendors/bower_components/chosen/chosen.min.css'
                        ]
                    },
                    {
                        name: 'vendors',
                        files: [
                            'resources/vendors/input-mask/input-mask.min.js',
                            'resources/vendors/bower_components/nouislider/jquery.nouislider.min.js',
                            'resources/vendors/bower_components/moment/min/moment.min.js',
                            'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'resources/vendors/bower_components/summernote/dist/summernote.min.js',
                            'resources/vendors/fileinput/fileinput.min.js',
                            'resources/vendors/bower_components/chosen/chosen.jquery.js',
                            'resources/vendors/bower_components/angular-chosen-localytics/chosen.js',
                            'resources/vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                        ]
                    }
                ])
            }
        }
    })
    .state ('assignmentgrade', {
        url: '/assignmentgrade',
        templateUrl: 'views/assignmentgrade.jsp',
        controller  : 'assignmentgradeController',
        resolve: {
            loadPlugin: function($ocLazyLoad) {
                return $ocLazyLoad.load ([
                    {
                        name: 'css',
                        insertBefore: '#app-level',
                        files: [
                            'resources/vendors/bower_components/nouislider/jquery.nouislider.css',
                            'resources/vendors/farbtastic/farbtastic.css',
                            'resources/vendors/bower_components/summernote/dist/summernote.css',
                            'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'resources/vendors/bower_components/chosen/chosen.min.css'
                        ]
                    },
                    {
                        name: 'vendors',
                        files: [
                            'resources/vendors/input-mask/input-mask.min.js',
                            'resources/vendors/bower_components/nouislider/jquery.nouislider.min.js',
                            'resources/vendors/bower_components/moment/min/moment.min.js',
                            'resources/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'resources/vendors/bower_components/summernote/dist/summernote.min.js',
                            'resources/vendors/fileinput/fileinput.min.js',
                            'resources/vendors/bower_components/chosen/chosen.jquery.js',
                            'resources/vendors/bower_components/angular-chosen-localytics/chosen.js',
                            'resources/vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                        ]
                    }
                ])
            }
        }
    })
    .state ('reflectivejournal', {
        url: '/reflectivejournal',
        templateUrl: 'views/reflectivejournal.jsp',
        controller  : 'reflectivejournalController',
    })
    .state ('reflectivejournal.addReflectiveJournal', {
        url: '/addReflectiveJournal',
        templateUrl: 'views/addReflectiveJournal.jsp',
        controller  : 'addReflectiveJournalController',
    })
    .state ('reflectivejournal.showReflectiveJournal', {
        url: '/showReflectiveJournal',
        templateUrl: 'views/showReflectiveJournal.jsp',
        controller  : 'showReflectiveJournalController',
    })
    .state ('reflectivejournal.reflectiveJournalGrading', {
        url: '/reflectiveJournalGrading',
        templateUrl: 'views/reflectiveJournalGrading.jsp',
        controller  : 'reflectiveJournalGradingController',
    })
    .state ('discussionforum', {
        url: '/discussionforum',
        templateUrl: 'views/discussionforum.jsp',
        controller  : 'discussionforumController',
    })
    .state ('discussionforum.addDiscussionForum', {
        url: '/addDiscussionForum',
        templateUrl: 'views/addDiscussionForum.jsp',
        controller  : 'addDiscussionForumController',
    })
    .state ('discussionforum.showDiscussionForum', {
        url: '/showDiscussionForum',
        templateUrl: 'views/showDiscussionForum.jsp',
        controller  : 'showDiscussionForumController',
    })
    .state ('discussionforum.discussionForumGrading', {
        url: '/discussionForumGrading',
        templateUrl: 'views/discussionForumGrading.jsp',
        controller  : 'discussionForumGradingController',
    })
    .state ('adduser', {
        url: '/adduser',
        templateUrl: 'views/adduser.jsp',
        controller  : 'adduserController',
        
    })
    .state ('resetuser', {
        url: '/resetuser',
        templateUrl: 'views/resetuser.jsp',
        controller  : 'resetuserController',
    })

    .state ('preTestSpeaking', {
        url: '/preTestSpeaking',
        templateUrl: 'views/preTestSpeaking.html',
        controller  : 'preTestSpeakingController',
        data: {
            authorizedRoles: "employee",
            status:"1"
          },
        params: {preTest: null},
       
    })
    .state ('preTestStarted', {
        url: '/preTestStarted/',
        templateUrl: 'views/preTestStarted.html',
        controller  : 'preTestStartedController',
        data: {
            authorizedRoles: "employee",
            status:"1"
          },
          params: {id: null},
          resolve: {
        	  
        	  preTestList : function($http,$stateParams,$location){
        		  if($stateParams.id!=null)
        		  {
        		  return $http.post("preTestSpeaking/preTestSpeakingDetail",{'preTestId':$stateParams.id}).then(function(response){
        			  return response.data;
                  })
        		  			
        		  }
        		  else {
                      $location.path("/preTestInstruction")
                  }
        	  }
          }
    })
}]);

app.run([ 'toaster','$window','$rootScope', '$location', '$cookieStore','$state','$http','$templateCache','LoginAPI', function (toaster,$window,$rootScope, $location, $cookieStore, $state , $http ,$templateCache,LoginAPI) {
	

	$rootScope.currentPage = $location.path();
	console.log($rootScope.currentPage);
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    console.log($rootScope.globals.currentUser);
    if ($rootScope.globals.currentUser) {
    	$http.defaults.headers.common['Authorization'] = $rootScope.globals.currentUser.authdata; 
    	LoginAPI.doLogin({"phno":$rootScope.globals.currentUser.user_name,"password":$rootScope.globals.currentUser.password}).success(function (response) {
    		$rootScope.detail =response;
    	});
        }
    else
    	{
    	
    	$location.path("/login");
    	console.log("login");

    	}
    $rootScope.$on('$locationChangeStart', function (event) {
    	$rootScope.currentPage = $location.path();
        //console.log($rootScope.globals.currentUser);

//	/!*if user is logged in and user tries to go on login page then keep on same page*!/
    	if($rootScope.globals.currentUser && $location.path() == '/home'){
    		if($rootScope.globals.currentUser.login_type=='admin' )
    			{
                    console.log($rootScope.globals.currentUser);

                    $location.path("/admin/home");
    			}
    		
    	}
    	else if($rootScope.globals.currentUser && $location.path() == '/login'){
		
		event.preventDefault();
		
	}
	
	else if(!$rootScope.globals.currentUser){
		$location.path("/login");
	}

});

   
   $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    	
	    
        if ('data' in next && 'authorizedRoles' in next.data ) {
        	
             if($rootScope.globals.currentUser && next.data.authorizedRoles != $rootScope.globals.currentUser.login_type)
            	 {
            	 console.log(next.data.authorizedRoles+'unauth'+$rootScope.globals.currentUser.login_type);
            	 event.preventDefault();
            	  	
            	 	if($rootScope.globals.currentUser.login_type=="admin")
            	 		{
            	 		console.log($rootScope.globals.currentUser);
            	    	
            	 		$location.path("/admin/home");
            	 		}
            	 }
             
             else
            	 {
            	 	if(!$rootScope.globals.currentUser)
            		 {
            	 		event.preventDefault();
                   	 }
            	 if(next.name == "coupon")
                 {
	        		 if(next.data.status != $rootScope.globals.currentUser.vendorStatus )
		    			{
	        	    	event.preventDefault();
		    			toaster.pop('error', "Machant", "You have no Access to Create Coupons..!!");
		    			}
                 }
            	 
            }
        }   
       
      });
}]);

