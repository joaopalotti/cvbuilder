function genCV() {
  alert("Backend not implemented yet.")
  // TODO: get all the information from the screen, generate tex, pdf and send
  // pdf to user
}

function login() {
  alert("Login not implemented yet.")
  // TODO: get username and password and validade
  window.location="main.html"
}

function register() {
  //  alert("Registration not implemented yet")
  // TODO: register this user (save information on DB)
  
  var name = $("#username").val().toString();
  var email = $("#email").val().toString();
//TODO: check email using regexps

  var pass = $(".passToCheck:eq(0)").val().toString();
  var passc = $(".passToCheck:eq(1)").val().toString();
  
  //var pass = $("#password:eq(0)").val().toString();
  //var passc = $("#password:eq(1)").val().toString();
 
  //TODO: check other variables...
  if (pass != passc){
    alert("The passwords do not match!")
  }
  
  if (pass.length == 0){
    alert("Your password should have at least one letter or number!")  
  }


}
