import React, { Component } from 'react'
import Car from './Car'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class Road extends Component {
    componentDidUpdate() {
        const action = this.props.action

            if(action === 'STARTING_GAME') {
                this.checkEmptyPlaces()
            }
    }

    checkEmptyPlaces() {
        const places =this.props.places
        const up = places.up
        const arrayPosition = [76, 63, 48, 32]
        const blank = []
        up.map((place, index) => {
            if(place.isEmpty === true) {
                blank.push(arrayPosition[index])
            }
            return null
        })

        if(blank.length === 1) {
            this.launchAnimationAfterCountdown(blank[0])
        } 
        else if(blank.length === 0) {
            this.launchAnimationAfterCountdown(90)
        }
        else {
            this.launchAnimationAfterCountdown(blank[1])
        }
    }

    launchAnimationAfterCountdown(position) {
        setTimeout(() => { 
            this.modifyWidthAndAnimationCar(position)
        }, 2000)
    }

    modifyWidthAndAnimationCar = (position) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let counter = 0
                const aa = setInterval(() => { 
                    counter = counter - 0.1
                    animationCarDiv.style.left=`${counter}%`
                    if(counter < -[position]) {
                        clearInterval(aa)
                        this.engageRear(position)
                    }
                }, 20)
    }

    engageRear = (position) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let a = position
        let b = 0
        let c = 0
        const et = setInterval(() => { 
            a = a - 0.01
            b = b - 0.01
            c = c - 0.1
            animationCarDiv.style.left=`-${a}%`
            animationCarDiv.style.top=`${b}%`
            animationCarDiv.style.transform=`rotate(${c}deg)`
            if(c === -33.1000000000002) {
                clearInterval(et)
                this.rear(a, b)
            }
        }, 20)
    }

    rear = (x, y) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let a = x
        let b = y
        const iu = setInterval(() => { 
            a = a - 0.09
            b = b - 0.5
            animationCarDiv.style.left=`-${a}%`
            animationCarDiv.style.top=`${b}%`
            console.log(b)
            if(b === -58.809999999999974) {
                clearInterval(iu)
                this.final()
            }
        }, 200)
        
    }

    final = (position) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let a = animationCarDiv.style.left
        let b = animationCarDiv.style.top
        let c = -33.1000000000002
        console.log('a: ', a, 'b: ', b)
        setInterval(() => { 
            a = a - 0.01
            b = b - 0.01
            c = c + 0.1
            animationCarDiv.style.left=`-${a}%`
            animationCarDiv.style.top=`${b}%`
            animationCarDiv.style.transform=`rotate(${c}deg)`
            // if(c === 0) {
            //     clearInterval(et)
            //     this.rear(a, b)
            // }
        }, 20)
    }

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
    css: state.css.css,
    action: state.action.msg,
    places: state.places
})

export default 
connect(
mapStateToProps,
null
)
(Road)
