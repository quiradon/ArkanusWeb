const {nav, footer} = require('../components/navbar')
const scripts = require('../components/bootscripts')
const {head} = require('../components/head')
const {idiomaR} = require('../caminho')
const {tag_title_paragraph} = require('../components/titles')
function genMemberCard(name, role,arroba, img_url, instagram_url, github_url, twitter_url) {
    instagram_url = instagram_url || ''
    github_url = github_url || ''
    twitter_url = twitter_url || ''

    if (instagram_url !== '') {
        instagram_url = `<a href="${instagram_url}" target="_blank" rel="external"><svg class="text-primary team_icon_hover m-1" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg></a>`
    }

    if (github_url !== '') {
        github_url = `<a class="link-primary" href="${github_url}" target="_blank" rel="external"><svg class="text-primary team_icon_hover m-1" xmlns="http://www.w3.org/2000/svg" viewBox="-8 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg></a>`
    }

    if (twitter_url !== '') {
        twitter_url = `<a class="link-primary" href="${twitter_url}" target="_blank" rel="external"><svg class="text-primary team_icon_hover m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg></a>`
    }

    return `
      <div class="col">
                <div class="profile-card-2"><a href="https://arkanus.app/u/${name}"><img class="img-fluid img img-responsive" src="${img_url}" loading="auto" alt="Quiradon o Fundador do Mini Kraken bot" /></a>
                    <div class="profile-name"><span>${name}</span></div>
                    <div class="profile-username"><span>@${arroba}</span></div>
                    <div class="profile-tag"><span class="badge bg-primary">${role}</span></div>
                    <div class="profile-icons">
                        ${instagram_url}
                        ${github_url}
                        ${twitter_url}
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
<html lang="${t.lang}">
${head(`${t.lang}${rota}`,`Sobre`,'Conheça um pouco mais sobre a Arkanus e sua equipe')}
<body>
    ${nav(t, rota)}
    <section>
    <div class="container mt-5 pt-5 pb-5">
    ${tag_title_paragraph('Quem Somos', 'Nossa Missão', 'Arkanus não é uma empresa, mas sim um grupo de desenvolvimento - uma comunidade colaborativa de profissionais que se unem com o objetivo compartilhado de desenvolver seus projetos pessoais e ideias. Este ambiente proporciona oportunidades individuais para que cada desenvolvedor e membro tenha total independência criativa em seus projetos. Oferecemos suporte abrangente em todas as fases do processo, incluindo publicação, organização e desenvolvimento, garantindo que cada ideia seja cultivada e realizada com sucesso.')}
    </div> 
    <div class="container mb-5 pb-5">
    ${tag_title_paragraph('Equipe', 'Conheça a equipe por trás da Arkanus', 'Nossa equipe é composta por pessoas talentosas e dedicadas que trabalham juntas para criar a melhor experiência possível para você.')}

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 d-flex d-xxl-flex justify-content-center">
            ${genMemberCard('Quir', 'IU/UX', 'quiradon', '/static/img/team/Frame 7.avif', 'https://www.instagram.com/quiradon','https://github.com/quiradon','https://twitter.com/quiradon')}
            ${genMemberCard('Rinne', 'CTO','semanual','/static/img/team/Frame 8.avif', '','https://github.com/semanual')}
            ${genMemberCard('Bruno', 'CMO', 'bruno.devv_', '/static/img/team/Frame 1.avif', 'https://www.instagram.com/bruno.devv_','','https://x.com/BrunoDevv')}
            ${genMemberCard('Kelvyn','CISO & SFX','kelvyn166','/static/img/team/Frame 6.avif','','https://github.com/kelvyn166','')}
            ${genMemberCard('Luis','Artist','lu1z_n3t0','/static/img/team/Frame 2.avif')}
            ${genMemberCard('Deborah','SFX','deb86_','/static/img/team/Frame 3.avif','','','https://x.com/deb86_')}
            
        </div>
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