const container = document.getElementById('result-container');

export function renderPicture(data) {
    const template = document.getElementById('card-template');
    const clone = template.content.cloneNode(true);

    // Preenche o título
    clone.querySelector('.card-title').textContent = data.title;

    // Preenche o conteúdo de mídia (imagem ou vídeo)
    const mediaContainer = clone.querySelector('.media-container');
    if (data.media_type === 'image') {
        const img = document.createElement('img');
        img.classList.add('card-image');
        img.src = data.url;
        img.alt = data.title;
        mediaContainer.appendChild(img);
    } else {
        const iframe = document.createElement('iframe');
        iframe.classList.add('card-video');
        iframe.src = data.url;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
    }

    // Preenche a explicação
    clone.querySelector('.card-explanation').textContent = data.explanation;

    // Limpa o container e adiciona o novo card
    container.innerHTML = '';
    container.appendChild(clone);
}

export function renderError(message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}