function addUser(){
    user_name = document.getElementById("user_name").value;
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
    });
   window.location = "kwitter_room.html";
}