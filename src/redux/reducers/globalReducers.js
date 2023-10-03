import CONSTANTS from '../constants'
import { isLoggedIn } from '../../utils/helper'
import { EMPTY_OBJECT } from '../../constants/globalConstants'

const INITIAL_STATE = {
    loader: false,
    isUserLogin: isLoggedIn(),
    isAuthenticated: false,
    hasError: false,
    globalDataState: EMPTY_OBJECT,
    email: null,
    role: null,
    errorMessage: '',
    id: null,
    orgId: '',
    isLoggedIn: false,
    isLoginModal: false,
    isOpened: false,
    modalSingup: 0
}

const globalReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //global HANDLING
        case CONSTANTS.GLOBAL_STATE_PERMISSION_REQUEST:
            return { ...state, loader: false, globalDataState: action.data, isAuthenticated: true, hasError: false, errorMessage: '' }

        case CONSTANTS.GLOBAL_STATE_KEY_REQUEST:
            return { ...state, loader: false, ...action.data, isAuthenticated: true, hasError: false, errorMessage: '' }
        default:
            return state
    }
}

export default globalReducers
