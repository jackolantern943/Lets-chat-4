var firebaseConfig = {
      apiKey: "AIzaSyCbbTb5V8a9hQPz4CJW10WktBKc8rSPIT0",
      authDomain: "new-folder-2-kwitter-projects.firebaseapp.com",
      databaseURL: "https://new-folder-2-kwitter-projects-default-rtdb.firebaseio.com",
      projectId: "new-folder-2-kwitter-projects",
      storageBucket: "new-folder-2-kwitter-projects.appspot.com",
      messagingSenderId: "336098873757",
      appId: "1:336098873757:web:d0346cbfd97ea4db41df74"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user")
}