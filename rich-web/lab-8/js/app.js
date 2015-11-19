var app = angular.module("myApp", ["firebase"]);

app.controller("MessagesController", function($scope, $firebaseArray) {
  var ref = new Firebase("https://ionic-learn.firebaseio.com/messages");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
});

app.controller("LoginController", function ($scope, $firebaseAuth){
  var ref = new Firebase("https://ionic-learn.firebaseio.com/messages");

  var auth = $firebaseAuth(ref);

  // login with Facebook
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
});
