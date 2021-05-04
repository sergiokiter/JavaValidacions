function validate() {

  var inputs = document.querySelectorAll("input");
  var emailInput = document.querySelector("#email");
  var passwordInput = document.querySelector("#password");

  inputs.forEach(input => {
    input.classList.remove("is-invalid");
  })

  var errors = 0;
  if (emailInput.value.length === 0 || !validar_email(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    errors ++;
  }

  if(passwordInput.value.length === 0) {
    passwordInput.classList.add("is-invalid");
    errors ++;
  }

  if (errors > 0){
    return false;
  } else{
    return true;
  }
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}