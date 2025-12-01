import { runRegistro } from './registro/registro.js';
import { runMonitor } from './monitor/monitor.js';
import { runCLI } from './cli/cli.js';
import { log, warn } from './logger/logger.js';

function mostrarMenu() {
  console.log(`
System Analitics
1) Registro y Depuración (console.*)
2) Monitor del Sistema (os + timers)
3) CLI (process.stdin/out)
4) Salir
`);
}

function esperarEntrada() {
  process.stdout.write('Selecciona una opción [1-4]: ');
  process.stdin.once('data', (data) => {
    const opcion = Number(data.toString().trim());
    switch (opcion) {
      case 1:
        log('Ejecutando módulo Registro...');
        runRegistro();
        break;
      case 2:
        log('Ejecutando módulo Monitor...');
        runMonitor({ intervalMs: 2000, durationMs: 8000 });
        break;
      case 3:
        warn('Entrando a la CLI. Escribe "salir" para cerrar la aplicación.');
        runCLI();
        return;
      case 4:
        console.log('Saliendo del sistema. ¡Hasta pronto!');
        process.exit(0);
      default:
        console.log('Opción inválida.');
    }
    mostrarMenu();
    esperarEntrada();
  });
}

mostrarMenu();
esperarEntrada();
