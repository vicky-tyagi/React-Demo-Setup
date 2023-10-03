import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'
import { EMPTY_OBJECT } from '../../constants/globalConstants'
import { useNavigate } from 'react-router-dom'
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask'
// import { userSingIn, userSingUp, } from '../../redux/actions/singupAndSingin'
import { useForm, Controller } from 'react-hook-form'
import { Circles } from 'react-loader-spinner'
import { Form } from 'react-bootstrap'
// import { toast, ToastContainer } from 'react-toastify'
const phoneMaskGenerator = createDefaultMaskGenerator('(999) 999-9999')
import 'react-toastify/dist/ReactToastify.css'
import './login.scss'
import { userLogin } from '../../redux/actions/login'
// userSingUp
import URL from '../../constants/urls'
import { getConfigDetails } from '../../services/config'
import { newpasswordValidation } from '../../constants/globalConstants'
import { isPermissionExist, sortPortalPermissionByKey } from '../../utils/helper'
import { globalKeyStore } from '../../redux/actions/globalState'


function ModalLogin(props) {
    const { show, loaderSing, dispatch, notify, globalData, modalSingup } = props
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm()
    const handleClose = () => dispatch(globalKeyStore({ isLoginModal: false }))
    const getAccessPermissionData = sortPortalPermissionByKey(globalData, 'Access Permissions')
    console.log('getAccessPermissionData', getAccessPermissionData)
    const navigate = useNavigate()
    const partner = window.location.toString().split('/')[3]
    const [passwordShown, setPasswordShown] = useState(false)
    const [cpasswordShown, setCPasswordShown] = useState(false)
    const [mpasswordShown, setMPasswordShown] = useState(false)
    const [error, setError] = useState({ password_strength: false, confirm_password_strength: false })


    const togglePasswordVisiblity = (e, key) => {
        if (key === 'password') {
            setPasswordShown(passwordShown ? false : true)
        }
        if (key === 'mpassword') {
            setMPasswordShown(mpasswordShown ? false : true)
        }
        if (key === 'cpassword') {
            setCPasswordShown(cpasswordShown ? false : true)
        }
    }

    const handleInputChange = (e) => {
        const { name } = e.target
        if (name == 'password') {
            setError({ ...error, password_strength: false })
        } else {
            setError({ ...error, confirm_password_strength: false })
        }
    }

    const handleSecondModal = () => {
        reset(formValues => ({ ...formValues, username: '', password: '' }))
        dispatch(globalKeyStore({ modalSingup: 1 }))
    }

    const onSignIn = (data) => {
        if (data?.username !== '' && data?.password !== '') {
            const payloadKeys = { 'client_id': getConfigDetails()?.CLIENT_ID, 'client_secret': getConfigDetails()?.CLIENT_SECRET, 'grant_type': 'password' }
            const finalPayload = { ...payloadKeys, ...data }
            dispatch(userLogin(finalPayload)).then((res) => {
                if (res?.status === 201 && res?.data !== null) {
                    localStorage?.setItem('userData', JSON.stringify(res?.data))
                    localStorage?.setItem('access_token', JSON.stringify(res?.data?.access_token))
                    notify('success', 'User Login Successfully')
                    dispatch(globalKeyStore({ isLoginModal: false }))
                    reset(formValues => ({ ...formValues, 'username': '', 'password': '', }))
                    navigate(`/${partner}${URL?.BASE_USER}`)
                } else {
                    notify('error', res?.errors?.message)
                }
            }).catch((errors) => {
                notify('error', errors?.message)
            })
        }
    }

    const onSignUp = (data) => {
        if (!newpasswordValidation(data?.password)) {
            setError({ ...error, password_strength: true })
            return
        } else if (!newpasswordValidation(data?.cpassword)) {
            setError({ ...error, confirm_password_strength: true })
            return
        }
        if (data?.cpassword === data?.password) {
            const payload = {
                'first_name': '',
                'last_name': '',
                'email': '',
                'phone': '',
                'confirm_password': '',
                'client_secret': getConfigDetails()?.CLIENT_SECRET
            }
            const finalPayload = { ...payload, ...data }
            finalPayload['confirm_password'] = finalPayload?.cpassword
            delete finalPayload?.password
            delete finalPayload?.cpassword
            delete finalPayload?.username
            console.log('finalPayload', finalPayload)
            // dispatch(userSingUp(finalPayload)).then((res) => {
            //     if (res?.status === 201) {
            //         localStorage?.setItem('userData', JSON.stringify(res?.data))
            //         localStorage?.setItem('access_token', JSON.stringify(res?.data?.access_token))
            //         notify('success', 'Registration Successfully Completed')
            //         const payloadKeys = { 'client_id': getConfigDetails()?.CLIENT_ID, 'client_secret': getConfigDetails()?.CLIENT_SECRET, 'grant_type': 'password' }

            //         payloadKeys.username = data?.email
            //         payloadKeys.password = data?.password
            //         dispatch(userLogin(payloadKeys)).then((res) => {
            //             const userData = res?.data

            //             if (userData) {
            //                 localStorage.setItem('isLoggedIn', true)
            //                 localStorage.setItem('userData', JSON.stringify(userData))
            //                 navigate(`/${partner}${URL?.BASE_USER}`)
            //             } else {
            //                 notify(res?.errors?.message ? res?.errors?.message : 'Something went wrong, Please try again!')
            //             }

            //         }).catch((err) => {
            //             const response = err?.errors

            //             notify(response?.message ? response?.message : 'Something went wrong, Please try again!')

            //         })

            //         // setIsLogin(true)
            //        dispatch(globalKeyStore({ isLoginModal: false }))
            //         reset(formValues => ({
            //             ...formValues,
            //             'first_name': '',
            //             'last_name': '',
            //             'email': '',
            //             'phone': '',
            //             'confirm_password': '',
            //             'client_secret': getConfigDetails()?.CLIENT_SECRET
            //         }))
            //         navigate(`/${partner}${URL?.BASE_HOME}`)

            //         // navigate(0)
            //     } else {
            //         // setIsLogin(false)
            //         notify('error', res?.errors?.message)
            //     }
            // }).catch(() => {
            //     notify('error', 'Something went wrong!')
            //     // setSignInModal(true)
            // })
        } else {
            notify('error', 'Password not match')
        }
    }

    const handleBackButton = () => {
        reset(formValues => ({ ...formValues, email: '', phone: '', first_name: '', cpassword: '', password: '' }))
        dispatch(globalKeyStore({ modalSingup: 0 }))
    }

    const handleForgotPassword = () => {
        navigate(`/${partner}${URL?.BASE_SEND_EMAIL_FORGOT_PASSWORD}`)
        dispatch(globalKeyStore({ isLoginModal: false }))
    }

    return (
        <>
            <Modal show={show} size={modalSingup === 1 ? 'lg' : null} onHide={handleClose}>
                {modalSingup === 0 &&
                    <form onSubmit={handleSubmit(onSignIn)}>
                        <Modal.Header closeButton> <Modal.Title>Login</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">User Name <span style={{ color: 'red' }}>*</span></label>
                                <input type="email" name='username' className="form-control" maxLength='40' minLength='1' placeholder="" {...register('username', {
                                    required: true,
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email address' }
                                })} />
                                {errors?.username?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                {errors?.username?.type === 'pattern' && <span style={{ color: 'red' }}>{errors?.username?.message}</span>}
                            </div>

                            <div className="mb-3 myiconset">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password <span style={{ color: 'red' }}>*</span></label>
                                <input type={passwordShown ? 'text' : 'password'} name='password' className="form-control passwordInput" id="exampleInputPassword1"   {...register('password', { required: true })} />
                                <i className={passwordShown ? 'fas fa-eye-slash loginPassIcon' : 'fas fa-eye loginPassIcon'} onClick={(e) => togglePasswordVisiblity(e, 'password')}></i>
                                {errors?.password?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className='mb-3 cursor' >
                                <span className="form-label" onClick={() => { handleForgotPassword() }}>Forgot Password? </span>
                            </div>

                            <div className="mb-3">
                                <Button variant="primary" type='submit' className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span>Sign in </span>  <span className='ms-2'>
                                            {loaderSing ? <Circles
                                                height="20"
                                                width="20"
                                                style={{ display: 'inline-block' }}
                                                color="#ffffff"
                                                ariaLabel="circles-loading"
                                                visible={true}
                                            /> : null}
                                        </span>
                                    </div>
                                </Button>
                            </div>
                            {(isPermissionExist(getAccessPermissionData, 'Signup Access')) && <div className="mb-3 text-center">
                                New on our platform? <a type='button' className='text-primary' role='button' onClick={handleSecondModal}>Create an account</a>
                            </div>}
                        </Modal.Body>
                    </form>
                }
                {modalSingup === 1 &&
                    <form onSubmit={handleSubmit(onSignUp)}>
                        <Modal.Header closeButton> <Modal.Title>Register your Account</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <div className="checkinForm">
                                <div className='row'>
                                    <div className='col'>
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">First Name <span style={{ color: 'red' }}>*</span></label>
                                            <input type="text" className="form-control" name='first_name' id="first_name" placeholder="Enter First Name" {...register('first_name', { required: true })} />
                                        </div>
                                        {errors?.first_name?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                    </div>
                                    <div className='col'>
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">Last Name</label>
                                            <input type="text" name='last_name' className="form-control" id="last_name" placeholder="Enter Last Name" {...register('last_name')} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">Email <span style={{ color: 'red' }}>*</span></label>
                                            <input type="email" name='email' className="form-control" maxLength='40' minLength='1' placeholder="Enter your email" {...register('email', {
                                                required: true,
                                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email address' }
                                            })} />
                                        </div>
                                        {errors?.email?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                        {errors?.email?.type === 'pattern' && <span style={{ color: 'red' }}>{errors?.email?.message}</span>}
                                    </div>
                                    <div className='col'>
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">Phone <span style={{ color: 'red' }}>*</span></label>
                                            <Controller
                                                name="phone"
                                                type="text"
                                                id="phone"
                                                control={control}
                                                rules={{ required: true, maxLength: 14 }}
                                                render={({ field }) => <MaskedInput
                                                    maskGenerator={phoneMaskGenerator}
                                                    className="form-control"
                                                    {...field}
                                                    maxLength={14}
                                                    title="Please enter a valid phone number"
                                                    onInvalid={e => e.target.setCustomValidity('Please enter phone number')}
                                                    onInput={e => e.target.setCustomValidity('')}
                                                    placeholder="Phone Number"
                                                />}
                                            />
                                        </div>
                                        {errors?.phone?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                        {errors?.phone?.type === 'minLength' && <span style={{ color: 'red' }}>{errors?.phone?.message}</span>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 myiconset">
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">Password <span style={{ color: 'red' }}>*</span></label>
                                            <input className="form-control ng-untouched ng-pristine ng-invalid passwordInput"
                                                name="password" placeholder="Create Password"
                                                {...register('password', { required: true, onChange: (e) => handleInputChange(e) })}
                                                reverse="true" type={mpasswordShown ? 'text' : 'password'} validateequal="cpassword" />
                                        </div>
                                        <i className={mpasswordShown ? 'fas fa-eye-slash iconset' : 'fas fa-eye iconset'} onClick={(e) => togglePasswordVisiblity(e, 'mpassword')}></i>
                                        {errors?.password?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                        {(error?.password_strength) && <Form.Text className="text-danger">Password should 8 to 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character.</Form.Text>}
                                    </div>
                                    <div className="col-sm-6 myiconset">
                                        <div className="mt-2">
                                            <label htmlFor="" className="form-label">Confirm Password <span style={{ color: 'red' }}>*</span></label>
                                            <input className="form-control ng-untouched ng-pristine ng-invalid passwordInput"
                                                {...register('cpassword', { required: true, onChange: (e) => handleInputChange(e) })}
                                                name="cpassword" placeholder="Confirm Password"
                                                type={cpasswordShown ? 'text' : 'password'} validateequal="password" />
                                        </div>
                                        <i className={cpasswordShown ? 'fas fa-eye-slash iconset' : 'fas fa-eye iconset'} onClick={(e) => togglePasswordVisiblity(e, 'cpassword')}></i>
                                        {errors?.cpassword?.type === 'required' && <span style={{ color: 'red' }}>This field is required</span>}
                                        {(error?.confirm_password_strength) && <Form.Text className="text-danger">Password should 8 to 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character.</Form.Text>}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-outline-secondary me-auto" type='button' onClick={handleBackButton} ><i className="fa fa-angle-left"></i> Back To Login</button>
                            <Button type="submit" className="btn btn-primary">
                                <div className='d-flex aling-items-center'>
                                    <span>Submit</span> <span className='ms-2'>
                                        {loaderSing ? <Circles
                                            height="20"
                                            width="20"
                                            style={{ display: 'inline-block' }}
                                            color="#ffffff"
                                            ariaLabel="circles-loading"
                                            visible={true}
                                        /> : null}
                                    </span>
                                </div>
                            </Button>
                        </Modal.Footer>
                    </form>
                }
            </Modal>
        </>
    )
}
ModalLogin.propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.object,
    setShow: PropTypes.func,
    show: PropTypes.bool,
    loaderSing: PropTypes.bool,
    notify: PropTypes.func,
    globalData: PropTypes.object,
    modalSingup: PropTypes.number
}

ModalLogin.defaulProps = {
    dispatch: noop,
    data: EMPTY_OBJECT,
    setShow: noop,
    show: false,
    loaderSing: false,
    globalData: EMPTY_OBJECT,
    notify: noop,
    modalSingup: 0
}

function mapStateToProps({ loginReducer, globalReducers }) {
    return {
        loaderSing: loginReducer?.loader,
        show: globalReducers?.isLoginModal,
        globalData: globalReducers?.globalDataState,
        modalSingup: globalReducers?.modalSingup
    }
}
export default connect(mapStateToProps)(ModalLogin)