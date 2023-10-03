import { combineReducers } from 'redux'
import login from './login'
import globalReducers from './globalReducers'

export default combineReducers({
	login,
	globalReducers
})
