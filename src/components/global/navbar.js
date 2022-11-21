import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../constants/globalConstants'
import URL from '../../constants/urls'
import noop from 'lodash/noop'
import { useNavigate } from 'react-router-dom'
function NavbarComponent(props) {
	const { isAuthenticated, userData, permitData } = props
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userDetails, setuserDetails] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {

		const permitDetails = permitData?.data
		const userDetailsPermit = permitDetails?.userDetails
		if (isAuthenticated) {
			setIsLoggedIn(true)
			const getuserDatafromLocal = JSON.parse(localStorage.getItem('userData'))
			const userDetails = getuserDatafromLocal?.user
			if (getuserDatafromLocal?.access_token && getuserDatafromLocal?.access_token != '') {
				setuserDetails(userDetails)
			} else {
				const userDetails = userData?.data?.user
				setuserDetails(userDetails)
			}
		}
		else if (userDetailsPermit?.access_token && userDetailsPermit?.access_token != '') {
			setIsLoggedIn(true)
			setuserDetails(userDetailsPermit?.user)
		}
		else {
			const getuserDatafromLocal = JSON.parse(localStorage.getItem('userData'))
			const userDetails = getuserDatafromLocal?.user
			if (getuserDatafromLocal?.access_token && getuserDatafromLocal?.access_token != '') {
				setuserDetails(userDetails)
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}
		}
	}, [EMPTY_ARRAY, isAuthenticated, permitData])
	
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	const handleLogout = () => {

		localStorage.removeItem('userData')
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
		navigate(URL.HOME)
		navigate(0)

	}

	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-light shadow">
				<div className="container">
					<a
						href=''
					>
							{/* <img height="50px" src="/assets/images/logo.png"></img> */}
						{/* <img src={Logo} width="60px" alt="mapco" /> */}
					</a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
						aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarID">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item ">
								<a
									href=''
									className="nav-link active" rel="noreferrer"
								>  Home
								</a>
							</li>
							<li className="nav-item ">
								<a
									href='#'
									className="nav-link" rel="noreferrer"
								>  Join Our Team
								</a>
							</li>
							<li className="nav-item ">
								<a
									href='#'
									className="nav-link" rel="noreferrer"
								>  Our Services
								</a>
							</li>
							<li className="nav-item ">
								<a
									href='#'
									className="nav-link" rel="noreferrer"
								>  About Us
								</a>
							</li>
							<li className="nav-item ">
								<a
									href='#'
									className="nav-link" rel="noreferrer"
								>Contact
								</a>
							</li>

							{isLoggedIn ?
								<li className="nav-item dropdown border-primary border">
									<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">
										<b>{userDetails?.name}</b>
									</a>
									<ul className="dropdown-menu dropdown-menu-end">
										
										<li>
											<Link className="dropdown-item" to={URL.USER}>Dashboard</Link></li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<Link className="dropdown-item" to={URL.USER_PROFILE}>Profile</Link></li>
										<li>
										<hr className="dropdown-divider" /></li>
										<li><button type='button' className="dropdown-item" onClick={(e) => handleLogout(e)}>Log Out</button></li>
									</ul>
								</li> : <li className="nav-item "></li>}
						</ul>

					</div>
					</div>
				</nav>
			</header>
	)
}


NavbarComponent.propTypes = {
	dispatch: PropTypes.func,
	isAuthenticated: PropTypes.bool,
	userData: PropTypes.object,
	permitData: PropTypes.object,
	isModalOpen: PropTypes.bool,
}

NavbarComponent.defaulProps = {
	dispatch: noop,
	isAuthenticated: false,
	userData: EMPTY_OBJECT,
	permitData: EMPTY_OBJECT,
	isModalOpen: false,
}

function mapStateToProps({ login, paymentReducer, basicInfoReducer }) {
	return {
		isAuthenticated: login?.isAuthenticated,
		userData: login?.data,
		permitData: paymentReducer?.data,
		isModalOpen: basicInfoReducer?.isModalOpen
	}
}
export default connect(mapStateToProps)(NavbarComponent)
