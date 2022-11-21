import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Main = () => {
  return (
    <div style={{ textAlign: 'center' , marginTop:'5em' }}>Please Attract you Html Here ? </div>
  )
}

Main.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)