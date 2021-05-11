//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
authDomain: "kwitter-6abca.firebaseapp.com",
databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
projectId: "kwitter-6abca",

  var user_name=localStorage.getItem("user_name");

  var room_name=localStorage.getItem("room_name");

  function logout()
  {
  localStorage.removeItem ("user_name");
  localStorage.removeItem ("room_name");
  window.location="index.html";
  }

  function send()
  {
  msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name : user_name,
message : msg,
like:0
});
document.getElementById("msg").value="";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];

         name_with_tag="<h4>"+name+ "<img src= "t.png"class="user_tick"></h4>";
         message_with_tag="<h3 class="message_h4">"+message+"</h3>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();
