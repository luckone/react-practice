import globalActionType from '../../constants/globalActionType';

export const toggleDrawer = () => {
    return {
        type: globalActionType.TOGGLE_DRAWER
    }
}

export const toggleSearch = () => {
    return {
        type: globalActionType.TOGGLE_SEARCH
    }
}
