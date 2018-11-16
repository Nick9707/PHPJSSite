window.onload = function(){
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function validation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(password=='' || email=='')
    {
        document.getElementById("errEmail").innerHTML = "You need to enter all fields";
        return false;
    }
    else if(password.length<3){
        document.getElementById("errPass").innerHTML = "Your Password must be atleast 3 characters";
        return false;
    }
    else {
        return true;
    }
}
