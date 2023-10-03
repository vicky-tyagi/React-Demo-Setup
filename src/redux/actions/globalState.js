import CONSTANTS from '../constants'
// import { postRequest, putRequest } from '../../services'
// import { APICONFIG } from '../apiConfig'

// Calls the API to get user token
export const globalDataState = (creds) => (dispatch) => {
    return dispatch({ type: CONSTANTS.GLOBAL_STATE_PERMISSION_REQUEST, data: creds })
}


export const globalKeyStore = (creds) => (dispatch) => {
    return dispatch({ type: CONSTANTS.GLOBAL_STATE_KEY_REQUEST, data: creds })
}