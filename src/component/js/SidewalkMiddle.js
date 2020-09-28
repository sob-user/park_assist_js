import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import MarginBlock from './MarginBlock'
import ParkingPlaces from './ParkingPlaces'

export class SidewalMiddle extends Component {
    render() {
        const {css} = this.props
        const {marginBlock} = css
        const {parkingPlaces} = css

        return (
            <div className='SidewalkMidle' style={this.props.style}>
                <MarginBlock style={marginBlock}/>
                <ParkingPlaces style={parkingPlaces}/>
            </div>
        )
    }
}

SidewalMiddle.propTypes = {
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
(SidewalMiddle)
