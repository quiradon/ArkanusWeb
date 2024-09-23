const {nav, footer} = require('../../components/navbar')
const scripts = require('../../components/bootscripts')
const {head} = require('../../components/head')
const {idiomaR} = require('../../caminho')


function card(nome,desc,text,url,img) {
    return `
     <div class="card m-2">
                <div class="card-body d-flex flex-column flex-grow-1 flex-sm-column flex-md-column flex-lg-row"><img class="rounded img-fluid d-flex flex-grow-1 flex-fill me-md-3" width="380" height="248" src="${img}" loading="auto" />
                    <div class="d-flex flex-column">
                        <h4>${nome}</h4>
                        <h6 class="text-muted mb-2">${desc}</h6>
                        <p class="mb-3">${text}</p>
                        <div class="d-lg-flex d-xl-flex d-xxl-flex justify-content-lg-end justify-content-xl-end justify-content-xxl-end">
                            <button class="btn btn-primary btn-lg" type="button" onclick="window.open('${url}', '_blank')">Acessar Website</button>
                        </div>
                    </div>
                </div>
            </div>
            `
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
            <p class="d-flex justify-content-center align-items-center justify-content-md-center">Conhe‍‍ça aqui alguns dos projetos que fizeram parte de nossa trajetoria.</p>
        </div>
    </div>
</section>
<div class="container py-4 py-xl-5">
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col-md-12 col-lg-12 col-xl-12">
           
        ${card("Dream Team","Website","Imagine um universo onde você pode gerenciar seu próprio time de futebol, disputando partidas emocionantes e construindo uma dinastia de craques. Esse é o poder transformador do nosso simulador de futebol brasileiro.","https://dreamteam.futbol/","/static/img/apps/dreamteam.png")}

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