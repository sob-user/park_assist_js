import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class Controller extends Component {
    render() {
        const {css} = this.props
        const {controller} = css
        const {startGame} = css

        return (
            <div className='Controller' style={controller}>
                <div style={startGame}></div>
            </div>
        )
    }
}

Controller.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null
)
(Controller)
