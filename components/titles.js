/**
 * 
 * @param {string} tag 
 * @param {string} title 
 * @param {string} text 
 * @returns 
 */
function tag_title_paragraph(tag,title, text) {
    return `
    <div class="container mb-4">
        <h4 class="fw-semibold text-primary mb-0">${tag}</h4>
        <h1 class="display-5 fw-bold mt-0">${title}</h1>
        <p class="lead text-secondary" style="font-family: 'PT Sans', sans-serif;">${text}</p>
</div>
`
}

module.exports = {
    tag_title_paragraph
}