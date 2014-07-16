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
    .state('News',{
        url : '/News',
        templateUrl : 'News.html'
    })
}])

app.run(['$state', function($state){

    $state.transitionTo('AccountHome');
   // $state.transitionTo('News');

}]);

