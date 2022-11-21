import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'
import { EMPTY_OBJECT } from '../constants/globalConstants'

function FileUpload(props) {
    const { name, accept, onChange, id, required, disabled } = props

    const renderErrors = () => {
        const { errors, name } = props
        if (!errors || !errors[name]) return false
        return errors[name].map((e, i) => <div key={i} className="error" style={{ color: 'red' }}>{e}</div>)
    }
        return (
            <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">ID Proof ({name.charAt(0).toUpperCase() + name.slice(1)})
                    </label>
                    
                    <input                             
                        aria-describedby="emailHelp"
                        type="file"
                        accept={accept}
                        onChange={onChange}
                        name={name}
                        className="form-control"
                        id={id}
                        disabled={disabled}
                        required={required}
                    />

                </div>
                {renderErrors()}
            </div>
        )
    }

FileUpload.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.string)
    ),
    id: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    accept: PropTypes.string,
}
FileUpload.defaulProps = {
	name: undefined,
    onChange: noop,
    errors: EMPTY_OBJECT,
    id: undefined,
    required: false,
    disabled: false,
    accept: undefined,
}

const mapStateToProps = () => {
    return {} // Return props object
}

export default connect(mapStateToProps)(FileUpload)
