import React, { Component } from 'react'
import {placesUp} from '../../actions/generateTableAction'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {Animated} from "react-animated-css"
import  car  from '../img/25667859102.png'
import { actionsReset } from '../../actions/gameAction'

export class ParkingPlaces extends Component {
    state = {
        placesUp: {},
        loaded: null,
        totalPlaces: null
    }

    componentDidMount() {
        this.generateTablePlaces(4, this.props.game.rate)
    }

    componentDidUpdate(prevProps) {
        const action = this.props.action
        const sidewalkRight = this.props.game.right
        const isStarted = this.props.game.start

        if(this.state.loaded === false) {
            this.setState({loaded: true})
            if(this.state.placesUp.length !== 0) {
                this.props.placesUp(this.state.placesUp)
            }
        }

        if(action !== prevProps.action) {
            if(action=== 'SET_OCCUPATION_RATE') {
                this.generateTablePlaces(4, this.props.game.rate)
                this.props.actionsReset()
            }
        }

        if(sidewalkRight !== prevProps.sidewalkRight) {
            if(sidewalkRight === true) {
                document.getElementsByClassName('ParkingPlaces')[0].style.background='#36c8f440'
                document.getElementsByClassName('ParkingPlaces')[0].style.border='1px dashed white'
            }
            else if(sidewalkRight === false) {
                document.getElementsByClassName('ParkingPlaces')[0].style.background='none'
                document.getElementsByClassName('ParkingPlaces')[0].style.border='none'
            }
        }

        if(isStarted !== prevProps.isStarted) {
            if(isStarted !== false) {
                document.getElementsByClassName('ParkingPlaces')[0].style.background='none'
                document.getElementsByClassName('ParkingPlaces')[0].style.border='none'
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
            this.setState({placesUp: places, loaded: false})
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
        const places = this.props.placesU
        const {css} = this.props
        const {ParkingPlaceUp} = css
        const {ParkingPlaceUpCar} = css

        const img = (
            <img src={car} alt='car park assit game js'className='ParkingPlaceUpCar' style={ParkingPlaceUpCar}/>
        )

        return (
            <div className='ParkingPlaces' style={this.props.style}>
                {places.map((place) => (
                    <div className='ParkingPlaceUp' key={place.id} style={ParkingPlaceUp}>
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

ParkingPlaces.propTypes = {
    placesUp: propTypes.func.isRequired,
    actionsReset: propTypes.func.isRequired,
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    placesU: state.places.up,
    placesD: state.places.down,
    css: state.css.css,
    game: state.game,
    action: state.action.msg
})

export default connect(
mapStateToProps,
{placesUp, actionsReset})
(ParkingPlaces)