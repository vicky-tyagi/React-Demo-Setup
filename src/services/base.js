import axios from 'axios'
import { getConfigDetails } from './config'
const axiosClient = axios.create()

// Intercept request
axiosClient.interceptors.request.use(
	(request) => {
		const userData = JSON.parse(localStorage.getItem('userData'))
		request.headers['Content-Type'] = 'application/json'
		userData?.access_token ? request.headers['Authorization'] = `Bearer ${userData?.access_token}` : '',
			request.headers['X-ClientSecret'] = getConfigDetails()?.CLIENT_SECRET
		return request
	},
	null,
	{ synchronous: true }
)

// Intercept response
axiosClient.interceptors.response.use(
	(response) => {
		// Dispatch any action on success
		if (response?.status == 201 || response?.status == 200) {
			return response?.data
		} else {
			return Promise.reject(response?.data)
		}
	}
	,
	(error) => {

		return Promise.reject(error?.response?.data)

	}
)

// 

// axiosClient.defaults.baseURL ="";

axiosClient.defaults.headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
}

// All request will wait 1 min before timeout
axiosClient.defaults.timeout = 60000

// axiosClient.defaults.withCredentials = true;

export default axiosClient
