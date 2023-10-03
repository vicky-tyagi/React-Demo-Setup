import React from 'react'
// import { Link } from 'react-router-dom'
import './BreadCrumb.css'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

function BreadCrumb(props) {
  return (
    <div className="jumbotron jumbotron-dark services-img jumbotron-fluid breadCumBg" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center login-rt pt-5 mb-2 mt-4">
            {/* <p className="sub-nav mb-4"><Link to={"/"} className="text-white">Home &gt;</Link> <span className="text-primary">{props.headerTitle}</span></p> */}
            <h1 className="text-uppercase text-white">{props?.headerName}</h1>
            <p className="text-white">{props?.headerContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

BreadCrumb.defaulProps = {
  dispatch: noop,
  isFetching: false,
  headerName: '',
  headerContent: ''

}

BreadCrumb.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  headerName: PropTypes.string,
  headerContent: PropTypes.string
}

export default BreadCrumb

