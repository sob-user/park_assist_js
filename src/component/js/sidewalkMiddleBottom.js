import React, { Component } from 'react'
import ParkingPlacesDown from './ParkingPlacesDown'
import MarginBlock from './MarginBlock'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class sidewalkMiddleBottom extends Component {
    render() {
        const {css} = this.props
        const {parkingPlacesBottom} = css
        const {marginBlockBottom} = css
        
        return (
            <div className='SidewalkMiddleBottom' style={this.props.style}>
                <ParkingPlacesDown style={parkingPlacesBottom} />
                <MarginBlock style={marginBlockBottom} />
            </div>
        )
    }
}
sidewalkMiddleBottom.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null
)
(sidewalkMiddleBottom)
