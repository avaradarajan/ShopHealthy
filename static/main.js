//
//  main functions
//

var SHARK2 = SHARK2 || {};

//
//  set up the system
//
$(document).ready(function () {
    $('#getData').on('click', SHARK2.canvasMouseUp);
    SHARK2.coords = [];
    var firebaseConfig = {
    apiKey: "AIzaSyAnF4I-kl4sDg3QvKzydxruSOA_TVi4irg",
    authDomain: "shophealthy-58a5d.firebaseapp.com",
    databaseURL: "https://shophealthy-58a5d.firebaseio.com",
    projectId: "shophealthy-58a5d",
    storageBucket: "shophealthy-58a5d.appspot.com",
    messagingSenderId: "838399846119",
    appId: "1:838399846119:web:ede4c9955b3e523f74e442"
  };
  // Initialize Firebase
  console.log("wsd ")
  firebase.initializeApp(firebaseConfig);
   var ref = firebase.database().ref();
   console.log('HJer2')
   console.log(ref)

ref.on("value", function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();
  var id=childData.id;
  console.log(childData);
 });
});
});

SHARK2.canvasMouseUp = function (e) {
    console.log(SHARK2.coords)
    SHARK2.coords.push({
        x: '12',
        y: '13'
    })




    $.ajax({
	  type: 'POST',
	  url: '/shark2',
      data: JSON.stringify(SHARK2.coords),
      dataType: "json",
	  success: function(result) {
	    console.log(result);
	    $('#divInfo').html(result['elapsed_time'])
	  },
	  error: function(result) {
	  }
	});
};