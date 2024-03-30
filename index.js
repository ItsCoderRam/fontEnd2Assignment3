function emailValidation(){
  let emailValidate = document.getElementById("email").value;

  if(emailValidate.length < 3 || !emailValidate.includes("@") || !emailValidate.includes(".")){
    document.getElementById("emailError").innerHTML = "Make sure email is more than 3 characters and has @ and .";
    document.getElementById("emailError").style.color = "red";
  }
  else {
    document.getElementById("emailError").innerHTML = " ";
    document.getElementById("status").innerHTML = "All good to go!";
    // document.getElementById("status").style.color = "green";

  }

}


function passwordValidation(){
    let passValidate = document.getElementById("password").value;
    if(passValidate.length <= 8){
     document.getElementById("passwordError").innerHTML ="Make sure password is more than 8 characters.";
     document.getElementById("passwordError").style.color = "red";
    }
    else {
    
        document.getElementById("status").innerHTML = "All good to go!";
        // document.getElementById("status").style.color = "green";
    }
}