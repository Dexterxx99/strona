document.getElementById('video-options').addEventListener('change', function() {
    const videoLinks = document.getElementById('video-links');
    const seasonContainer = document.getElementById('season-container');
    const episodeContainer = document.getElementById('episode-container');
    const selectedValue = this.value;

    videoLinks.innerHTML = ''; // Czyści poprzednie linki
    seasonContainer.style.display = 'none';
    episodeContainer.style.display = 'none';

    if (selectedValue === 'lego-nexo-knights' || selectedValue === 'slugterra' || selectedValue === 'generator-rex') {
        const seasonSelect = document.getElementById('season-options');
        seasonSelect.innerHTML = ''; // Czyści poprzednie sezony

        const seasons = selectedValue === 'lego-nexo-knights' || selectedValue === 'slugterra'
            ? ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4']
            : ['Sezon 1', 'Sezon 2', 'Sezon 3'];

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
        },
        'slugterra': {
            'season1': Array.from({ length: 13 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 16 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length: 13 }, (_, i) => `Odcinek ${i + 1}`)
        },
        'generator-rex': {
            'season1': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`)
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

        // Automatycznie wyświetl pierwszy odcinek po załadowaniu
        if (episodeSelect.options.length > 0) {
            episodeSelect.value = episodeSelect.options[0].value;
            episodeSelect.dispatchEvent(new Event('change'));
        }
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
                // Dodaj pozostałe odcinki
                'odcinek-10': 'https://www.youtube.com/watch?v=example10'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example11',
                // Dodaj pozostałe odcinki
                'odcinek-10': 'https://www.youtube.com/watch?v=example20'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example21',
                // Dodaj pozostałe odcinki
                'odcinek-10': 'https://www.youtube.com/watch?v=example30'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example31',
                // Dodaj pozostałe odcinki
                'odcinek-10': 'https://www.youtube.com/watch?v=example40'
            }
        },
        'slugterra': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example41',
                // Dodaj pozostałe odcinki
                'odcinek-13': 'https://www.youtube.com/watch?v=example53'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example54',
                // Dodaj pozostałe odcinki
                'odcinek-16': 'https://www.youtube.com/watch?v=example69'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example70',
                // Dodaj pozostałe odcinki
                'odcinek-10': 'https://www.youtube.com/watch?v=example79'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example80',
                // Dodaj pozostałe odcinki
                'odcinek-13': 'https://www.youtube.com/watch?v=example92'
            }
        },
        'generator-rex': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example93',
                // Dodaj pozostałe odcinki
                'odcinek-20': 'https://www.youtube.com/watch?v=example112'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example113',
                // Dodaj pozostałe odcinki
                'odcinek-20': 'https://www.youtube.com/watch?v=example132'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example133',
                // Dodaj pozostałe odcinki
                'odcinek-20': 'https://www.youtube.com/watch?v=example153'
            }
        }
    };

    return urls[series] && urls[series][season] ? urls[series][season][episode] || '#' : '#'; // Zwraca '#' jeśli URL nie istnieje
}
