import React, { Component } from 'react'
import Sidewalk from './SideWalk'
import Road from './Road'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import SidewalkDown from './SidewalkDown'
import Road2 from './Road2'
import Controller from './Controller'

export class Gameboard extends Component {
    render() {
        const {css} = this.props
        const {Gameboard} = css

        return (
            <div 
            className='Gameboard'
            style={Gameboard}>
                <Sidewalk />
                <Road />
                <SidewalkDown />
                <Road2 />
                <Controller />
            </div>
        )
    }
}

Gameboard.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null)(Gameboard)
