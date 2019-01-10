import playlistState from './playlistState';
import playlistActionType from '../../../constants/playlistActionType';

const playlistReducer = (state = playlistState, action) => {
    switch (action.type) {
        case playlistActionType.SET_PLAYLIST:
            return {
                ...state,
                currentPlaylist: action.payload,
            };
        case playlistActionType.SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.payload,
            };
        case playlistActionType.SET_PLAYING_AUDIO:
            if (state.audio) {
                state.audio.pause();
                state.audio = null;
            }
            return {
                ...state,
                audio: action.payload,
                paused: false,
            };
        case playlistActionType.TOGGLE_PLAY:
            if (state.audio) {
                state.paused ? state.audio.play() : state.audio.pause();
                return {
                    ...state,
                    paused: !state.paused,
                };
            } else return {...state};
        case playlistActionType.SET_AUDIO_VOLUME:
            if (state.audio) state.audio.volume = action.payload;
            return {
                ...state,
                volume: action.payload,
            };
        case playlistActionType.SET_PLAYING_AUDIO_DURATION:
            return {
                ...state,
                duration: action.payload,
            };
        case playlistActionType.SET_PLAYING_AUDIO_TIME:
            return {
                ...state,
                time: action.payload,
            };
        case playlistActionType.RESET_PLAYING_AUDIO_TIME:
            if (state.audio) state.audio.currentTime = action.payload;
            return {
                ...state,
                time: action.payload,
            };
        case playlistActionType.SET_TIME_TICK_INTERVAL:
            if (!action.payload) clearInterval(state.timeInterval);
            return {
                ...state,
                timeInterval: action.payload,
            };
        default: return state;
    }
};

export default playlistReducer;
