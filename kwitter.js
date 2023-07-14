localStorage.setItem("Username");
localStorage.getItem("user_name");

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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}


