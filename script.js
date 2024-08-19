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
        },
        'slugterra': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example41',
                'odcinek-2': 'https://www.youtube.com/watch?v=example42',
                'odcinek-3': 'https://www.youtube.com/watch?v=example43',
                'odcinek-4': 'https://www.youtube.com/watch?v=example44',
                'odcinek-5': 'https://www.youtube.com/watch?v=example45',
                'odcinek-6': 'https://www.youtube.com/watch?v=example46',
                'odcinek-7': 'https://www.youtube.com/watch?v=example47',
                'odcinek-8': 'https://www.youtube.com/watch?v=example48',
                'odcinek-9': 'https://www.youtube.com/watch?v=example49',
                'odcinek-10': 'https://www.youtube.com/watch?v=example50',
                'odcinek-11': 'https://www.youtube.com/watch?v=example51',
                'odcinek-12': 'https://www.youtube.com/watch?v=example52',
                'odcinek-13': 'https://www.youtube.com/watch?v=example53'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example54',
                'odcinek-2': 'https://www.youtube.com/watch?v=example55',
                'odcinek-3': 'https://www.youtube.com/watch?v=example56',
                'odcinek-4': 'https://www.youtube.com/watch?v=example57',
                'odcinek-5': 'https://www.youtube.com/watch?v=example58',
                'odcinek-6': 'https://www.youtube.com/watch?v=example59',
                'odcinek-7': 'https://www.youtube.com/watch?v=example60',
                'odcinek-8': 'https://www.youtube.com/watch?v=example61',
                'odcinek-9': 'https://www.youtube.com/watch?v=example62',
                'odcinek-10': 'https://www.youtube.com/watch?v=example63',
                'odcinek-11': 'https://www.youtube.com/watch?v=example64',
                'odcinek-12': 'https://www.youtube.com/watch?v=example65',
                'odcinek-13': 'https://www.youtube.com/watch?v=example66',
                'odcinek-14': 'https://www.youtube.com/watch?v=example67',
                'odcinek-15': 'https://www.youtube.com/watch?v=example68',
                'odcinek-16': 'https://www.youtube.com/watch?v=example69'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example70',
                'odcinek-2': 'https://www.youtube.com/watch?v=example71',
                'odcinek-3': 'https://www.youtube.com/watch?v=example72',
                'odcinek-4': 'https://www.youtube.com/watch?v=example73',
                'odcinek-5': 'https://www.youtube.com/watch?v=example74',
                'odcinek-6': 'https://www.youtube.com/watch?v=example75',
                'odcinek-7': 'https://www.youtube.com/watch?v=example76',
                'odcinek-8': 'https://www.youtube.com/watch?v=example77',
                'odcinek-9': 'https://www.youtube.com/watch?v=example78',
                'odcinek-10': 'https://www.youtube.com/watch?v=example79'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example80',
                'odcinek-2': 'https://www.youtube.com/watch?v=example81',
                'odcinek-3': 'https://www.youtube.com/watch?v=example82',
                'odcinek-4': 'https://www.youtube.com/watch?v=example83',
                'odcinek-5': 'https://www.youtube.com/watch?v=example84',
                'odcinek-6': 'https://www.youtube.com/watch?v=example85',
                'odcinek-7': 'https://www.youtube.com/watch?v=example86',
                'odcinek-8': 'https://www.youtube.com/watch?v=example87',
                'odcinek-9': 'https://www.youtube.com/watch?v=example88',
                'odcinek-10': 'https://www.youtube.com/watch?v=example89',
                'odcinek-11': 'https://www.youtube.com/watch?v=example90',
                'odcinek-12': 'https://www.youtube.com/watch?v=example91',
                'odcinek-13': 'https://www.youtube.com/watch?v=example92'
            }
        },
        'generator-rex': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example93',
                'odcinek-2': 'https://www.youtube.com/watch?v=example94',
                'odcinek-3': 'https://www.youtube.com/watch?v=example95',
                'odcinek-4': 'https://www.youtube.com/watch?v=example96',
                'odcinek-5': 'https://www.youtube.com/watch?v=example97',
                'odcinek-6': 'https://www.youtube.com/watch?v=example98',
                'odcinek-7': 'https://www.youtube.com/watch?v=example99',
                'odcinek-8': 'https://www.youtube.com/watch?v=example100',
                'odcinek-9': 'https://www.youtube.com/watch?v=example101',
                'odcinek-10': 'https://www.youtube.com/watch?v=example102',
                'odcinek-11': 'https://www.youtube.com/watch?v=example103',
                'odcinek-12': 'https://www.youtube.com/watch?v=example104',
                'odcinek-13': 'https://www.youtube.com/watch?v=example105',
                'odcinek-14': 'https://www.youtube.com/watch?v=example106',
                'odcinek-15': 'https://www.youtube.com/watch?v=example107',
                'odcinek-16': 'https://www.youtube.com/watch?v=example108',
                'odcinek-17': 'https://www.youtube.com/watch?v=example109',
                'odcinek-18': 'https://www.youtube.com/watch?v=example110',
                'odcinek-19': 'https://www.youtube.com/watch?v=example111',
                'odcinek-20': 'https://www.youtube.com/watch?v=example112'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example113',
                'odcinek-2': 'https://www.youtube.com/watch?v=example114',
                'odcinek-3': 'https://www.youtube.com/watch?v=example115',
                'odcinek-4': 'https://www.youtube.com/watch?v=example116',
                'odcinek-5': 'https://www.youtube.com/watch?v=example117',
                'odcinek-6': 'https://www.youtube.com/watch?v=example118',
                'odcinek-7': 'https://www.youtube.com/watch?v=example119',
                'odcinek-8': 'https://www.youtube.com/watch?v=example120',
                'odcinek-9': 'https://www.youtube.com/watch?v=example121',
                'odcinek-10': 'https://www.youtube.com/watch?v=example122',
                'odcinek-11': 'https://www.youtube.com/watch?v=example123',
                'odcinek-12': 'https://www.youtube.com/watch?v=example124',
                'odcinek-13': 'https://www.youtube.com/watch?v=example125',
                'odcinek-14': 'https://www.youtube.com/watch?v=example126',
                'odcinek-15': 'https://www.youtube.com/watch?v=example127',
                'odcinek-16': 'https://www.youtube.com/watch?v=example128',
                'odcinek-17': 'https://www.youtube.com/watch?v=example129',
                'odcinek-18': 'https://www.youtube.com/watch?v=example130',
                'odcinek-19': 'https://www.youtube.com/watch?v=example131',
                'odcinek-20': 'https://www.youtube.com/watch?v=example132'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example133',
                'odcinek-2': 'https://www.youtube.com/watch?v=example134',
                'odcinek-3': 'https://www.youtube.com/watch?v=example135',
                'odcinek-4': 'https://www.youtube.com/watch?v=example136',
                'odcinek-5': 'https://www.youtube.com/watch?v=example137',
                'odcinek-6': 'https://www.youtube.com/watch?v=example138',
                'odcinek-7': 'https://www.youtube.com/watch?v=example139',
                'odcinek-8': 'https://www.youtube.com/watch?v=example140',
                'odcinek-9': 'https://www.youtube.com/watch?v=example141',
                'odcinek-10': 'https://www.youtube.com/watch?v=example142',
                'odcinek-11': 'https://www.youtube.com/watch?v=example143',
                'odcinek-12': 'https://www.youtube.com/watch?v=example144',
                'odcinek-13': 'https://www.youtube.com/watch?v=example145',
                'odcinek-14': 'https://www.youtube.com/watch?v=example146',
                'odcinek-15': 'https://www.youtube.com/watch?v=example147',
                'odcinek-16': 'https://www.youtube.com/watch?v=example148',
                'odcinek-17': 'https://www.youtube.com/watch?v=example149',
                'odcinek-18': 'https://www.youtube.com/watch?v=example150',
                'odcinek-19': 'https://www.youtube.com/watch?v=example151'
                'odcinek-20': 'https://www.youtube.com/watch?v=example152'
            }
        }
    };

    return urls[series] && urls[series][season] ? urls[series][season][episode] || '#' : '#'; // Zwraca '#' jeśli URL nie istnieje
}
