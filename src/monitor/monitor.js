import os from 'os';

export function runMonitor({ intervalMs = 2000, durationMs = 10000 } = {}) {
  function mostrar() {
    const info = {
      plataforma: os.platform(),
      cpus: os.cpus().length,
      libreMB: (os.freemem() / 1024 / 1024).toFixed(0),
      uptimeMin: (os.uptime() / 60).toFixed(1),
    };
    console.clear();
    console.log('System Monitor');
    console.table(info);
  }

  const id = setInterval(mostrar, intervalMs);
  setTimeout(() => {
    clearInterval(id);
    console.log('Monitor finalizado');
  }, durationMs);
}
