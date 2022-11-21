import axios from 'axios'
import { CLIENT_SECRET } from '../constants/globalConstants'
const axiosClient = axios.create()

// Intercept request
axiosClient.interceptors.request.use(
	(request) => {
		const userData = JSON.parse(localStorage.getItem('userData'))
		request.headers['Content-Type'] = 'application/json'
		request.headers['Authorization'] = `Bearer ${userData?.access_token}`
		return request
	},
	null,
	{ synchronous: true }
)

// Intercept response
axiosClient.interceptors.response.use(
	(response) => {
		// Dispatch any action on success
		//if(response?.status === responseCodes.SUCCESS200)
		if (response?.status === 201 || response?.status === 200) {
			return response.data
		}
		return response?.data
	}
	,
	(error) => {

		return Promise.reject(error.response.data)

	}
)

// 

// axiosClient.defaults.baseURL ="";

axiosClient.defaults.headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'X-ClientSecret': CLIENT_SECRET,	
}

// All request will wait 1 min before timeout
axiosClient.defaults.timeout = 60000

// axiosClient.defaults.withCredentials = true;

export default axiosClient
