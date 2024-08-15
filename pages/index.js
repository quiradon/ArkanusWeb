const {nav, footer} = require('../components/navbar')
const scripts = require('../components/bootscripts')
const {head} = require('../components/head')
const {tag_title_paragraph} = require('../components/titles')
const {mapPosts} = require('../plugins/blog')

function genUrl(name){
    const uwu = name.toLowerCase().replace(/ /g, '-').toLowerCase()
    return `/blog/${uwu}`
}
/**
 * 
 * @param {*} idioma 
 * @returns 
 */


async function page(idioma, rota) {
    const t = idioma
    const posts = await mapPosts() //pegue apenas os 5 primeiros itens

    return `
<!DOCTYPE html>
<html lang="${t.lang}" data-bs-theme="dark">
${head(`${t.lang}${rota}`,`Inicio`,'Arkanus - Desenvolvimento de Sites e Aplicativos')}
<body>
    ${nav(t, rota)}
    ${landing()}
    ${services()}
    ${portifolio()}
    ${blog(posts)}
    ${footer(t,rota)}
        ${scripts}
    <script src='/static/js/landing-animation.js' async></script>

</body>
</html>
`
}

function landing(){
    return `
    <section id="inicio" class="bg1">
    <div class="container py-4 py-xl-5">
        <div class="row gy-4 gy-md-0 my-5 py-5">
            <div class="col-md-12 col-xl-10 col-xxl-9 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div class="mb-5">
                    <h1 class="display-1 fw-bold" style="font-family: 'PT Sans', sans-serif;">Desenvolvendo <br> <span id="animated-landing-text" class="fw-bold text-primary" style="font-family: 'PT Sans', sans-serif;"></span> para você e sua empresa<span style="color: rgb(81, 0, 255);">.</span></h1>
                    <p class="lead text-secondary -3" style="font-family: 'PT Sans', sans-serif;">Conquiste mais clientes e impulsione seu negócio com soluções inovadoras e personalizadas que atendem às suas necessidades, Tenha ao seu lado melhor que a tecnologia pode oferecer.</p>
                    <button class="btn btn-outline-primary btn-lg border-2 px-5 mb-5" type="button">Ver Projetos</button>
                </div>
            </div>
        </div>
    </div>
</section>`
}

/**
 * 
 * @param {*} name : Nome do serviço
 * @param {*} desc : Descrição do serviço
 * @param {*} img_url  : URL da imagem
 * @param {*} alt : Texto alternativo da imagem
 * @returns 
 */
function service_card(name,desc,img_url,alt,href){
    return `
      <div class="d-flex flex-grow-1 mb-1">
      <a href="${href ?? "#"}" class="text-decoration-none">
                <div class="card w-100"><img class="img-fluid card-img-top w-100 d-block card-img" alt="${alt}" src="${img_url}" />
                    <div class="d-flex flex-column card-img-overlay p-3 flex-fill">
                        <h2 class="text-light mt-auto card-title mb-0">${name}</h2>
                        <p class="text-light card-desc mb-0">${desc}</p>
                    </div>
                </div>
            </a>
            </div>`
}

function services(){
    return `
    <section class="bg2 py-5">
    <div class="container">
        <div class="mb-3">
            <h4 class="fw-semibold text-primary mb-0 mt-3">Serviços</h4>
            <h1 class="display-5 fw-bold mt-0">Conheça nossas Soluções!</h1>
        </div>
        <div class="row">
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-grow-1 mb-4">
            ${service_card("Apps","Desenvolvimento de sites, apps e automações","/static/img/misc/services/apps.avifs","Desenvolvimento Web")}
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-grow-1 mb-4">
            ${service_card("Studios","Desenvolvimento de Jogos","/static/img/misc/services/studios.avifs","Desenvolvimento Web")}
        </div>
        </div>
    </div>
</section>`
}

function portifolio() {
    return `
    <section>
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg-6 d-lg-flex align-items-lg-center">
                <div class="mb-5">
                    <h4 class="fw-semibold text-primary mb-0"><strong>Portifólio</strong></h4>
                    <h1 class="display-5 fw-bold mt-0">Conheça nossas Soluções!</h1>
                    <p class="lead text-secondary" style="font-family: 'PT Sans', sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p><button class="btn btn-outline-primary btn-lg border-2 border-primary px-5" type="button">Ver Projetos</button>
                </div>
            </div>
            <div class="col"><img class="img-fluid HoverGrow" src="/static/img/misc/services/sites.avif" /></div>
        </div>
    </div>
</section>`
}

function blog(posts) {
    return `
    <section>
    ${tag_title_paragraph("Blog","Ultimas Postagens","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ")}
    <div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-10 col-sm-12 col-md-12 col-lg-10 col-xl-6 col-xxl-6 offset-xl-0 p-1">
                     ${service_card(posts[0]?.titulo ?? "Nulo",posts[0]?.desc ?? "Nulo",posts[0]?.image ?? "/static/img/misc/services/web_development.avif",posts[0]?.titulo ?? "Nulo",genUrl(posts[0]?.titulo ?? "Nulo"))}
        </div>
        <div class="col-10 col-sm-6 col-md-6 col-lg-5 col-xl-3 col-xxl-3 offset-xl-0 d-flex flex-column p-1">
                      ${service_card(posts[1]?.titulo ?? "Nulo",posts[1]?.desc ?? "Nulo",posts[1]?.image ?? "/static/img/misc/services/web_development.avif",posts[1]?.titulo ?? "Nulo",genUrl(posts[1]?.titulo ?? "Nulo"))}
                      ${service_card(posts[2]?.titulo ?? "Nulo",posts[2]?.desc ?? "Nulo",posts[2]?.image ?? "/static/img/misc/services/web_development.avif",posts[2]?.titulo ?? "Nulo",genUrl(posts[2]?.titulo ?? "Nulo"))}
        </div>
        <div class="col-10 col-sm-6 col-md-6 col-lg-5 col-xl-3 col-xxl-3 offset-xl-0 d-flex flex-column p-1">
                       ${service_card(posts[3]?.titulo ?? "Nulo",posts[3]?.desc ?? "Nulo",posts[3]?.image ?? "/static/img/misc/services/web_development.avif",posts[3]?.titulo ?? "Nulo",genUrl(posts[3]?.titulo ?? "Nulo"))}
                       ${service_card(posts[4]?.titulo ?? "Nulo",posts[4]?.desc ?? "Nulo",posts[4]?.image ?? "/static/img/misc/services/web_development.avif",posts[4]?.titulo ?? "Nulo",genUrl(posts[4]?.titulo ?? "Nulo"))}
        </div>
    </div>
</div>



    </section>
    `
}

module.exports = {
    page
}