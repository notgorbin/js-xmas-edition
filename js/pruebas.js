function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Fabricio") === "",
    "Validar Nombre falló con un nombre válido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "No se ha seleccionado ninguna ciudad",
    "Validar ciudad no validó que el campo de ciudad no sea vacío"
  );

  console.assert(
    validarCiudad("Buenos Aires") === "",
    "Validar ciudad no funcionó con un nombre de ciudad válido"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "Este campo debe tener al menos 1 palabra",
    "Validar Descripcion Regalo no validó que el campo de descripción no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "El campo descripcion es muy largo",
    "Validar Descripcion regalo no validó que el campo de descripción no sea muy largo"
  );

  console.assert(
    validarDescripcionRegalo("Cualquier cosa") === "",
    "Validar Descripcion regalo no funcionó con una descripción válida"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
