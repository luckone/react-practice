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
};

export default playlistState;