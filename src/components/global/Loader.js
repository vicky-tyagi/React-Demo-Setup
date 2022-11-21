import React from 'react'
import { Circles } from  'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import PropTypes from 'prop-types'
function Loader(props) {  
    const {eventsLoader} = props

	return (
        <div className= {eventsLoader ? 'eventsloader' : 'loader'}>
            <Circles
                height="80"
                width="80"
                color="#060D63"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
        
        )
}
Loader.propTypes = {
	
	eventsLoader: PropTypes.bool
}

Loader.defaulProps = {
	
	eventsLoader: false
	
}
export default Loader
