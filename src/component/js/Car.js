import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {Animated} from "react-animated-css"
import  car  from '../img/25667859102.png'

export class Car extends Component {

    state= {
        isVisible: false
    }

    componentDidUpdate(prevProps) {
        const isStarted = this.props.game.start

        if(isStarted !== prevProps.isStarted) {
            if(isStarted !== false) {
                if(this.state.isVisible !== true) {
                    this.setState({isVisible: true})
                }
            }
        }
    }

    render() {
        const {css} = this.props
        const {ParkingPlaceUpCar} = css
        return (
            <div className='Car' 
            style={this.props.style}>
                <Animated 
                animationIn='fadeInRight' 
                isVisible={this.state.isVisible}>
                    <img src={car} 
                    alt='car park assit game js' 
                    style={ParkingPlaceUpCar}
                    />
                </Animated>
            </div>
        )
    }
}

Car.propTypes = {
    game: propTypes.object.isRequired,
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css,
    game: state.game
})

export default connect(mapStateToProps, null)(Car)
