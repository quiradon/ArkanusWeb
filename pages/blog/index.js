const {nav, footer} = require('../../components/navbar')
const scripts = require('../../components/bootscripts')
const {head} = require('../../components/head')
const {idiomaR} = require('../../caminho')
const {getTags, mapPosts} = require('../../plugins/blog')

function genCard(title,date, img, desc, autor, autorImg, tag1,tag2,tag3){
    const tags = [tag1, tag2, tag3];
    const postUrl = `${title.replace(/ /g, '-').toLowerCase()}`;
    const tagsList = tags
        .filter(tag => tag !== null)
        .map(tag => {
            return `<span class="badge bg-primary me-1 mb-1">${tag}</span>`;
        })
        .join('');
    return `
    <a href="/blog/${postUrl}" class="link-unstyled">
        <div class="col">
            <div class="card BlogCardPost"><img class="card-img-top w-100 d-block fit-cover" style="height: 200px;" src="${img}" />
                <div class="card-body p-4">${tagsList}
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${desc}</p>
                    <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="${autorImg}" loading="eager" />
                        <div>
                            <p class="fw-bold mb-0">${autor}</p>
                            <p class="text-muted mb-0">${date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>
        `

 }

async function page(idioma, rota) {
    const t = idioma
    let idiomaUpdates = t.lang
    if (idiomaUpdates == 'pt') {
        idiomaUpdates = 'pt-BR'
    } 
    const tags = await getTags()
    const tagsList = tags.map(tag => {
        return `<option value="${tag.nome}">${tag.nome}</option>
        `
    }).join('')

    const posts = await mapPosts()

    const createCards = posts.map(post => {
        return genCard(post.titulo,post.data, post.image, post.desc, post.autor, post.pictureUrl, post.tag1, post.tag2, post.tag3)
    }).join('')
    return `
<!DOCTYPE html>
<html lang="${t.lang}" data-bs-theme="dark">
${head(`${t.lang}${rota}`,`Blog`,"Fique por dentro de todas as novidades do mundo da tecnologia e inovação.")}
<body>
    <input type="text" id="json_posts" value='${JSON.stringify(posts)}' hidden>
    ${nav(t, rota)}
    <section id="inicio" style="background: url('/static/img/paterns/quadrado.svg') top / auto repeat-x;">
    <div class="container py-4 py-xl-5">
        <div>
            <h1 class="fw-bold text-center d-flex justify-content-center align-items-center justify-content-md-center mt-3" style="font-family: 'PT Sans', sans-serif;">Arkanus Apps</h1>
            <p class="d-flex justify-content-center align-items-center justify-content-md-center">Blog Single Column We write stuff from time to time that might be interesting 🤷‍‍</p>
        </div>
    </div>
    </section>
    <section>
    <div class="container mt-5">
        <div class="row mb-3">
            <div class="col-lg-10 col-xl-7 flex-grow-1 mb-1">
                <form class="d-flex flex-grow-1 flex-fill"><input class="form-control mx-1" id="searchInput" type="text" placeholder="Pesquise Projetos" /><select id="tagsSelect" class="form-select mx-1">
                        <option value="1000" selected>Selecione Categoria</option>
                        ${tagsList}
                    </select></form>
            </div>
            <div class="col-lg-2 col-xl-1 d-flex d-sm-flex d-md-flex flex-grow-1 justify-content-end align-items-end justify-content-sm-end align-items-sm-end justify-content-md-end align-items-md-end mb-1"><button id="searchBtn" class="btn btn-primary flex-grow-1 mx-1" type="submit">Pesquisar</button></div>
            </div>
</section>
<div class="container py-4 py-xl-5">
    <div id="postsContainer" class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
        ${createCards}
    </div>
</div>

    ${footer(t,rota)}
    ${scripts}
    <script src='/static/js/blog.js' async></script>


</body>
</html>
`
}

module.exports = {
    page
}

