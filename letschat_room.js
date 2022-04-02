const firebaseConfig = {
      apiKey: "AIzaSyDq4qm8QxMd3cUuCUj9nkmkCy0t1AwDN38",
      authDomain: "kwitter-5b599.firebaseapp.com",
      databaseURL: "https://kwitter-5b599-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b599",
      storageBucket: "kwitter-5b599.appspot.com",
      messagingSenderId: "204766044886",
      appId: "1:204766044886:web:d8f96c13a2f537d3b7df77"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addUser() {
      user_name= document.getElementById("user_name").value;
      localStorage.setItem("user_name",user_name);
      window.location="kwitter_room.html";
      }
      function addRoom()
      {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      }
