import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const LOG_DIR = path.resolve('logs');
const LOG_FILE = path.join(LOG_DIR, 'app.log');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}


function escribirArchivo(linea) {
  fs.appendFileSync(LOG_FILE, linea + "\n", "utf8");
}


export const log = (...msg) => {
  const texto = msg.join(' ');
  const linea = `[INFO] ${new Date().toISOString()} ${texto}`;
  console.log(chalk.green('INFO:'), chalk.white(texto));
  escribirArchivo(linea);
};

export const warn = (...msg) => {
  const texto = msg.join(' ');
  const linea = `[WARN] ${new Date().toISOString()} ${texto}`;
  console.warn(chalk.yellow('WARN:'), chalk.yellow(texto));
  escribirArchivo(linea);
};

export const error = (...msg) => {
  const texto = msg.join(' ');
  const linea = `[ERROR] ${new Date().toISOString()} ${texto}`;
  console.error(chalk.red('ERROR:'), chalk.red(texto));
  escribirArchivo(linea);
};

export const table = (data) => {
  console.log(chalk.cyan('TABLE:'));
  console.table(data);
  const linea = `[TABLE] ${new Date().toISOString()} ${JSON.stringify(data)}`;
  escribirArchivo(linea);
};
