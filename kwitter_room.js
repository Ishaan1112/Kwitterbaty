
function adduser() {
     
      username = document.getElementById("user_name").value;
      
      localStorage.setItem("username" , username);
      
            window.location = "Kwitter_room.html";
      }
      
      function getData() {firebase.database().ref("/"=room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
             Room_names = childKey;
             firebase_message_id = childKey;
             message_data = childDaty;
            //Start code
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4>"+name+"<img class='user_tick' src='ticl.png'></h4>";
            message_with_tag = "<h4>class= message_h4"+message+"</h4>"
            Lick_Button ="<button class='btn btn-waring' id="+firebase_message_id+" value= "+like+ "onclick=''updatelike(this.id)></h4>";
            span_with_tag="span class='glyphicon glyphicon-thumbs-up'>Like:" + like +"</span></button>";
      
      
            row = name_with_tag + message_with_tag + Lick_Button + span_with_tag;
            document.getElementById("output").innerHTML +=row;
            console.log("RoomName-" + Room_names)>
            row = "<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)'></div><hr>";
            //End code
            });});}
      getData();
      
      
      
      
      function addRoom() 
      {
            room_name =document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
            });
      
            localStorage.setItem("room_name", room_name);
            
            window.location = "kwitter_page.html";
      }
      
      
      
      function Logout() {
      localStorage.removeItem("user_name");
      locationbar.removeItem("room_name");
            window.location = "kwitter.html";
      }
      
      function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).plus({
            name:user_name,
            message:msg,
            like:0
      })
      }
      
      
      function updateLIKE() {
      console.log("clicked onthr=e like button -" + message_id);
      button_id = message_id;
      likes = document,getElementById(button_id).value;
      update_like = Number(likes) + 1;
      consol.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
      like : update_like
      })
      
      }