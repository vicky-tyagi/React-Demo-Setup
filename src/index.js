import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import App from './pages/base/App'
import reportWebVitals from './reportWebVitals'
import configureStore from './redux/middleware/configureStore'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={configureStore()}>
			<App />
		</Provider>
	</React.StrictMode>
)
reportWebVitals()
