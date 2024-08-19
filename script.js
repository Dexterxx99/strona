document.getElementById('video-options').addEventListener('change', function() {
    const videoLinks = document.getElementById('video-links');
    const seasonContainer = document.getElementById('season-container');
    const episodeContainer = document.getElementById('episode-container');
    const selectedValue = this.value;

    videoLinks.innerHTML = ''; // Czyści poprzednie linki
    seasonContainer.style.display = 'none';
    episodeContainer.style.display = 'none';

    if (selectedValue === 'lego-nexo-knights') {
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

        // Automatyczne wybranie i załadowanie odcinków dla "Sezon 1"
        seasonSelect.value = 'season1';
        populateEpisodes(selectedValue, 'season1');
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
        'lego-nexo-knights': {
            'season1': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`)
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

        // Automatyczne wybranie pierwszego odcinka po załadowaniu
        episodeSelect.value = episodeSelect.options[0].value;
        episodeSelect.dispatchEvent(new Event('change'));
    } else {
        episodeContainer.style.display = 'none';
    }

    episodeSelect.addEventListener('change', function() {
        const selectedEpisode = this.value;
        videoLinks.innerHTML = ''; // Czyści poprzednie linki

        const link = document.createElement('a');
        link.href = getVideoUrl(series, season, selectedEpisode);
        link.textContent = this.options[this.selectedIndex].text;
        link.target = '_blank'; // Otwiera link w nowej karcie
        videoLinks.appendChild(link);

        videoLinks.style.display = 'block';
    });

    // Automatycznie wyświetl pierwszy odcinek, jeśli sezon został wybrany
    if (episodeSelect.options.length > 0) {
        episodeSelect.value = episodeSelect.options[0].value;
        episodeSelect.dispatchEvent(new Event('change'));
    }
}

function getVideoUrl(series, season, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'lego-nexo-knights': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example1',  // Zamień na odpowiednie VIDEO_ID
                'odcinek-2': 'https://www.youtube.com/watch?v=example2',
                'odcinek-3': 'https://www.youtube.com/watch?v=example3',
                'odcinek-4': 'https://www.youtube.com/watch?v=example4',
                'odcinek-5': 'https://www.youtube.com/watch?v=example5',
                'odcinek-6': 'https://www.youtube.com/watch?v=example6',
                'odcinek-7': 'https://www.youtube.com/watch?v=example7',
                'odcinek-8': 'https://www.youtube.com/watch?v=example8',
                'odcinek-9': 'https://www.youtube.com/watch?v=example9',
                'odcinek-10': 'https://www.youtube.com/watch?v=example10'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example11',
                'odcinek-2': 'https://www.youtube.com/watch?v=example12',
                'odcinek-3': 'https://www.youtube.com/watch?v=example13',
                'odcinek-4': 'https://www.youtube.com/watch?v=example14',
                'odcinek-5': 'https://www.youtube.com/watch?v=example15',
                'odcinek-6': 'https://www.youtube.com/watch?v=example16',
                'odcinek-7': 'https://www.youtube.com/watch?v=example17',
                'odcinek-8': 'https://www.youtube.com/watch?v=example18',
                'odcinek-9': 'https://www.youtube.com/watch?v=example19',
                'odcinek-10': 'https://www.youtube.com/watch?v=example20'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example21',
                'odcinek-2': 'https://www.youtube.com/watch?v=example22',
                'odcinek-3': 'https://www.youtube.com/watch?v=example23',
                'odcinek-4': 'https://www.youtube.com/watch?v=example24',
                'odcinek-5': 'https://www.youtube.com/watch?v=example25',
                'odcinek-6': 'https://www.youtube.com/watch?v=example26',
                'odcinek-7': 'https://www.youtube.com/watch?v=example27',
                'odcinek-8': 'https://www.youtube.com/watch?v=example28',
                'odcinek-9': 'https://www.youtube.com/watch?v=example29',
                'odcinek-10': 'https://www.youtube.com/watch?v=example30'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example31',
                'odcinek-2': 'https://www.youtube.com/watch?v=example32',
                'odcinek-3': 'https://www.youtube.com/watch?v=example33',
                'odcinek-4': 'https://www.youtube.com/watch?v=example34',
                'odcinek-5': 'https://www.youtube.com/watch?v=example35',
                'odcinek-6': 'https://www.youtube.com/watch?v=example36',
                'odcinek-7': 'https://www.youtube.com/watch?v=example37',
                'odcinek-8': 'https://www.youtube.com/watch?v=example38',
                'odcinek-9': 'https://www.youtube.com/watch?v=example39',
                'odcinek-10': 'https://www.youtube.com/watch?v=example40'
            }
        }
    };

    return urls[series] && urls[series][season] ? urls[series][season][episode] || '' : '';
}
