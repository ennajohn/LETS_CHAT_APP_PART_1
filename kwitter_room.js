var firebaseConfig = {
    apiKey: "AIzaSyCVI3bM4FeINR7qcAzeYaNj1FjuqiIZ5Jw",
    authDomain: "lets-chat-app-pro.firebaseapp.com",
    projectId: "lets-chat-app-pro",
    storageBucket: "lets-chat-app-pro.appspot.com",
    messagingSenderId: "1029574807971",
    appId: "1:1029574807971:web:120ae578dd90ee85deca16"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room() {
      room_name = document.getElementById("room_name").value;

      function getData() 
      {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
       Room_names = childKey;
//Start code

//End code
});});}
getData();
  }
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location("index.html");
}
  
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref("room_name").push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value;


  
}
