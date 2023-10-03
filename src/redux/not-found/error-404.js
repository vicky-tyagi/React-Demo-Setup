import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

const NotFound = () => {
    return (
        <div className='min-height-600'>
            <BreadCrumb headerTitle={'Login'} headerName={'error 404'} headerContent={'Not Found'} />
            <div>

                <div className="container">
                    <div className="text-center border-bottom my-3">
                        <h2 className="text-dark font-weight-light">Sorry!, Page not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound