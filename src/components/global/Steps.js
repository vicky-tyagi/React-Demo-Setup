import React from 'react'
import PropTypes from 'prop-types'

function Steps(props) {

    const{page} = props
  return (
    <div className="row stpes-Design">
        <div className={page == 'home' ? 'col active' : 'col'}>
            <div className="box">
                <span>1</span>
            </div>
        </div>
        <div className={page == 'signup' ? 'col active' : 'col'}>
            <div className="box"><span>2</span> </div>
        </div>
        <div className={page == 'pass' ? 'col active' : 'col'}>
            <div className="box"><span>3</span> </div>
        </div>
        <div className={page == 'thankyou' ? 'col active' : 'col'}>
            <div className="box"><span>4</span> </div>
        </div>
    </div>

  )
}
Steps.propTypes = {
    page: PropTypes.string,
    paymentStatus: PropTypes.bool
}

Steps.defaulProps = {
	page:undefined,
  paymentStatus: false
}
export default Steps
