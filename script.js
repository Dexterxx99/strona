    return urls[series]?.[season]?.[episode] || '';
}

function getEpisodesCount(season) {
    const episodesCount = {
        'season1': 10,
        'season2': 10,
        'season3': 10,
        'season4': 10,
        'season1-slugterra': 13,
        'season2-slugterra': 16,
        'season3-slugterra': 10,
        'season4-slugterra': 13,
        'season1-generator-rex': 20,
        'season2-generator-rex': 20,
        'season3-generator-rex': 20,
        'season1-jezdzcy-smokow': 20,
        'season2-jezdzcy-smokow': 20,
        'season3-jezdzcy-smokow': 13,
        'season4-jezdzcy-smokow': 13,
        'season5-jezdzcy-smokow': 13,
        'season6-jezdzcy-smokow': 13,
        'season7-jezdzcy-smokow': 13,
        'season8-jezdzcy-smokow': 13,
    };

    return episodesCount[season] || 10;
}

function updateVideoLinks(season, episode) {
    const videoLinks = document.getElementById('video-links');
    videoLinks.innerHTML = ''; // Czyści poprzednie linki

    const series = document.getElementById('video-options').value;
    const videoUrl = getVideoUrl(series, season, episode);

    if (videoUrl) {
        const link = document.createElement('a');
        link.href = videoUrl;
        link.textContent = `${episode.replace('-', ' ')} - Oglądaj teraz`;
        link.target = '_blank';
        videoLinks.appendChild(link);
    }
}

function getVideoUrl(series, season, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'lego-nexo-knights': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=7K3urTkOsQ0',
                'odcinek-2': 'https://www.youtube.com/watch?v=2HG7Q1gnKnE',
                'odcinek-3': 'https://www.youtube.com/watch?v=dJxcEtol7ZY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9sMDxGKJ4dE',
                'odcinek-5': 'https://www.youtube.com/watch?v=MgsSPvPub0c',
                'odcinek-6': 'https://www.youtube.com/watch?v=PHpMVhDkKFU',
                'odcinek-7': 'https://www.youtube.com/watch?v=QSn7qbFk4R0',
                'odcinek-8': 'https://www.youtube.com/watch?v=Z2dSKVkAvlg',
                'odcinek-9': 'https://www.youtube.com/watch?v=cqOqCFuJsuk',
                'odcinek-10': 'https://www.youtube.com/watch?v=0WVscb3O7N8'
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
                'odcinek-19': 'https://www.youtube.com/watch?v=example151',
                'odcinek-20': 'https://www.youtube.com/watch?v=example152'
            }
        },
        'jezdzcy-smokow': {
            'season1': {
                'odcinek-1': 'https://drive.google.com/file/d/1PmKhGr0b0NCrLapA-kH1a_KOjEotA9EE/view',
                'odcinek-2': 'https://drive.google.com/file/d/12bt923JUaCVa3BTbvEjSvfFeEz4jlV7f/view',
                'odcinek-3': 'https://drive.google.com/drive/folders/example14',
                'odcinek-4': 'https://drive.google.com/drive/folders/example15',
                'odcinek-5': 'https://drive.google.com/drive/folders/example16',
                'odcinek-6': 'https://drive.google.com/drive/folders/example17',
                'odcinek-7': 'https://drive.google.com/drive/folders/example18',
                'odcinek-8': 'https://drive.google.com/drive/folders/example19',
                'odcinek-9': 'https://drive.google.com/drive/folders/example20',
                'odcinek-10': 'https://drive.google.com/drive/folders/example21',
                'odcinek-11': 'https://drive.google.com/drive/folders/example22',
                'odcinek-12': 'https://drive.google.com/drive/folders/example23',
                'odcinek-13': 'https://drive.google.com/drive/folders/example24',
                'odcinek-14': 'https://drive.google.com/drive/folders/example25',
                'odcinek-15': 'https://drive.google.com/drive/folders/example26',
                'odcinek-16': 'https://drive.google.com/drive/folders/example27',
                'odcinek-17': 'https://drive.google.com/drive/folders/example28',
                'odcinek-18': 'https://drive.google.com/drive/folders/example29',
                'odcinek-19': 'https://drive.google.com/drive/folders/example30',
                'odcinek-20': 'https://drive.google.com/drive/folders/example31',
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example32',
                'odcinek-2': 'https://drive.google.com/drive/folders/example33',
                'odcinek-3': 'https://drive.google.com/drive/folders/example34',
                'odcinek-4': 'https://drive.google.com/drive/folders/example35',
                'odcinek-5': 'https://drive.google.com/drive/folders/example36',
                'odcinek-6': 'https://drive.google.com/drive/folders/example37',
                'odcinek-7': 'https://drive.google.com/drive/folders/example38',
                'odcinek-8': 'https://drive.google.com/drive/folders/example39',
                'odcinek-9': 'https://drive.google.com/drive/folders/example40',
                'odcinek-10': 'https://drive.google.com/drive/folders/example41',
                'odcinek-11': 'https://drive.google.com/drive/folders/example42',
                'odcinek-12': 'https://drive.google.com/drive/folders/example43',
                'odcinek-13': 'https://drive.google.com/drive/folders/example44',
                'odcinek-14': 'https://drive.google.com/drive/folders/example45',
                'odcinek-15': 'https://drive.google.com/drive/folders/example46',
                'odcinek-16': 'https://drive.google.com/drive/folders/example47',
                'odcinek-17': 'https://drive.google.com/drive/folders/example48',
                'odcinek-18': 'https://drive.google.com/drive/folders/example49',
                'odcinek-19': 'https://drive.google.com/drive/folders/example50',
                'odcinek-20': 'https://drive.google.com/drive/folders/example51'
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example52',
                'odcinek-2': 'https://drive.google.com/drive/folders/example53',
                'odcinek-3': 'https://drive.google.com/drive/folders/example54',
                'odcinek-4': 'https://drive.google.com/drive/folders/example55',
                'odcinek-5': 'https://drive.google.com/drive/folders/example56',
                'odcinek-6': 'https://drive.google.com/drive/folders/example57',
                'odcinek-7': 'https://drive.google.com/drive/folders/example58',
                'odcinek-8': 'https://drive.google.com/drive/folders/example59',
                'odcinek-9': 'https://drive.google.com/drive/folders/example60',
                'odcinek-10': 'https://drive.google.com/drive/folders/example61',
                'odcinek-11': 'https://drive.google.com/drive/folders/example62',
                'odcinek-12': 'https://drive.google.com/drive/folders/example63',
                'odcinek-13': 'https://drive.google.com/drive/folders/example64',
            },
            'season4': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example65',
                'odcinek-2': 'https://drive.google.com/drive/folders/example66',
                'odcinek-3': 'https://drive.google.com/drive/folders/example67',
                'odcinek-4': 'https://drive.google.com/drive/folders/example68',
                'odcinek-5': 'https://drive.google.com/drive/folders/example69',
                'odcinek-6': 'https://drive.google.com/drive/folders/example70',
                'odcinek-7': 'https://drive.google.com/drive/folders/example71',
                'odcinek-8': 'https://drive.google.com/drive/folders/example72',
                'odcinek-9': 'https://drive.google.com/drive/folders/example73',
                'odcinek-10': 'https://drive.google.com/drive/folders/example74',
                'odcinek-11': 'https://drive.google.com/drive/folders/example75',
                'odcinek-12': 'https://drive.google.com/drive/folders/example76',
                'odcinek-13': 'https://drive.google.com/drive/folders/example77'
                
            },
            'season5': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example78',
                'odcinek-2': 'https://drive.google.com/drive/folders/example79',
                'odcinek-3': 'https://drive.google.com/drive/folders/example80',
                'odcinek-4': 'https://drive.google.com/drive/folders/example81',
                'odcinek-5': 'https://drive.google.com/drive/folders/example82',
                'odcinek-6': 'https://drive.google.com/drive/folders/example83',
                'odcinek-7': 'https://drive.google.com/drive/folders/example84',
                'odcinek-8': 'https://drive.google.com/drive/folders/example85',
                'odcinek-9': 'https://drive.google.com/drive/folders/example86',
                'odcinek-10': 'https://drive.google.com/drive/folders/example87',
                'odcinek-11': 'https://drive.google.com/drive/folders/example88',
                'odcinek-12': 'https://drive.google.com/drive/folders/example89',
                'odcinek-13': 'https://drive.google.com/drive/folders/example90'
            },
            'season6': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example91',
                'odcinek-2': 'https://drive.google.com/drive/folders/example92',
                'odcinek-3': 'https://drive.google.com/drive/folders/example93',
                'odcinek-4': 'https://drive.google.com/drive/folders/example94',
                'odcinek-5': 'https://drive.google.com/drive/folders/example95',
                'odcinek-6': 'https://drive.google.com/drive/folders/example96',
                'odcinek-7': 'https://drive.google.com/drive/folders/example97',
                'odcinek-8': 'https://drive.google.com/drive/folders/example98',
                'odcinek-9': 'https://drive.google.com/drive/folders/example99',
                'odcinek-10': 'https://drive.google.com/drive/folders/example100',
                'odcinek-11': 'https://drive.google.com/drive/folders/example101',
                'odcinek-12': 'https://drive.google.com/drive/folders/example102',
                'odcinek-13': 'https://drive.google.com/drive/folders/example103'
            },
            'season7': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example104',
                'odcinek-2': 'https://drive.google.com/drive/folders/example105',
                'odcinek-3': 'https://drive.google.com/drive/folders/example106',
                'odcinek-4': 'https://drive.google.com/drive/folders/example107',
                'odcinek-5': 'https://drive.google.com/drive/folders/example108',
                'odcinek-6': 'https://drive.google.com/drive/folders/example109',
                'odcinek-7': 'https://drive.google.com/drive/folders/example110',
                'odcinek-8': 'https://drive.google.com/drive/folders/example111',
                'odcinek-9': 'https://drive.google.com/drive/folders/example112',
                'odcinek-10': 'https://drive.google.com/drive/folders/example113',
                'odcinek-11': 'https://drive.google.com/drive/folders/example114',
                'odcinek-12': 'https://drive.google.com/drive/folders/example115',
                'odcinek-13': 'https://drive.google.com/drive/folders/example116'
            },
            'season8': {
                'odcinek-1': 'https://drive.google.com/drive/folders/example117',
                'odcinek-2': 'https://drive.google.com/drive/folders/example118',
                'odcinek-3': 'https://drive.google.com/drive/folders/example119',
                'odcinek-4': 'https://drive.google.com/drive/folders/example120',
                'odcinek-5': 'https://drive.google.com/drive/folders/example121',
                'odcinek-6': 'https://drive.google.com/drive/folders/example122',
                'odcinek-7': 'https://drive.google.com/drive/folders/example123',
                'odcinek-8': 'https://drive.google.com/drive/folders/example124',
                'odcinek-9': 'https://drive.google.com/drive/folders/example125',
                'odcinek-10': 'https://drive.google.com/drive/folders/example126',
                'odcinek-11': 'https://drive.google.com/drive/folders/example127',
                'odcinek-12': 'https://drive.google.com/drive/folders/example128',
                'odcinek-13': 'https://drive.google.com/drive/folders/example129'
            }
        }
    };

    return urls[series]?.[season]?.[episode] || '';
}
