import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {Animated} from "react-animated-css"
import  car  from '../img/25667859102.png'

export class ParkingPlacesDown extends Component {
    componentDidUpdate(prevProps) {
        const sidewalkLeft = this.props.game.left
        const isStarted = this.props.game.start
        const parkingPlaces = document.getElementsByClassName('ParkingPlacesDown')[0]
        if(sidewalkLeft !== prevProps.sidewalkLeft) {
            if(sidewalkLeft === true) {
                parkingPlaces.style.background='#36c8f440'
                parkingPlaces.style.border='1px dashed white'
            }
            else if(sidewalkLeft === false) {
                parkingPlaces.style.background='none'
                parkingPlaces.style.border='none'
            }
        }

        if(isStarted !== prevProps.isStarted) {
            if(isStarted !== false) {
                parkingPlaces.style.background='none'
                parkingPlaces.style.border='none'
            }
        }
    }
    render() {
        const places = this.props.places
        const {css} = this.props
        const {ParkingPlaceDown} = css
        const {ParkingPlaceDownCar} = css

        const img = (
            <img src={car} alt='car park assit game js'className='ParkingPlaceUpCar' style={ParkingPlaceDownCar}/>
        )
        return (
            <div className='ParkingPlacesDown' style={this.props.style}>
                {places.map((place) => (
                    <div className='ParkingPlaceUp' key={place.id} style={ParkingPlaceDown}>
                        <Animated 
                        animationIn='fadeIn' 
                        isVisible={true}>
                        {place.isEmpty ? null : img}
                        </Animated>
                    </div>
                ))}
            </div>
        )
    }
}

ParkingPlacesDown.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    places: state.places.down,
    game: state.game,
    css: state.css.css
})

export default connect(
mapStateToProps,
null)
(ParkingPlacesDown)