import globalState from './globalState';
import globalActionType from '../../../constants/globalActionType';

const globalReducer = (state = globalState, action) => {
    // const { payload } = action;
    switch (action.type) {
        case globalActionType.TOGGLE_DRAWER:
            return {
                ...state,
                showDrawer: !state.showDrawer,
            };
        case globalActionType.TOGGLE_SEARCH:
            return {
                ...state,
                showSearch: !state.showSearch,
            };
        default: return state;
    }
};

export default globalReducer;
