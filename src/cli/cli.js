
export function runCLI() {
  process.stdout.write('CLI System Analitics\n');
  process.stdout.write('Comandos: hola | tiempo | salir\n');
  process.stdout.write('Escribe un comando: ');


  process.stdin.on('data', (data) => {
    const input = data.toString().trim().toLowerCase();


if (input === 'hola') {
  process.stdout.write('Hola! Bienvenido.\n');
} else if (input === 'tiempo') {
  process.stdout.write(`Hora actual: ${new Date().toLocaleString()}\n`);
} else if (input === 'salir') {
  process.stdout.write('Cerrando CLI.\n');
  process.exit(0);
} else {
  process.stdout.write('Comando no reconocido. Usa: hola | tiempo | salir\n');
}

    process.stdout.write('Escribe otro comando: ');
  });
}
