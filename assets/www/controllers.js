var app = angular.module('SkunkAndroidApp.Controllers',[]);

app.controller('SideMenuController', function($scope, $ionicSideMenuDelegate,$state,Data ){
    
    
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.Data = Data;
    
    
    $scope.account = Data.currentAccount();
    console.log('in smCtrl : account value from service '+ $scope.account);
    //$scope.Data = Data;
});

app.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    $scope.loadButonText="Load";
    $scope.feedLenght = 0;
    $scope.feedSrc="http://feeds2.feedburner.com/Mashable";
    console.log('in Feed controller');
    $scope.loadFeed=function(){        
        Feed.parseFeed($scope.feedSrc).then(function(res){
            //$scope.loadButonText=angular.element(e.target).text();
            $scope.feeds=res.data.responseData.feed.entries;
            $scope.feedLength = $scope.feeds.length;
            
            console.log('setting feeds value, no of feeds :'+$scope.feeds.length);
            
        });
    }
}]);

app.controller('BookmarkController',function($ionicPopup,Data){

     this.accountList = [];
    this.accountList = Data.accountList;
    this.addAccount = function(){
        if(this.accountList.indexOf(this.Account) != -1){
            $ionicPopup.alert({
            
                title : 'Error !',
                template : 'Account already exists in your Favourite List!'
                
            });
            this.Account='';
            return;
        }
  
        if(this.Account != '' && this.Account != null){
            Data.bookmarkAccount(this.Account);
        }
        else
        {
            $ionicPopup.alert({
            
                title : 'Error !',
                template : 'Please select an Account !'
            
            });
        }
        this.Account = '';
    };
    this.setCurrentAccount = function(account){
        console.log('In bmCtrl :received current account name '+ account);
        Data.setPassingAccount(account);
    }
    
});

app.controller('FormController', function($ionicPopup){
    this.add = function(){
    var e = document.getElementById("dropdown");
    var option = e.options[e.selectedIndex].text;
    var sum  = null;
        if( option == '+' )
        {
            sum = parseInt(this.a) + parseInt(this.b);
        }
        else if( option == '-' )
        {
            sum = parseInt(this.a) - parseInt(this.b);
        }
        else if( option == '*' )
        {
            sum = parseInt(this.a) * parseInt(this.b);
        }
        else if( option == '/' )
        {
            sum = parseInt(this.a) / parseInt(this.b);
        }
    $ionicPopup.alert({
        title : 'Result',
        template : 'Result = '+sum
    
    });
        
    };
});