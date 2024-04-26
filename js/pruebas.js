function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarDescripcionRegalo(",.,.,.,.") ===
      "El campo descripción solo puede tener números y letras",
    "La función validar descripción regalo no validó que fuera solo números y letras"
  );
}

probarValidarNombre();
