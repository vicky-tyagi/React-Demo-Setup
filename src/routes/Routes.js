import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavbarComponent from '../components/global/navbar'
import URL from '../constants/urls'
import Main from '../pages/main'
import PropTypes from 'prop-types'
import { toast, ToastContainer } from 'react-toastify'
import noop from 'lodash/noop'
import { connect } from 'react-redux'
import { globalDataState, globalKeyStore } from '../redux/actions/globalState'
import { EMPTY_OBJECT, permission_Portal_obj } from '../constants/globalConstants'
import NotFound from '../redux/not-found/error-404'
import Login from '../components/loginCom/Login'
import { isPermissionExist, sortPortalPermissionByKey } from '../utils/helper'



function RoutesComponent(props) {
	const { dispatch, globalData, isFetching, isOpened } = props

	window.addEventListener('click', function () {
		dispatch(globalKeyStore({ isOpened: false }))
	})

	useEffect(() => {
		dispatch(globalDataState(permission_Portal_obj))
	}, [])

	const notify = (type, message) => {
		if (type === 'error') {
			toast.error(message, {
				position: toast.POSITION.TOP_RIGHT
			})
			toast.clearWaitingQueue()
		} else if (type === 'success') {
			toast.success(message, {
				position: toast.POSITION.TOP_RIGHT
			})
			toast.clearWaitingQueue()
		}
	}

	return (
		<BrowserRouter forceRefresh className="mt-3">
			{isFetching ? null : <NavbarComponent isOpened={isOpened} notify={notify} isMainScreen />}
			{isFetching ? null : globalData && Object.keys(globalData)?.length > 0 ? <Routes>
				<Route
					path={URL.HOME}
					element={(sortPortalPermissionByKey(globalData, 'Main Menu') && sortPortalPermissionByKey(globalData, 'Main Menu')?.length > 0) && isPermissionExist(sortPortalPermissionByKey(globalData, 'Access Permissions'), 'Login Access') ? <Main /> : isPermissionExist(sortPortalPermissionByKey(globalData, 'Access Permissions'), 'Login Access') ? <Login notify={notify} /> : (!sortPortalPermissionByKey(globalData, 'Main Menu')) && !isPermissionExist(sortPortalPermissionByKey(globalData, 'Access Permissions'), 'Login Access') ? <NotFound /> : <NotFound />}
				/>
			</Routes> : <Routes>
				<Route path='*' element={<NotFound />} />
			</Routes>}
			<ToastContainer limit={1} />
		</BrowserRouter>
	)
}
RoutesComponent.propTypes = {
	dispatch: PropTypes.func,
	isFetching: PropTypes.bool,
	globalData: PropTypes.object,
	isOpened: PropTypes.bool
}

RoutesComponent.defaulProps = {
	dispatch: noop,
	isFetching: false,
	globalData: EMPTY_OBJECT,
	isOpened: false

}

function mapStateToProps({ PartnerReducer, globalReducers }) {
	return {
		globalData: globalReducers?.globalDataState,
		isFetching: PartnerReducer?.isFetching,
		isOpened: globalReducers?.isOpened
	}
}
export default connect(mapStateToProps)(RoutesComponent)
