import React, { Component } from 'react'
import Car from './Car'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class Road extends Component {
    componentDidUpdate() {
        const action = this.props.action

            if(action === 'STARTING_GAME') {
                this.findEmptyPlacesAndLaunchAnimantion()
            }
    }

    findEmptyPlacesAndLaunchAnimantion() {
        const places =this.props.places
        const up = places.up
        const arrayPosition = [522, 452, 350, 248]
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
                    counter = counter - 0.5
                    animationCarDiv.style.transform=`translate(${counter}%, 0%)`
                    if(counter < -[position]) {
                        clearInterval(aa)
                        this.engageRear(counter)
                    }
                }, 20)
    }

    engageRear = (counter) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let a = counter
        let b = 0
        let c = 0
        const et = setInterval(() => { 
            a = a + 0.1
            b = b - 0.06
            c = c - 0.05
            // animationCarDiv.style.left=`-${a}%`
            // animationCarDiv.style.top=`${b}%`
            animationCarDiv.style.transform=`translate(${a}%, ${b}%) rotate(${c}deg)`
            console.log(c)
            if( c === -43.04999999999969) {
                clearInterval(et)
                this.rear(a, b, c)
            }
        }, 20)
    }

    rear = (x, y, z) => {
        const animationCarDiv = document.getElementsByClassName('Car')[0]
        let a = x
        let b = y
        let c = z
        const iu = setInterval(() => { 
            a = a + 0.1
            b = b - 0.16
            c = c + 0.1
            animationCarDiv.style.transform=`translate(${a}%, ${b}%) rotate(${c}deg)`
            // animationCarDiv.style.left=`-${a}%`
            // animationCarDiv.style.top=`${b}%`
            console.log(b)
            if(c > 0) {
                clearInterval(iu)
                // this.final()
            }
        }, 20)
        
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
