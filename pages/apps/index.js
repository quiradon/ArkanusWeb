const {nav, footer} = require('../../components/navbar')
const scripts = require('../../components/bootscripts')
const {head} = require('../../components/head')
const {idiomaR} = require('../../caminho')


function card(nome, desc, text, url, img) {
    return `
        <a href="${url}" class="text-decoration-none no-link-style" target="_blank">
            <div class="ShadowHover HoverGrowS p-4 rounded">
                <div class="d-flex flex-column flex-grow-1 flex-lg-row">
                    <div class="col-md-4 me-lg-3">
                        <img class="rounded img-fluid w-100 mb-3 mb-lg-0" src="${img}" loading="auto" />
                    </div>
                    <div class="d-flex flex-column col-lg-6">
                        <h3 class="text m-0">${nome}</h3>
                        <h5 class="text-muted mb-2">${desc}</h5>
                        <p class="mb-3 lead">${text}</p>
                    </div>
                </div>
            </div>
        </a>
    `;
}

function page(idioma, rota) {
    const t = idioma
    let idiomaUpdates = t.lang
    if (idiomaUpdates == 'pt') {
        idiomaUpdates = 'pt-BR'
    } 
    const lang = idiomaR(t)
    return `
<!DOCTYPE html>
<html lang="${t.lang}" data-bs-theme="light">
${head(`${t.lang}${rota}`,`Projetos`,`Conheça aqui alguns dos projetos que fizeram parte de nossa trajetoria.`)}
<body>
    ${nav(t, rota)}

<section id="inicio" style="background: url('/static/img/paterns/quadrado.svg') top / auto repeat-x;">
    <div class="container py-4 py-xl-5">
        <div>
            <h1 class="fw-bold text-center d-flex justify-content-center align-items-center justify-content-md-center mt-3" style="font-family: 'PT Sans', sans-serif;">Projetos</h1>
            <p class="d-flex justify-content-center align-items-center lead justify-content-md-center">Conhe‍‍ça aqui alguns dos projetos que fizeram parte de nossa trajetoria.</p>
        </div>
    </div>
</section>
<div class="container py-4 py-xl-5">
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col-md-12 col-lg-12 col-xl-12">
        
        ${card("Money Strike","Discord App","Um dos melhores Bots de Economia do Discord, que está passando por uma re-fatoração e re-lançamento nos proxímos meses, trazendo um novo visual e uma nova abordagem ao projeto!","https://moneystrike.xyz/","/static/img/apps/MoneytSrike.avif")}
        ${card("Yoshimia Bot","Discord App","Plante, colha e construa sua própria Historia! Descubra um leque de profissões, cada uma com seus próprios desafios e recompensas. Mergulhe em um mundo cheio de possibilidades, com inúmeras maneiras de jogar, criando sua própria aventura!","https://discord.gg/x8HBKuxgF7","/static/img/apps/Yoshimia.avif")}
        ${card("Dream Team","Website","Imagine um universo onde você pode gerenciar seu próprio time de futebol, disputando partidas emocionantes e construindo uma dinastia de craques. Esse é o poder transformador do nosso simulador de futebol brasileiro.","https://dreamteam.futbol/","/static/img/apps/dreamteam.avif")}

        </div>
    </div>
</div>
    ${footer(t,rota)}
    ${scripts}
</body>
</html>
`
}

module.exports = {
    page
}