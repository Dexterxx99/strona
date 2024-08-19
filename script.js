document.getElementById('video-options').addEventListener('change', function() {
    const videoLinks = document.getElementById('video-links');
    const seasonContainer = document.getElementById('season-container');
    const episodeContainer = document.getElementById('episode-container');
    const selectedValue = this.value;

    videoLinks.innerHTML = ''; // Czyści poprzednie linki
    seasonContainer.style.display = 'none';
    episodeContainer.style.display = 'none';

    if (selectedValue === 'serial1') {
        const seasonSelect = document.getElementById('season-options');
        seasonSelect.innerHTML = ''; // Czyści poprzednie sezony

        const seasons = ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4'];
        seasons.forEach(function(season, index) {
            const option = document.createElement('option');
            option.value = 'season' + (index + 1);
            option.textContent = season;
            seasonSelect.appendChild(option);
        });

        seasonContainer.style.display = 'block';
    } else {
        populateEpisodes(selectedValue, null);
    }
});

document.getElementById('season-options').addEventListener('change', function() {
    const selectedSeries = document.getElementById('video-options').value;
    const selectedSeason = this.value;
    populateEpisodes(selectedSeries, selectedSeason);
});

function populateEpisodes(series, season) {
    const videoLinks = document.getElementById('video-links');
    const episodeContainer = document.getElementById('episode-container');

    videoLinks.innerHTML = ''; // Czyści poprzednie linki

    const episodes = {
        'serial1': {
            'season1': ['Odcinek 1', 'Odcinek 2', 'Odcinek 3'],
            'season2': ['Odcinek 1', 'Odcinek 2'],
            'season3': ['Odcinek 1', 'Odcinek 2', 'Odcinek 3', 'Odcinek 4'],
            'season4': ['Odcinek 1', 'Odcinek 2']
        },
        'serial2': {
            'season1': ['Odcinek 1', 'Odcinek 2']
        },
        'film': {
            '': ['Wersja reżyserska', 'Wersja kinowa']
        }
    };

    const selectedEpisodes = episodes[series][season || ''];
    const episodeSelect = document.getElementById('episode-options');
    episodeSelect.innerHTML = ''; // Czyści poprzednie odcinki

    if (selectedEpisodes) {
        selectedEpisodes.forEach(function(episode) {
            const option = document.createElement('option');
            option.value = episode.toLowerCase().replace(/\s/g, '-');
            option.textContent = episode;
            episodeSelect.appendChild(option);
        });
        episodeContainer.style.display = 'block';
    } else {
        episodeContainer.style.display = 'none';
    }

    episodeSelect.addEventListener('change', function() {
        const selectedEpisode = this.value;
        videoLinks.innerHTML = ''; // Czyści poprzednie linki

        const link = document.createElement('a');
        link.href = getVideoUrl(series, selectedEpisode);
        link.textContent = this.options[this.selectedIndex].text;
        link.target = '_blank'; // Otwiera link w nowej karcie
        videoLinks.appendChild(link);

        videoLinks.style.display = 'block';
    });
}

function getVideoUrl(series, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'serial1': {
            'odcinek-1': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',  // Zamień na odpowiednie VIDEO_ID
            'odcinek-2': 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
            'odcinek-3': 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
            'odcinek-4': 'https://www.youtube.com/watch?v=8ZcmTl_1ER8'
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
