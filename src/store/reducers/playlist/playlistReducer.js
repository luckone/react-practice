import playlistState from './playlistState';
import playlistActionType from '../../../constants/playlistActionType';

const playlistReducer = (state = playlistState, action) => {
    // const { payload } = action;
    switch (action.type) {
        case playlistActionType.TOGGLE_DRAWER:
            return {
                ...state,
                showDrawer: !state.showDrawer,
            };
        default: return state;
    }
};

export default playlistReducer;