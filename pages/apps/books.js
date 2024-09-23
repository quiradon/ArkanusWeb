const {nav, footer} = require('../../components/navbar')
const scripts = require('../../components/bootscripts')
const {head} = require('../../components/head')
const {idiomaR} = require('../../caminho')
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
${head(`${t.lang}${rota}`,"Book Database","Um software de gerenciamento de bibliotecas de livros Open Source oferece uma solução flexível e acessível para instituições que buscam organizar e administrar suas coleções de forma eficiente e simplificada.","/static/img/apps/Frame 1.webp")}
<body>
    ${nav(t, rota)}

<section>
    <div class="container py-4">
        <div class="row gy-4 gy-md-0">
            <div class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div style="max-width: 500px;">
                    <h2 class="text-uppercase fw-bold">Arkan - book DB</h2>
                    <p class="my-3">Um software de gerenciamento de bibliotecas de livros Open Source oferece uma solução flexível e acessível para instituições que buscam organizar e administrar suas coleções de forma eficiente e simplificada.</p><a class="btn btn-primary btn-lg d-inline-flex align-items-center align-content-center align-self-center align-items-xl-center me-2 mb-2 HoverGrow" role="button" href="#Download"><svg class="d-inline-flex me-2" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>Fazer Download</a><a class="btn btn-outline-link btn-lg border rounded border-1 d-inline-flex justify-content-center align-items-center align-self-center mb-2 HoverGrow" role="button" href="https://github.com/quiradon/Book-Database-Software" target="_blank" rel="external"><svg class="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="-8 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>Acessar Codigo Fonte</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-xl-3 m-xl-3"><img class="rounded img-fluid w-100 fit-cover p-5" style="backdrop-filter: grayscale(0%);overflow: clip;" src="/static/img/apps/books/icon.webp" width="354" height="300" /></div>
            </div>
        </div>
        <section>
            <div class="container h-100 position-relative" style="top: -50px;">
                <div class="row gy-5 gy-lg-0 row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 pt-5">
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"></path>
                                    </svg></div>
                                <h4 class="card-title">Estatísticas</h4>
                                <h6 class="text-muted card-subtitle mb-2">Obtenha métricas </h6>
                                <p class="card-text">Tenha acesso de forma pratica e fácil, quantos livros, quantos leitores, quantos empréstimos e muito mais.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
                                    </svg></div>
                                <h4 class="card-title">Database Local</h4>
                                <h6 class="text-muted card-subtitle mb-2">100% Offline</h6>
                                <p class="card-text">O Sistema funciona 100% offline, não precisa de internet para acessar o sistema. Mais estabilidade e menos imprevistos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                                    </svg></div>
                                <h4 class="card-title">Acervo Inteligente</h4>
                                <h6 class="text-muted card-subtitle mb-2">Organize sua Biblioteca com maestria</h6>
                                <p class="card-text">Pesquise e filtre seus livros, leitores e empréstimos de forma direta e simplificada.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                        <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
                                    </svg></div>
                                <h4 class="card-title">Serverless</h4>
                                <h6 class="text-muted card-subtitle mb-2">Não precisa de um servidor</h6>
                                <p class="card-text">O App roda diretamente na maquina instalada, sem a necessidade de gastos com estruturas complexas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                        <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"></path>
                                    </svg></div>
                                <h4 class="card-title">Design Simplificado</h4>
                                <h6 class="text-muted card-subtitle mb-2">Interface pensada no usuário </h6>
                                <p class="card-text">Interface moderna e simplificada, diga adeus as interfaces da década de 50 e abrace a modernidade!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex mb-2">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center  mb-3 bs-icon lg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                                        <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"></path>
                                    </svg></div>
                                <h4 class="card-title">Open Source</h4>
                                <h6 class="text-muted card-subtitle mb-2">Software 100% gratuito e de código aberto.</h6>
                                <p class="card-text">Código fonte disponível no GitHub para estudo e analise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
<section id="Download" class="d-flex d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-center mb-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-center">Baixar Programa</h1>
                <p class="text-center">Selecione a Plataforma a qual deseja baixar o Arkan BookDB</p>
                <div class="d-flex d-sm-flex d-md-flex d-xl-flex d-xxl-flex flex-column justify-content-center align-items-center justify-content-sm-center flex-md-row justify-content-md-center flex-lg-row flex-xl-row justify-content-xl-center flex-xxl-row justify-content-xxl-center mb-5 pb-5"><a class="btn btn-primary btn-lg me-2 mb-2" role="button" href="https://github.com/quiradon/Book-Database-Software/raw/main/download/book-db-win32-x64.7z"><svg class="d-inline-flex align-items-xxl-center me-2" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                            <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                        </svg>Windows</a></div>
            </div>
        </div>
    </div>
</section>
<section id="Download-1" class="d-flex d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-center mb-5 pb-5">
    <div class="container d-flex flex-column align-items-center py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-lg-12 col-xl-12 text-center mx-auto">
                <h2>Imagens</h2>
            </div>
        </div>
        <div class="col d-flex flex-column flex-shrink-1 overflow-scroll"><img class="img-fluid mb-3" src="/static/img/apps/books/1.webp" /><img class="img-fluid mb-3" src="/static/img/apps/books/2.webp" /><img class="img-fluid mb-3" src="/static/img/apps/books/3.webp" /></div>
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