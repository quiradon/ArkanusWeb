const { traduz } = require('./translation.js')
const fs = require('fs')
const path = require('path')
const pluginLoader = require('./pluginLoader.js')

const exportFolder = path.join(__dirname, 'dist')
function copyFolderRecursiveSync(source, target) {
    let files = []
    const targetFolder = path.join(target, path.basename(source))
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder)
    }
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source)
        files.forEach(file => {
            const curSource = path.join(source, file)
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder)
            } else {
                fs.copyFileSync(curSource, path.join(targetFolder, file))
            }
        })
    }
}

async function compilePages() {
    const languages = ['pt', 'en'];
    const pages = fs.readdirSync(path.join(__dirname, 'pages'));
    if (!fs.existsSync(exportFolder)) {
        fs.mkdirSync(exportFolder);
    }

    for (const language of languages) {
        const t = traduz(language);
        const languageFolder = language === 'en' ? exportFolder : path.join(exportFolder, language);
        if (!fs.existsSync(languageFolder)) {
            fs.mkdirSync(languageFolder);
        }

        for (const page of pages) {
            const pagePath = path.join(__dirname, 'pages', page);
            const pageStat = fs.statSync(pagePath);
            if (pageStat.isDirectory()) {
                const pageFiles = fs.readdirSync(pagePath);
                const exportPageFolder = path.join(languageFolder, page);
                if (!fs.existsSync(exportPageFolder)) {
                    fs.mkdirSync(exportPageFolder);
                }
                for (const file of pageFiles) {
                    const filePath = path.join(pagePath, file);
                    const fileStat = fs.statSync(filePath);
                    if (fileStat.isFile()) {
                        const pageFunction = require(filePath);
                        const route = '/' + page + '/' + path.basename(file, path.extname(file));
                        const html = await pageFunction.page(t, route);
                        const exportFilePath = path.join(exportPageFolder, path.basename(file, path.extname(file)) + '.html');
                        fs.writeFileSync(exportFilePath, html);
                    }
                }
            } else {
                const route = '/' + path.basename(page, path.extname(page));
                const pageFunction = require(pagePath);
                const html = await pageFunction.page(t, route);
                const exportFilePath = path.join(languageFolder, path.basename(page, path.extname(page)) + '.html');
                fs.writeFileSync(exportFilePath, html);
            }
        }
    }
    console.log('[Páginas compiladas com sucesso!]');
}

function copyStaticFiles() {
    const staticFolder = path.join(__dirname, 'static')
    copyFolderRecursiveSync(staticFolder, exportFolder)
    console.log('[Arquivos estáticos copiados com sucesso!]')
}

function copyExtraFiles() {
    //copie robots.txt, sitemap.xml e _redirects para out
    const extraFiles = ['robots.txt', 'sitemap.xml', '_redirects','manifest.json']
    extraFiles.forEach(file => {
        const filePath = path.join(__dirname, file )
        const exportFilePath = path.join(exportFolder, file)
        fs.copyFileSync(filePath, exportFilePath)
    })  
    console.log('[Arquivos extras copiados com sucesso!]')
}

function calculateDirectorySize(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    let totalSize = 0;

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            totalSize += calculateDirectorySize(filePath); // Recursão para subdiretórios
        } else {
            totalSize += stats.size;
        }
    });

    return totalSize;
}

function checkDistSize() {
    const directoryPath = exportFolder; // Substitua pelo caminho correto
    const totalSize = calculateDirectorySize(directoryPath);
    const totalSizeInKilobytes = totalSize / 1024;
    const megaBytes = totalSizeInKilobytes / 1024;
    console.log(`Tamanho da pasta dist: ${totalSizeInKilobytes.toFixed(2)} KB | ${megaBytes.toFixed(2)} MB`); ;
}

// Chame a função para executar a compilação das páginas

pluginLoader.loadPlugins()
compilePages()
copyStaticFiles()
copyExtraFiles()
checkDistSize();
//espere 1 segundo para copiar os arquivos extras



