angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0EGn4ZeSqOJg0Z42jAxfrRZC530pFc_A",
    authDomain: "homesick-3266a.firebaseapp.com",
    databaseURL: "https://homesick-3266a.firebaseio.com",
    storageBucket: "homesick-3266a.appspot.com",
  };
  firebase.initializeApp(config);
})



/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/