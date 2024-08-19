document.getElementById('video-options').addEventListener('change', function() {
    const videoLinks = document.getElementById('video-links');
    const selectedValue = this.value;

    videoLinks.innerHTML = '';  // Czyści poprzednie linki

    let episodes = [];
    if (selectedValue === 'Jezdzcy smokow') {
        episodes = ['Odcinek 1', 'Odcinek 2', 'Odcinek 3'];
    } else if (selectedValue === 'serial2') {
        episodes = ['Odcinek 1', 'Odcinek 2'];
    } else if (selectedValue === 'film') {
        episodes = ['Wersja reżyserska', 'Wersja kinowa'];
    }

    episodes.forEach(function(episode) {
        const link = document.createElement('a');
        link.href = getVideoUrl(selectedValue, episode.toLowerCase().replace(/\s/g, '-'));
        link.textContent = episode;
        link.target = '_blank';  // Otwiera link w nowej karcie
        videoLinks.appendChild(link);
    });

    if (videoLinks.children.length > 0) {
        videoLinks.style.display = 'block';
    }
});

function getVideoUrl(series, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'Jezdzcy smokow': {
            'odcinek-1': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',  // Zamień na odpowiednie VIDEO_ID
            'odcinek-2': 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
            'odcinek-3': 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ'
        },
        'serial2': {
            'odcinek-1': 'https://www.youtube.com/watch?v=VGCEWAZV3zY',
            'odcinek-2': 'https://www.youtube.com/watch?v=tVj0ZTS4WF4'
        },
        'film': {
            'wersja-rezyserska': 'https://www.youtube.com/watch?v=VGCEWAZV3zY',
            'wersja-kinowa': 'https://www.youtube.com/watch?v=tVj0ZTS4WF4'
        }
    };

    return urls[series] ? urls[series][episode] || '' : '';
}
