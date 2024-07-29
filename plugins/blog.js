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

db.close();


function main() {
    // Código principal aqui
}

async function mapPosts() {

}

module.exports = { main, mapPosts };