window.onload = function(){
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  function validation() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      if(password=='' || email=='')
      {
          document.getElementById("msg").innerHTML = "You need to enter all fields";
          return false;
      }
      else if(password.length<3){
          document.getElementById("msg").innerHTML = "Your Password must Be Atleast 3 characters";
          return false;
      }
      else {
          return true;
      }
  }

}
