import playlistActionType from '../../constants/playlistActionType';

export const togglePlay = () => {
    return {
        type: playlistActionType.TOGGLE_PLAY,
    }
};

export const setPlaylist = (playlist) => {
    return {
        type: playlistActionType.SET_PLAYLIST,
        payload: playlist
    }
};
export const setVolume = (volume) => {
    return {
        type: playlistActionType.SET_AUDIO_VOLUME,
        payload: volume,
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

export const setAudioCurrentTime = (time) => {
    return {
        type: playlistActionType.SET_PLAYING_AUDIO_TIME,
        payload: time,
    }
};

export const resetAudioCurrentTime = (time) => {
    return {
        type: playlistActionType.RESET_PLAYING_AUDIO_TIME,
        payload: time
    }
};

export const setTimeTickInterval = (interval) => {
    return {
        type: playlistActionType.SET_TIME_TICK_INTERVAL,
        payload: interval,
    }
};
