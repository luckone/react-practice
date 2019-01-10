let playlistState = {
    currentPlaylist: [
        {
            id: 1,
            artist: 'Boney M',
            thumbnail: 'https://s.inyourpocket.com/img/figure/2018-09/boney-mania-carles.jpg',
            track: {
                mp3: '../storage/boney-m-rasputin.mp3',
                name: 'Rasputin',
            },
        },
        {
            id: 2,
            artist: 'A-ha',
            thumbnail: 'https://direct.rhapsody.com/imageserver/images/Alb.242712/500x500.jpg',
            track: {
                mp3: '../storage/a-ha-take-on-me.mp3',
                name: 'Take on me',
            },
        },
        {
            id: 3,
            artist: 'CRX',
            thumbnail: 'https://direct.rhapsody.com/imageserver/images/Alb.241293469/500x500.jpg',
            track: {
                mp3: '../storage/CRX - Broken Bones (Audio).mp3',
                name: 'Broken Bones',
            },
        }
    ],
    currentTrack: {
        id: 1,
        artist: 'Boney M',
        thumbnail: 'https://s.inyourpocket.com/img/figure/2018-09/boney-mania-carles.jpg',
        track: {
            mp3: '../storage/boney-m-rasputin.mp3',
            name: 'Rasputin',
        },
    },
    audio: null,
    duration: 0,
    time: 0,
    volume: 0.3,
    timeInterval: null,
    paused: true,
};

export default playlistState;
