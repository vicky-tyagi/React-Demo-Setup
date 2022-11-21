import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'

function Modal(props) {
    const { modalName, vehicleData, setVehicleData, handleSubmitVehicleData } = props

    const handleModalFieldsData = (e, i) => {
        const { name, value } = e.target
        vehicleData[i][name] = value
        setVehicleData([...vehicleData])
    }

    const addVehicleMake = () => {
        const payloadData = [...vehicleData]
        payloadData?.push({ 'license_plate': '', 'make_model': '' })
        setVehicleData([...payloadData])
    }

    const removeVehicleMake = (e, i) => {
        const payloadData = [...vehicleData]
        payloadData?.splice(i, 1)
        setVehicleData([...payloadData])
    }

    return (
        <div className="modal fade" id="vehicleModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-lg" >
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel">{modalName}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row align-items-end">
                                <label className="form-label">Vehicle Info</label>
                                <table className="table tabel-borderless">
                                    <tbody>
                                        {vehicleData?.map((vehicleListItem, vehicleListIndex) => {
                                            return (
                                                <tr key={vehicleListIndex}>
                                                    <td><input
                                                        type="text"
                                                        name='license_plate'
                                                        className="form-control"
                                                        placeholder="Licence Plate"
                                                        maxLength={10}
                                                        minLength={1}
                                                        value={vehicleListItem?.license_plate}
                                                        onChange={(e) => handleModalFieldsData(e, vehicleListIndex)}
                                                        aria-describedby="emailHelp" /></td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name='make_model'
                                                            className="form-control"
                                                            placeholder="Make / Model"
                                                            onChange={(e) => handleModalFieldsData(e, vehicleListIndex)}
                                                            maxLength={15}
                                                            minLength={1}
                                                            value={vehicleListItem?.make_model}
                                                            aria-describedby="emailHelp" />
                                                    </td>
                                                    <td>
                                                        {vehicleData?.length - 1 === vehicleListIndex ?
                                                            <button type="button" className="btn btn-primary w-100" disabled={vehicleData?.length > 2} onClick={addVehicleMake}><i className="fa fa-plus"></i> </button> :
                                                            vehicleListIndex !== -1 ? <button type="button" className="btn btn-danger w-100" onClick={(e) => removeVehicleMake(e, vehicleListIndex)}><i className="fa fa-minus"></i></button> :
                                                                null
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleSubmitVehicleData} style={{ float: 'right' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    dispatch: PropTypes.func,
    loader: PropTypes.bool,
    modalName: PropTypes.string,
    vehicleData: PropTypes.EMPTY_ARRAY,
    setVehicleData: PropTypes.func,
    handleSubmitVehicleData : PropTypes.func
}

Modal.defaulProps = {
    dispatch: noop,
    loader: PropTypes.bool,
    modalName: PropTypes.string,
    vehicleData: PropTypes.EMPTY_ARRAY,
    setVehicleData: PropTypes.func,
    handleSubmitVehicleData : PropTypes.func
}

function mapStateToProps({ state }) {
    return { state }
}
export default connect(mapStateToProps)(Modal)