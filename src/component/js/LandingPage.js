import React, { Component } from 'react'
import LogoGame from '../img/logo_park_assist.png'
import {startGame } from '../../actions/startGameAction'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {Animated} from "react-animated-css"

export class LandingPage extends Component {
    startGame = () => {
        this.props.startGame()
    }
    render() {
        const {css} = this.props
        const {LandingPage} = css
        const {LandingPageContainer} = css
        const {LogoContainer} = css
        const {Logo} = css
        const {ButtonStart} = css
        return (
            <div 
            className='LandingPage' 
            style={LandingPage}>
                
                <div 
                className='LandingPageContainer'
                style={LandingPageContainer}>

                    <Animated 
                    animationIn="bounceInDown" 
                    isVisible={true}>
                    <div 
                    className='LogoContainer'
                    style={LogoContainer}>
                        <img 
                        src={LogoGame} 
                        className='Logo' 
                        style={Logo}
                        alt='logo park-assist-js game'
                        ></img>
                    </div>
                    </Animated>

                    <Animated 
                    animationIn="fadeIn" 
                    animationInDelay={1000}
                    isVisible={true}>
                    <div 
                    className='ButtonStart'
                    style={ButtonStart}
                    onClick={this.startGame}
                    >start</div>
                    </Animated>

                </div>
                
            </div>
        )
    }
}

LandingPage.propTypes = {
    startGame: propTypes.func.isRequired,
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
{startGame})
(LandingPage)
