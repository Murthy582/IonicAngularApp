var app = angular.module('testApp',['ui.router','ionic','SkunkAndroidApp.Controllers','SkunkAndroidApp.Services']);

app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
    //$urlRouterProvider.otherwise('/');
    $stateProvider
    .state('AccountHome',{
        
        url : '/AccountHome',
        templateUrl : 'AccountHome.html'
    })
    .state('AccountDetail',{
        
        url : '/AccountDetail',
        templateUrl : 'AccountDetail.html'
    })
    .state('AccountDetail.News',{
        url : '/News',
        templateUrl : 'News.html'
    })
    .state('AccountDetail.Opportunities',{
        
        url : '/Opportunity',
        templateUrl : 'Opportunity.html'                              
    })
    .state('AccountDetail.SalesRequest',{
        
        url : '/SalesRequest',
        templateUrl : 'sales-request.html'        
    })
}])

app.run(['$state','$rootScope', function($state,$rootScope){

    $state.transitionTo('AccountHome');
    $rootScope.newsFeed = [];
   // $state.transitionTo('News');

}]);

