function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }


  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "No se ha seleccionado ninguna ciudad";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Este campo debe tener al menos 1 palabra";
  }

  if (descripcionRegalo >= 100) {
    return "El campo descripcion es muy largo";
  }


  return "";
}

