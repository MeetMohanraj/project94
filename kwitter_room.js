const firebaseConfig = {
      apiKey: "AIzaSyDO4mfAKJtQWs_zEQkiSzV4HpyPfJ2ZMtI",
      authDomain: "kwitter-4d5e9.firebaseapp.com",
      databaseURL: "https://kwitter-4d5e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d5e9",
      storageBucket: "kwitter-4d5e9.appspot.com",
      messagingSenderId: "921709467182",
      appId: "1:921709467182:web:e903852c73d6d32ada71bf"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     function logout(){
           window.location = "index.html";
     }
     


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      

      //End code
      });});}
getData();


