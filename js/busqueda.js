function validate(event) {

  var busquedaInput = document.querySelector("#busqueda");

  busquedaInput.classList.remove("is-invalid")

  if (busquedaInput.value.length < 4) {
    busquedaInput.classList.add("is-invalid");
    return false;
  } else {
    return true;
  }
}
