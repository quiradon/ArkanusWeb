const fs = require('fs');
const path = require('path');

// Leia todos os arquivos da pasta plugins e execute a função main de cada um
function loadPlugins() {
    fs.readdir(path.join(__dirname, 'plugins'), (err, files) => {
        if (err) {
            console.error('Erro ao ler a pasta plugins:', err);
        } else {
            files.forEach(file => {
                const filePath = path.join(__dirname, 'plugins', file);
                if (path.extname(file) === '.js') {
                    try {
                        const plugin = require(filePath);
                        if (typeof plugin.main === 'function') {
                            plugin.main();
                        } else {
                            console.warn(`O arquivo ${file} não exporta uma função main.`);
                        }
                    } catch (error) {
                        console.error(`Erro ao carregar o plugin ${file}:`, error);
                    }
                } else {
                    console.warn(`O arquivo ${file} não é um módulo JavaScript.`);
                }
            });
        }
    });
}

module.exports = { loadPlugins };
