import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { EMPTY_OBJECT } from '../../constants/globalConstants'
import LogoImage from '../../assetsold/img/pci-logo-text.png'
// import URL from '../../constants/urls'
import noop from 'lodash/noop'
import { globalDataState, globalKeyStore } from '../../redux/actions/globalState'
import { isPermissionExist, sortPortalPermissionByKey } from '../../utils/helper'
import { useNavigate } from 'react-router-dom'
import Login from '../loginCom'

function NavbarComponent(props) {
	const { globalData, isOpened, dispatch, isLoggedIn, notify, isMainScreen } = props
	const getAccessPermissionData = sortPortalPermissionByKey(globalData, 'Access Permissions')
	const { pathname } = useLocation()
	const navigate = useNavigate()


	useEffect(() => {
		dispatch(globalDataState({ ...globalData, }))
		dispatch(globalKeyStore({ isLoggedIn: false }))
	}, [])

	// useEffect(() => {

	// 	const permitDetails = permitData?.data
	// 	const userDetailsPermit = permitDetails?.userDetails
	// 	if (isAuthenticated) {
	// 		setIsLoggedIn(true)
	// 		const getuserDatafromLocal = JSON.parse(localStorage.getItem('userData'))
	// 		const userDetails = getuserDatafromLocal?.user
	// 		if (getuserDatafromLocal?.access_token && getuserDatafromLocal?.access_token != '') {
	// 			setuserDetails(userDetails)
	// 		} else {
	// 			const userDetails = userData?.data?.user
	// 			setuserDetails(userDetails)
	// 		}
	// 	}
	// 	else if (userDetailsPermit?.access_token && userDetailsPermit?.access_token != '') {
	// 		setIsLoggedIn(true)
	// 		setuserDetails(userDetailsPermit?.user)
	// 	}
	// 	else {
	// 		const getuserDatafromLocal = JSON.parse(localStorage.getItem('userData'))
	// 		const userDetails = getuserDatafromLocal?.user
	// 		if (getuserDatafromLocal?.access_token && getuserDatafromLocal?.access_token != '') {
	// 			setuserDetails(userDetails)
	// 			setIsLoggedIn(true)
	// 		} else {
	// 			setIsLoggedIn(false)
	// 		}
	// 	}
	// }, [EMPTY_ARRAY, isAuthenticated, permitData])

	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [pathname])

	const handleLogout = () => {
		localStorage.removeItem('userData')
		localStorage.removeItem('isLoggedIn')
		navigate(URL.HOME)
		navigate(0)
	}


	const handleActiveTab = () => {
		dispatch(globalKeyStore({ isOpened: false }))
		var navbarDiv = document.getElementById('navbarSupportedContent')
		navbarDiv.classList.remove('show')
	}

	const handleDropDown = (e) => {
		e.stopPropagation()
		if (isOpened) {
			dispatch(globalKeyStore({ isOpened: false }))
		} else {
			dispatch(globalKeyStore({ isOpened: true }))
		}
	}

	const handleModalOpen = () => {
		dispatch(globalKeyStore({ isLoginModal: true }))
	}

	return (
		<div>
			<header className="w-100 bg-light shadow">
				<nav className="navbar navbar-expand-lg" data-bs-theme="light">
					<div className="container">
						<a className="navbar-brand" href="#"><img height="40px" src={LogoImage} alt /></a>

						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
								{globalData?.['Main Menu']?.map((item, index) => {
									if (item?.display_name == 'Home') {
										return <li className="nav-item" key={index}>
											<Link className={((pathname == `${URL?.INDEX}`) || (item?.web == `${item?.web}`)) ? 'nav-link activeLink' : 'nav-link'} to={`${item?.web}`} onClick={() => handleActiveTab()}>{item?.display_name}</Link>
										</li>
									} else if (item?.subValues && item?.subValues?.length > 0) {
										return <li className="nav-item dropdown" key={index}>
											<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{item?.display_name}</a>
											<ul className="dropdown-menu">
												{item?.subValues?.map((subItem, subIndex) => {
													return (
														<li key={subIndex}>
															<a className="dropdown-item" href="#">{subItem?.display_name}</a>
															{(item?.isDiv == (subIndex + 1)) ? <hr className="dropdown-divider" /> : ''}
														</li>
													)
												})}
											</ul>
										</li>
									} else {
										return <li className="nav-item" key={index}>
											<Link className={((pathname == `/${item?.web}`)) ? 'nav-link activeLink' : 'nav-link'} to={`${item?.web}`} onClick={() => handleActiveTab()}>{item?.display_name}</Link>
										</li>
									}
								})}
							</ul>
							<ul className="ms-0 mt-3 ps-0">
								{isLoggedIn ?
									<li className="dropdown listStyleNone" id="accountmenucontainer">
										<i className='far fa-user-circle text-primary fa-lg' onClick={(e) => handleDropDown(e)}></i>
										<ul className={isOpened ? 'dropdown-menu dropdown-menu-end d-block right-0' : 'dropdown-menu dropdown-menu-end right-0'}>
											{(isPermissionExist(getAccessPermissionData, 'Account Access')) && <> <li>
												<Link className={(pathname == `/${URL?.BASE_USER}`) ? 'nav-link activeLink ms-2' : 'nav-link ms-2'} to={`${URL?.BASE_USER}`} onClick={() => handleActiveTab()}>My Account</Link>
											</li>
												<li> <hr className="dropdown-divider" /></li></>}
											{(isPermissionExist(getAccessPermissionData, 'Profile Access')) && <li>
												<Link className={(pathname == `/${URL?.BASE_USER_PROFILE}`) ? 'nav-link activeLink ms-2' : 'nav-link ms-2'} to={`${URL?.BASE_USER_PROFILE}`} onClick={() => handleActiveTab()}>Profile</Link>
											</li>}
											<li> <hr className="dropdown-divider" /></li>
											<li><button type='button' className="dropdown-item ms-2 ps-0" onClick={(e) => handleLogout(e)}>Logout</button></li>
										</ul>
									</li> : (isPermissionExist(getAccessPermissionData, 'Login Access')) && <li className="btn btn-outline-primary" onClick={handleModalOpen}><i className=" fa fa-user me-2"></i>login </li>}
							</ul>
						</div>
					</div>
				</nav>
				<Login notify={notify} />
			</header>
			{isMainScreen && <div className="w-100"
				style={{ backgroundImage: 'url(https://aaa-lux-lighting.com/wp-content/uploads/20164642-Ahoy_DSC4381-1920x400.jpg)', height: '300px', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
			</div>}
		</div>
	)
}


NavbarComponent.propTypes = {
	dispatch: PropTypes.func,
	isAuthenticated: PropTypes.bool,
	userData: PropTypes.object,
	permitData: PropTypes.object,
	isModalOpen: PropTypes.bool,
	globalData: PropTypes.object,
	isOpened: PropTypes.bool,
	isLoggedIn: PropTypes.bool,
	notify: PropTypes.func,
	isMainScreen: PropTypes.bool
}

NavbarComponent.defaulProps = {
	dispatch: noop,
	isAuthenticated: false,
	userData: EMPTY_OBJECT,
	permitData: EMPTY_OBJECT,
	isModalOpen: false,
	globalData: EMPTY_OBJECT,
	isOpened: false,
	isLoggedIn: false,
	notify: noop,
	isMainScreen: false
}

function mapStateToProps({ login, paymentReducer, basicInfoReducer, globalReducers }) {
	return {
		isAuthenticated: login?.isAuthenticated,
		userData: login?.data,
		permitData: paymentReducer?.data,
		isModalOpen: basicInfoReducer?.isModalOpen,
		globalData: globalReducers?.globalDataState,
		isLoggedIn: globalReducers?.isLoggedIn,
		isOpened: globalReducers?.isOpened
	}
}
export default connect(mapStateToProps)(NavbarComponent)
