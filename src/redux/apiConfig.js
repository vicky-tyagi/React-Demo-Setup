import { getConfigDetails } from '../services/config'

export const APICONFIG = { 
	getUserLoginUrl: `${getConfigDetails().baseURL}`,
}
