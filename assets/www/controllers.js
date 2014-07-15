var app = angular.module('SkunkAndroidApp.Controllers',[]);

app.service('Data',function(){

    var accountList = [];
    var currentAccount ='Test1';
    var bookmarkAccount = function(accountName){
        accountList.push(accountName);
    }
    var setPassingAccount = function(Account)
    {
        console.log('in Service : setting current account value to '+Account);
        currentAccount = Account;
    }
    /*var getAccountList = function(){
        if(typeof AccountList != "undefined" && AccountList != null && AccountList.length > 0){
            return accountList;
        }
    }*/
    return{
        bookmarkAccount: bookmarkAccount,
        setPassingAccount: setPassingAccount,
        currentAccount: function() {
            return currentAccount;
        },
        accountList: accountList
    };
});



app.controller('SideMenuController', function($scope, $ionicSideMenuDelegate,$state,Data ){
    this.tab = 1;
    
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    this.selectTab = function(setTab){
    this.tab = setTab;
    }
    $scope.Data = Data;
    
    
    $scope.account = Data.currentAccount();
    console.log('in smCtrl : account value from service '+ $scope.account);
    //$scope.Data = Data;
});



app.controller('BookmarkController',function($ionicPopup,Data){

     this.accountList = [];
    this.accountList = Data.accountList;
    this.addAccount = function(){
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