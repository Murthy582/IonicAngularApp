var app = angular.module('SkunkAndroidApp.Controllers',[]);

app.controller('SideMenuController', function($scope, $ionicSideMenuDelegate,$state ){
    this.tab = 1;
    this.account = '';
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    this.selectTab = function(setTab){
    this.tab = setTab;
    }
    this.getCurrentAccount = function(Data){
        this.account = Data.getAccountName();
        return this.account;
    }
});

app.factory('Data',function(){

    var name = '';
    var setAccountName = function(accountName)
    {
        this.name = accountName;
    }
    var getAccountName = function()
    {
        return this.name;
    }

})
/*app.controller('TabController', function($state){
this.tab = 1;
    this.selectTab = function(setTab){
    this.tab = setTab;
    }
    this.changeState = function(){
    $state.transitionTo('AccountHome');
    };
}); */

app.controller('BookmarkController',function($ionicPopup,Data){

     this.accountList = [];
    this.accountName = '';
    this.addAccount = function(){
        if(this.Account != '' && this.Account != null){
            this.accountList.push(this.Account);
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
    this.setCurrentAccount = function(account)
    {
        Data.setAccountName(account);
        //this.accountName = account;
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