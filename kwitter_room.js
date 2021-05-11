 var firebaseConfig = {
    apiKey: "AIzaSyC4CZccQ78HVoV82fshEpKSfruzC5lOWbY",
    authDomain: "kwitter-dcb4e.firebaseapp.com",
    databaseURL: "https://kwitter-dcb4e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-dcb4e",
    storageBucket: "kwitter-dcb4e.appspot.com",
    messagingSenderId: "599070401259",
    appId: "1:599070401259:web:dd96ec7bf8d883fc5694ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";  

function add_room()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "addins room"
});
localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      var row="<div class="room_name" id="+Room_names+" onclick="redirectToRoomName(this.id)"># + Room_names +"</div><hr>";

      //End code
      });});}
getData();
