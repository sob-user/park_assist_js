import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gameboard from '../component/js/Gameboard'
import LandingPage from '../component/js/LandingPage'
import propTypes from 'prop-types'
import BannedScreen from '../component/js/BannedScreen'
import { loadCss } from '../actions/loadCssActions'

export class Switchman extends Component {
    state = {
        screenWidth: null,
        screenBanned: false
    }
    componentDidMount() {
        this.props.loadCss()
        this.getWidth()
    }

    componentDidUpdate() {
        const screenWidth = this.state.screenWidth
        const screenBanned = this.state.screenBanned

            if(screenWidth < 1025) {
                if(screenBanned !== true) {
                    this.setState({ screenBanned: true })
                }
            }
    }

    getWidth = () => {
        const screenWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
        )
        this.setState({ screenWidth })
    }

    render() {
    const {start} = this.props.startGame
    const screenBanned = this.state.screenBanned

    const bannedPage = (<BannedScreen />)
    const gameBoardPage = (<Gameboard />)
    const landingPage = (<LandingPage/>)
    const toggleLandingPageToGameboard = start ? gameBoardPage : landingPage

        return (
            <div>
                {screenBanned ? bannedPage : toggleLandingPageToGameboard}
                
            </div>
        )
    }
}

Switchman.propTypes = {
    loadCss: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    startGame: state.startGame
})

export default 
connect(
mapStateToProps,
{loadCss})
(Switchman)
