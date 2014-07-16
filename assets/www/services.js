var app = angular.module('SkunkAndroidApp.Services', []);

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

app.factory('FeedService',['$http',function($http){
    return {
            parseFeed : function(url){
            return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }]);

    