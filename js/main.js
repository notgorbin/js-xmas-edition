
function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  
if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre sólo acepta letras";
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

if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
    return "El campo descripción solo puede tener números y letras";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  manejarErrores(errores);

  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  cosnt;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      $form[key.className] = "error";
    } else {
      $form[key].className = "";
    }
  });
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario();

//   errorNombre = errores.nombre; // nombre
//   errorCiudad = errores.ciudad; // ciudad
//   errorDescripcionRegalo = errores.descripcionRegalo; // descripcion regalo

//   if (errorNombre) {
//     $form.nombre.className = "error";
//   } else {
//     $form.nombre.className = "";
//   }

//   if (errorCiudad) {
//     $form.ciudad.className = "error";
//   } else {
//     $form.ciudad.className = "";
//   }

//   if (errorDescripcionRegalo) {
//     $form.descripcionRegalo.className = "error";
//   } else {
//     $form.descripcionRegalo.className = "";
//   }
