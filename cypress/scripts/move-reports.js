const fs = require('fs');
const path = require('path');

// Obtém a data atual
const date = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
const srcDir = path.join(__dirname, 'cypress/reports/mochawesome');
const destDir = path.join(srcDir, date);

// Verifica se a pasta de destino existe, se não, cria
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Move os relatórios para a pasta com a data
fs.readdirSync(srcDir).forEach((file) => {
  const filePath = path.join(srcDir, file);
  if (fs.lstatSync(filePath).isFile()) {
    fs.renameSync(filePath, path.join(destDir, file));
  }
});