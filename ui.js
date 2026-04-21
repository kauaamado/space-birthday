const container = document.getElementById('result-container');

export function renderPicture(data) {
    // Se o tipo de mídia for um vídeo, insere um iframe.
    // Caso contrário, insere uma imagem.
    const mediaContent = data.media_type === 'image' 
        ? `<img class="card-image" src="${data.url}" alt="${data.title}">`
        : `<iframe class="card-video" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;

    container.innerHTML = `
        <article class="glass-card">
            <h2 class="card-title">${data.title}</h2>
            ${mediaContent}
            <p class="card-explanation">${data.explanation}</p>
        </article>
    `;
}

export function renderError(message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}