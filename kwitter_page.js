const firebaseConfig = {
  apiKey: "AIzaSyCVI3bM4FeINR7qcAzeYaNj1FjuqiIZ5Jw",
  authDomain: "lets-chat-app-pro.firebaseapp.com",
  projectId: "lets-chat-app-pro",
  storageBucket: "lets-chat-app-pro.appspot.com",
  messagingSenderId: "1029574807971",
  appId: "1:1029574807971:web:120ae578dd90ee85deca16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref("room_name").push({
      like: 0,
      message : msg,
      name : user_name
  });
  document.getElementById(msg).value;
}