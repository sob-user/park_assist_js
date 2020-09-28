import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gameboard from '../component/js/Gameboard'
import LandingPage from '../component/js/LandingPage'
import propTypes from 'prop-types'
import { loadCss } from '../actions/loadCssActions'

export class SwitchMan extends Component {
    componentDidMount() {
        this.props.loadCss()
    }
    render() {
    const { start } = this.props.startGame
        return (
            <div>
                {start ? <Gameboard /> : <LandingPage/>}
            </div>
        )
    }
}

SwitchMan.propTypes = {
    loadCss: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    startGame: state.startGame
})

export default 
connect(
mapStateToProps,
{loadCss})
(SwitchMan)
