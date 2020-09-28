import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import SidewalkBorder from './SidewalkBorder'
import SidewalkMiddleBottom from './sidewalkMiddleBottom'

export class SideWalkDown extends Component {
    render() {
        const {css} = this.props
        const {sidewalkDown} = css
        const {sidewalkLeftBottom} = css
        const {sidewalkMiddleBottom} = css
        const {sidewalkRightBottom} =css

        return (
            <div className='Sidewalk' style={sidewalkDown}>
                <SidewalkBorder style={sidewalkLeftBottom}/>
                <SidewalkMiddleBottom style={sidewalkMiddleBottom}/>
                <SidewalkBorder style={sidewalkRightBottom}/>
            </div>
        )
    }
}

SideWalkDown.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null)
(SideWalkDown)