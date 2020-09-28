import React, { Component } from 'react'
import Car from './Car'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class Road extends Component {
    render() {
        const {css} = this.props
        const {road}= css
        const {animationCar} = css
        const {car} = css

        return (
            <div className='Road' style={road}>
                <div 
                className='AnimationCar'
                style={animationCar}>
                </div>
                <Car style={car}/>
            </div>
        )
    }
}

Road.propTypes = {
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
(Road)
