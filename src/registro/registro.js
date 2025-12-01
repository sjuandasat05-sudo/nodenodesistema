export function runRegistro() {
  console.time('Tiempo de proceso');
  const accesos = [
    { usuario: 'andres', rol: 'admin', exito: true },
    { usuario: 'lorena', rol: 'user', exito: false },
    { usuario: 'machael', rol: 'user', exito: true },
  ];
  console.table(accesos);

  accesos.forEach(a => {
    console.count('Validaciones');
    if (a.exito) console.log(`Acceso OK: ${a.usuario}`);
    else console.warn(`Fallo acceso: ${a.usuario}`);
  });

  console.timeEnd('Tiempo de proceso');
}
