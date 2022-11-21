import CONSTANTS from '../constants'
import { isLoggedIn } from '../../utils/helper'
import { EMPTY_OBJECT } from '../../constants/globalConstants'

const INITIAL_STATE = {
	loader: false,
	isUserLogin: isLoggedIn(),
	isAuthenticated: false,
	hasError: false,
	data: EMPTY_OBJECT,
	email: null,
	role: null,
	errorMessage: '',
	id: null,
	orgId: ''
}

const loginReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		//LOGIN HANDLING
		case CONSTANTS.LOGIN_REQUEST:
			return {
				...state,
				loader: true,
				errorMessage: ''
			}
		case CONSTANTS.LOGIN_SUCCESS:
			return {
				...state,
				loader: false,
				data: action.data,
				isAuthenticated: true,
				hasError: false,
				errorMessage: ''
			}
		case CONSTANTS.LOGIN_FAILURE:
			return {
				...state,
				loader: false,
				errorMessage: 'There is some Error'
			}
		default:
			return state
	}
}

export default loginReducer
