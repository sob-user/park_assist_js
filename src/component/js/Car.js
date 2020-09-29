import React, { Component } from 'react'
import { connect } from 'react-redux'
import  car  from '../img/25667859102.png'

export class Car extends Component {
    render() {
        const {css} = this.props
        const {ParkingPlaceUpCar} = css
        return (
            <div className='Car' style={this.props.style}>
                <img src={car} alt='car park assit game js' style={ParkingPlaceUpCar}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default connect(mapStateToProps, null)(Car)
