import CONSTANTS from '../constants'
import { postRequest, putRequest } from '../../services'
import { APICONFIG } from '../apiConfig'

// Calls the API to get user token
export const userLogin = (creds) => (dispatch) => {
  dispatch({ type: CONSTANTS.LOGIN_REQUEST })
  return postRequest(APICONFIG.getUserLoginUrl, creds).then((res) => {
    dispatch({ type: CONSTANTS.LOGIN_SUCCESS, data: res })
    return res
  }).catch((err) => {
    dispatch({ type: CONSTANTS.LOGIN_FAILURE })
    return err
  })
}

// updated user-Profile
export const updateUserProfile = (data) => (dispatch) => {
  dispatch({ type: CONSTANTS.UPDATE_USER_PROFILE_REQUEST })
  return putRequest(APICONFIG.updateUserProfileUrl, data).then((res) => {
    dispatch({ type: CONSTANTS.UPDATE_USER_PROFILE_SUCCESS, data: res })
    return res
  }).catch((err) => {
    dispatch({ type: CONSTANTS.UPDATE_USER_PROFILE_FAILURE })
    return err
  })
}
