import React, { Component } from 'react'
import {placesDown} from '../../actions/generateTableAction'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {Animated} from "react-animated-css"
import  car  from '../img/80787564365.png'

export class ParkingPlacesDown extends Component {
    state = {
        occupatioRateDown: 50,
        placesDown: {},
        loaded: false
    }

    componentDidMount() {
        this.generateTablePlaces(8, this.state.occupatioRateDown)
    }

    componentDidUpdate(prevProps) {
        if(this.state.loaded === false) {
            this.setState({loaded: true})
        if(this.state.placesDown.length !== 0) {
            this.props.placesDown(this.state.placesDown)
        }
    }
    }

    generateTablePlaces = (numOfPlaces, occupatioRate) => {
        let counter = 0
        const places = []
        const availablePlaces = Math.floor((numOfPlaces/100) * occupatioRate)
    
        for (let init = 0; init < availablePlaces; init++) {
            places.push({ id: uuidv4(), isEmpty: false })
            counter++
        }
        
        const placeAlreadyTaken = (numOfPlaces - availablePlaces)
        for (let init = 0; init < placeAlreadyTaken; init++) {
            places.push({ id: uuidv4(), isEmpty: true })
            counter++
        }    

        this.shufflePlaces(places)

        if(counter === numOfPlaces) {
            this.setState({placesDown: places})
        }
    }

    shufflePlaces(places) {
        for (let init = places.length - 1; init > 0; init--) {
            const random = Math.floor(Math.random() * (init + 1));
            [places[init], places[random]] = [places[random], places[init]];
        }
        return places;
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
            <div className='ParkingPlaces' style={this.props.style}>
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
    placesDown: propTypes.func.isRequired,
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    places: state.places.down,
    css: state.css.css
})

export default connect(
mapStateToProps,
{placesDown})
(ParkingPlacesDown)