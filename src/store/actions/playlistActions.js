import playlistActionType from '../../constants/playlistActionType';

export const setPlaylist = (playlist) => {
    return {
        type: playlistActionType.SET_PLAYLIST,
        payload: playlist
    }
};
export const setVolume = (audio) => {
    return {
        type: playlistActionType.SET_AUDIO_VOLUME,
        payload: audio.volume,
    }
};
export const setTrack = (trackData) => {
    return {
        type: playlistActionType.SET_CURRENT_TRACK,
        payload: trackData,
    }
};

export const setAudio = (mp3) => {
    return {
        type: playlistActionType.SET_PLAYING_AUDIO,
        payload: mp3,
    }
};

export const setAudioDuration = (time) => {
    return {
        type: playlistActionType.SET_PLAYING_AUDIO_DURATION,
        payload: time,
    }
};

