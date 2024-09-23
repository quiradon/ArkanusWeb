const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/blog.sqlite'); // Use ':memory:' para um banco de dados em memória ou um caminho para um arquivo

db.serialize(() => {
    // Cria a tabela Autores se não existir
    db.run(`CREATE TABLE IF NOT EXISTS Autores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        pictureUrl TEXT,
        link TEXT
    )`);

    // Cria a tabela Tags se não existir
    db.run(`CREATE TABLE IF NOT EXISTS Tags (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
    )`);

    // Cria a tabela Posts se não existir
    db.run(`CREATE TABLE IF NOT EXISTS Posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        conteudo TEXT NOT NULL,
        image TEXT NOT NULL,
        desc TEXT NOT NULL,
        data TEXT NOT NULL,
        autor_id INTEGER,
        tag_id_1 INTEGER,
        tag_id_2 INTEGER,
        tag_id_3 INTEGER,
        FOREIGN KEY (autor_id) REFERENCES Autores(id),
        FOREIGN KEY (tag_id_1) REFERENCES Tags(id),
        FOREIGN KEY (tag_id_2) REFERENCES Tags(id),
        FOREIGN KEY (tag_id_3) REFERENCES Tags(id)
    )`);

    // Cria a VIEW PostsView se não existir
    db.run(`CREATE VIEW IF NOT EXISTS PostsView AS 
        SELECT 
        Posts.id AS id, 
        Posts.titulo AS titulo, 
        Posts.image AS image,
        Posts.desc AS desc,
        Posts.conteudo AS conteudo, 
        Posts.data AS data, 
        Autores.nome AS autor, 
        Autores.pictureUrl AS pictureUrl, 
        Autores.link AS link, 
        Tags1.nome AS tag1, 
        Tags2.nome AS tag2, 
        Tags3.nome AS tag3
        FROM Posts
        LEFT JOIN Autores ON Posts.autor_id = Autores.id
        LEFT JOIN Tags AS Tags1 ON Posts.tag_id_1 = Tags1.id
        LEFT JOIN Tags AS Tags2 ON Posts.tag_id_2 = Tags2.id
        LEFT JOIN Tags AS Tags3 ON Posts.tag_id_3 = Tags3.id`);
});

function markdownToHTML(markdown) {
    const markdownIt = require('markdown-it');
    const md = new markdownIt();
    return md.render(markdown);
}


function genUrl(name){
    const uwu = name.toLowerCase().replace(/ /g, '-').toLowerCase()
    return `${uwu}`
}

function main() {
    buildPostsinHTML();
}

async function mapPosts() {
    //pegue todos os posts da view ordenados do mais novo para o mais antigo
    const posts = await new Promise((resolve, reject) => {
        db.all(`SELECT id,titulo,image,data,tag1,tag2,tag3,link,autor,pictureUrl,desc FROM PostsView ORDER BY data DESC`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    return posts;
}

async function mapPostsWithContent() {
    //pegue todos os posts da view ordenados do mais novo para o mais antigo
    const posts = await new Promise((resolve, reject) => {
        db.all(`SELECT id,titulo,image,data,tag1,tag2,tag3,link,autor,pictureUrl,desc,conteudo FROM PostsView ORDER BY data DESC`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    return posts;
}

async function getTags() {
    //pegue todas as tags
    const tags = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM Tags`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    return tags;
}

async function buildPostsinHTML() {
    const posts = await mapPostsWithContent();
    const fs = require('fs');
    const path = require('path');
    const dir = './dist/blog';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postPath = path.join(dir, `${genUrl(post.titulo)}.html`);
        fs.writeFileSync(postPath, page(post));
        
        // Calcula o progresso e exibe a barra de progresso
        const progress = ((i + 1) / posts.length) * 10;
        const progressBar = '█'.repeat(Math.floor(progress)) + '░'.repeat(10 - Math.floor(progress));
        console.log(`Progresso: [${progressBar}] ${Math.floor(progress * 10)}%`);
    }
}

const {nav, footer} = require('../components/navbar')
const scripts = require('../components/bootscripts')
const {head} = require('../components/head')

let pt = require('../i18n/pt.json');
function page(post) {
    return `
<!DOCTYPE html>
<html lang="pt-BR" data-bs-theme="light">
${head(`/teste`,post.titulo,post.desc,post.image)}
<body>
    ${nav(pt, '/teste')}
    
    ${templatePost(post.titulo,post.image ?? 'https://via.placeholder.com/1920x1080',post.desc,post.data,post.autor,post.link,post.pictureUrl)}
    <section id="content" class="d-flex d-xl-flex d-xxl-flex justify-content-center align-items-center align-content-center justify-content-xl-center justify-content-xxl-center">
    <div class="container-sm px-md-5 mx-md-5 py-0">
        <div class="row mx-md-5">
            <div class="col">
               ${markdownToHTML(post.conteudo)}
            </div>
        </div>
    </div>
</section>
    ${footer(pt,'/teste')}
    ${scripts}
</body>
</html>
`
}



function templatePost(title,img_cape,desc,date,author_name,author_link,author_img) {
    if (img_cape == null) {
        img_cape = ""
    } else {
        img_cape = `<img class="rounded img-fluid mb-3" src="${img_cape}" />`
    }
    return `
    <section id="start" class="d-flex d-xl-flex d-xxl-flex justify-content-center align-items-center align-content-center justify-content-xl-center justify-content-xxl-center" style="background: url('/static/img/paterns/quadrado.svg') top / auto repeat-x;">
    <div class="container-sm pt-2 pt-xl-3 px-lg-5 mx-lg-5">
        <div class="row mt-4 pt-4 mx-md-5">
            <div class="col-auto">
                <h1 class="display-4 fw-bold mb-3" style="font-family: 'PT Sans', sans-serif;">${title}</h1>
                <div class="mb-4">
                    <div class="row row-cols-1 row-cols-sm-2">
                         <div class="col-xxl-4">
                            <h5 class="text-muted">Escrito Por</h5>
                            <a href="${author_link}" class="d-flex align-items-center" target="_blank">
                                <img class="img-fluid rounded-circle me-2" height="30px" width="30px" src="${author_img}" />
                                <h5 class="text-muted mb-0">${author_name}</h5>
                            </a>
                        </div>
                        <div class="col">
                            <h5 class="text-muted">Publicado Em</h5>
                            <h5>${date}</h5>
                        </div>
                    </div>
                </div>${img_cape}
                <p class="text-muted">${desc}</p>
            </div>
        </div>
    </div>
</section>`
}


module.exports = { main, mapPosts, getTags };