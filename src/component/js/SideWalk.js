import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import SidewalkBorder from './SidewalkBorder'
import SidewalkMiddle from './SidewalkMiddle'

export class SideWalk extends Component {
    render() {
        const {css} = this.props
        const {sidewalkUp} = css

        const {sidewalkLeftTop} = css
        const {sidewalkMiddleTop} = css
        const {sidewalkRightTop} = css

        return (
            <div className='Sidewalk' style={sidewalkUp}>
                <SidewalkBorder style={sidewalkLeftTop}/>
                <SidewalkMiddle style={sidewalkMiddleTop}/>
                <SidewalkBorder style={sidewalkRightTop}/>
            </div>
        )
    }
}

SideWalk.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null)
(SideWalk)
