const {idiomaR, roteador} = require('../caminho')

function themeSwitcher() {
    return `                    <li class="nav-item d-flex aling-center"><a id="theme-switch" class="nav-link d-xxl-flex justify-content-xxl-center align-items-xxl-center active" href="#"><svg id="light-icon" class="me-1 hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
            <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
        </svg><svg id="dark-icon" class="me-1 hiden" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
        </svg></a></li>
                </li>`
}

function langSwitch(rota) {
    return `
                        </li>
                <li class="nav-item dropdown auto-open"><a class="nav-link d-flex d-xxl-flex align-items-center justify-content-xxl-center align-items-xxl-center" aria-expanded="false" data-bs-toggle="dropdown" href="#"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"></path>
                        </svg>Idioma<svg class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="-96 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                        </svg></a>
                    <div class="dropdown-menu shadow"><a class="dropdown-item d-flex justify-content-xl-start align-items-xl-start" href="${rota}" data-bs-target="${rota}"><span><img class="img-fluid me-2" src="/static/img/flags/br.svg" width="25" height="25" />Português</span></a></div>
                </li>
                `
}

function nav(t,rota) {

    let lang = idiomaR(t)
    rota = roteador(rota)

    return `<nav class="navbar navbar-expand-lg border-primary-subtle shadow py-2 px-md-5 border border-top-0 border-end-0 border-start-0">
    <div class="container-fluid"><a class="navbar-brand fs-2 fw-bold d-flex align-items-center" href="/#"><span class="fs-2 fw-bold" style="font-family: Roboto, sans-serif;"><span class="fw-bold text-primary">A</span>rkanus</span></a><button class="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div id="navcol-2" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link d-flex align-items-center justify-content-xl-center justify-content-xxl-center active" href="/#inicio"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                        </svg>Inicio</a></li>
                <li class="nav-item d-flex d-xl-flex"><a class="nav-link d-flex align-items-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center active" href="/about"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
                        </svg>Sobre</a></li>
               <li class="nav-item dropdown auto-open animations-select"><a class="nav-link d-xxl-flex justify-content-xxl-center align-items-xxl-center" aria-expanded="true" data-bs-toggle="dropdown" href="#"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
            <path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"></path>
        </svg>Projetos<svg class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="-96 0 512 512" width="1em" height="1em" fill="currentColor">
            <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
        </svg></a>
    <div class="dropdown-menu shadow" data-bs-popper="none"><a class="dropdown-item d-flex justify-content-sm-start" href="https://rpg.arkanus.app" rel="help" data-bs-target="https://rpg.arkanus.app">
            <div class="d-flex justify-content-center align-items-center m-2"><svg class="fs-1 text-danger border rounded border-0 p-2 fme-2 nav_icon_background me-2" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z"></path>
                </svg>
                <div class="d-flex flex-column"><span class="focus-ring focus-ring-primary fs-5">Mini Kraken</span><span class="lh-0">Ferramenta auxiliadora de RPG de mesa.</span></div>
            </div>
        </a><a class="dropdown-item d-flex justify-content-sm-start" href="/apps/books.html" rel="help" data-bs-target="https://nutri.arkanus.app">
            <div class="d-flex justify-content-center align-items-center m-2"><svg class="fs-1 text-primary border rounded border-0 p-2 me-2 nav_icon_background" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                </svg>
                <div class="d-flex flex-column"><span class="focus-ring focus-ring-primary fs-5">Book Database </span><span class="lh-0">App para gerenciar Acervos Literários</span></div>
            </div>
        </a><a class="dropdown-item d-flex justify-content-sm-start" href="https://nutri.arkanus.app" rel="help" data-bs-target="https://nutri.arkanus.app">
            <div class="d-flex justify-content-center align-items-center m-2"><svg class="fs-1 text-success border rounded border-0 p-2 me-2 nav_icon_background" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                </svg>
                <div class="d-flex flex-column"><span class="focus-ring focus-ring-primary fs-5">Ferramenta Nutricional</span><span class="lh-0">Uma calculadora de Gasto Energetico.</span></div>
            </div>
        </a><a class="dropdown-item d-flex justify-content-sm-start" href="https://nutri.arkanus.app" rel="help" data-bs-target="https://nutri.arkanus.app">
            <div class="d-flex justify-content-center align-items-center m-2"><svg class="fs-1 border rounded border-0 p-2 me-2 nav_icon_background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"></path>
                </svg>
                <div class="d-flex flex-column"><span class="focus-ring focus-ring-primary fs-5">Todos os Projetos</span><span class="lh-0">Lista completa de todos os Projetos</span></div>
            </div>
        </a></div>
</li>
                <li class="nav-item"><a class="nav-link d-xxl-flex justify-content-xxl-center align-items-xxl-center active" href="/blog"><svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                            <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"></path>
                        </svg>Blog</a>
                ${langSwitch(rota)}
                ${themeSwitcher()}
            </ul><a class="btn btn-primary" role="button" href="https://www.instagram.com/direct/t/17847127176019261" target="_blank" rel="author">Orçamentos</a>
        </div>
    </div>
</nav>`
}

function footer(t, rota) {
    
    let lang = idiomaR(t)
    rota = roteador(rota)
    return `<footer>
    <div class="container py-4 py-lg-5">
        <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <b class="fs-6 mb-0 pb-0">${t.footer.util} </b>
                <ul class="list-unstyled">
                    <li><a href="https://rpg.arkanus.app">${t.footer.start}</a></li>
                    <li><a href="https://rpg.arkanus.app/sitemap.xml">${t.footer.map}</a></li>
                    <li></li>
                </ul>
            </div>
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <b class="fs-6 mb-0 pb-0">${t.footer.about}</b>
                <ul class="list-unstyled">
                    <li><a href="https://arkanus.app/team">${t.footer.team}</a></li>
                    <li><a href="https://arkanus.app/quest">${t.footer.quest}</a></li>
                    <li></li>
                </ul>
            </div> 
            <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                <b class="fs-6 mb-0 pb-0">${t.footer.legal}</b>
                <ul class="list-unstyled">
                    <li><a href="${lang}/tos">${t.footer.tos}</a></li>
                    <li><a href="${lang}/privacy">${t.footer.priv}</a></li>
                    <li></li>
                </ul>
            </div>
            <div class="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                <div class="fw-bold d-flex align-items-center"><img alt="Logo From Arkanus in Pink and Blue Gradient" width="30" height="30" src="/static/img/icons/pink.svg" /><span class="ms-2">Powered by Arkanus</span></div>
                <p class="text-muted copyright">${t.footer.arkanus.desc}</p>
            </div>
        </div>
        <hr class="text-primary" />
        <div class="d-flex justify-content-between align-items-center pt-3">
            <p class="text-muted mb-0">Arkanus.app</p>
            <ul class="list-inline mb-0">
                <li class="list-inline-item"><a aria-label="Fortuna Twitter Icon" title="twitter" alt="Twitter" href="https://twitter.com/MiniKrakenBOT"><svg class="text-primary" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg></a></li>
                <li class="list-inline-item"><a aria-label="Fortuna Tiktok Link" title="Tiktok" alt="TikTok" href="https://www.tiktok.com/@minikrakenbot"><svg class="text-primary" xmlns="https://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                        </svg></a></li>
                <li class="list-inline-item"><a aria-label="Fortuna Instagram link" title="instagram" alt="Instagram" href="https://www.instagram.com/una_rpg/"><svg class="text-primary" xmlns="https://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg></a></li>
            </ul>
        </div>
    </div>
</footer>`
}

module.exports = {
    nav, footer
}