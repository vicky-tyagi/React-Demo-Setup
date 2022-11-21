import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavbarComponent from '../components/global/navbar'
import URL from '../constants/urls'
import Main from '../pages/main'



function RoutesComponent() {

	return (
		<BrowserRouter forceRefresh className="mt-3">
			<NavbarComponent />
			<Routes>
				<Route
					path={URL.HOME}
					element={
						<Main />
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
export default RoutesComponent
