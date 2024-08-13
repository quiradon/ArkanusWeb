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
        <a href="https://arkanus.app/blog/${postUrl}" class="link-unstyled">
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

//os posts estão dentro do input com id json_posts

const posts = JSON.parse(document.getElementById('json_posts').value);

//& Enviar Submit nas requests
document.getElementById('searchBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    const tagsSelect = document.getElementById('tagsSelect').value;
    let currentUrl = window.location.href;
    currentUrl = currentUrl.split('?')[0];
    const newUrl = `${currentUrl}?input=${encodeURIComponent(searchInput)}&tag=${encodeURIComponent(tagsSelect)}`;
    window.location.href = newUrl;
});
document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput').value;
        const tagsSelect = document.getElementById('tagsSelect').value;
        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('?')[0];
        const newUrl = `${currentUrl}?input=${encodeURIComponent(searchInput)}&tag=${encodeURIComponent(tagsSelect)}`;
        window.location.href = newUrl;
    }
})

//CASO TENHA NA URL UMA REQUISIÇÃO DEFINA NOS CAMPOS OS VALORES
if (window.location.search) {
    const urlParams = new URLSearchParams(window.location.search);
    const input = urlParams.get('input');
    const tag = urlParams.get('tag');

    const searchInputElement = document.getElementById('searchInput');
    const tagsSelectElement = document.getElementById('tagsSelect');
    const postsContainer = document.getElementById('postsContainer');

    if (input && searchInputElement) {
        searchInputElement.value = input;
    }
    if (tag && tagsSelectElement) {
        tagsSelectElement.value = tag;
    }

    if (searchInputElement && tagsSelectElement && postsContainer) {
        const searchInputValue = searchInputElement.value.toLowerCase();
        const selectedTag = tagsSelectElement.value;

        const filteredPosts = posts.filter(post => {
            const tags = [post.tag1, post.tag2, post.tag3].filter(tag => tag !== null);
            const postTitle = post.titulo ? post.titulo.toLowerCase() : '';
            const postDesc = post.desc ? post.desc.toLowerCase() : '';

            const postHasTag = tags.includes(selectedTag);
            const postHasInput = postTitle.includes(searchInputValue) || postDesc.includes(searchInputValue);

            if (selectedTag === '1000') {
                return postHasInput;
            }
            if (searchInputValue === '') {
                return postHasTag;
            }
            return postHasTag || postHasInput;
        });

        postsContainer.innerHTML = '';
        filteredPosts.forEach(post => {
            postsContainer.innerHTML += genCard(post.titulo, post.data, post.image, post.desc, post.autor, post.pictureUrl, post.tag1, post.tag2, post.tag3);
        });

        console.log(filteredPosts);
    }
}



