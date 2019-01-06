import playlistState from './playlistState';
import playlistActionType from '../../../constants/playlistActionType';
import moment from 'moment';

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
            console.log(action.payload.duration);
            if (state.audio) {
                state.audio.pause();
                state.audio = null;
            }
            return {
                ...state,
                audio: action.payload,
            };
        case playlistActionType.SET_AUDIO_VOLUME:
            return {
                ...state,
                volume: action.payload,
            };
        case playlistActionType.SET_PLAYING_AUDIO_DURATION:
            const seconds = action.payload;
            const duration = moment.utc(seconds*1000).format('mm:ss');
            console.log(duration);
            return {
                ...state,
                duration: duration,
            };
        default: return state;
    }
};

export default playlistReducer;