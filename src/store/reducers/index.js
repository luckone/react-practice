import { combineReducers } from 'redux';
import global from './global';
import playlist from './playlist'
const rootReducer = () => combineReducers({
    global,
    playlist
});

export default rootReducer();
