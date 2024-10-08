const {nav, footer} = require('../components/navbar')
const scripts = require('../components/bootscripts')
const {head} = require('../components/head')
const {idiomaR} = require('../caminho')


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
${head(`${t.lang}${rota}`,`${t.PageNotFound.title}`,t.PageNotFound.desc)}
<body>
    ${nav(t, rota)}

    <section class="mb-5 pb-5">
    <div class="container mt-5 pt-5 mb-5 pb-5">
        <h1 class="display-1 fw-bold text-center text-primary pt-5 mt-5">404</h1>
        <p class="text-capitalize fs-4 text-center">${t.PageNotFound.title}</p>
        <div class="d-flex justify-content-center"><a class="btn btn-primary" role="button" href="${lang}/">${t.PageNotFound.btn}</a></div>
    </div>
</section>
    ${footer(t,rota)}
    ${scripts}
</body>
</html>
`
}

module.exports = {
    page
}