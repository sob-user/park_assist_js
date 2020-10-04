import React, { Component } from 'react'
import Car from './Car'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import {changePlacesUp, changePlacesDown} from '../../actions/generateTableAction'
import {actions} from '../../actions/gameAction'

export class Road extends Component {
    
    state= {
        blockInfiniteLoop: false
    }

    componentDidUpdate() {
        const action = this.props.action
        const rightSide = this.props.game.right
        const leftSide = this.props.game.left
        const blockInfiniteLoop = this.state.blockInfiniteLoop

        if(action === 'STARTING_GAME') {
            if(leftSide === true) {
                if(blockInfiniteLoop !== true) {
                this.setState({blockInfiniteLoop: true})
                this.findEmptyPlacesAndLaunchAnimation(false)
                }
            }
            else if(rightSide === true) {
                if(blockInfiniteLoop !== true) {
                this.setState({blockInfiniteLoop: true})
                this.findEmptyPlacesAndLaunchAnimation(true)
                }
            }
        }
    }

    findEmptyPlacesAndLaunchAnimation(booleanSide) {
        const rightOrLeft = booleanSide
        const placesRight  =this.props.places.up
        const placesLeft  =this.props.places.down
        const toggleLeftRight = rightOrLeft ? placesRight : placesLeft
        const positionToStartRear = [522, 452, 350, 248]
        const howManyPlacesIsFree = []
        const finalPositions = [437, 335, 232, 129]
        const finalPositionsOfFirstFreePlaces = []
        const finalPositionsifNoFreePlaces = 572
        toggleLeftRight.map((place, index) => {
            if(place.isEmpty === true) {
                howManyPlacesIsFree.push(positionToStartRear[index])
                finalPositionsOfFirstFreePlaces.push(finalPositions[index])
            }
            return null
        })

        if(howManyPlacesIsFree.length === 1) {
            this.countdownBeforeForward(howManyPlacesIsFree[0], false, finalPositionsOfFirstFreePlaces[0], rightOrLeft, positionToStartRear)
        } 
        else if(howManyPlacesIsFree.length === 0) {
            this.countdownBeforeForward(finalPositionsifNoFreePlaces, true)
        }
        else {
            this.countdownBeforeForward(howManyPlacesIsFree[1], false, finalPositionsOfFirstFreePlaces[1], rightOrLeft, positionToStartRear)
        }
    }

    countdownBeforeForward(position, isFull, finalPosition, rightOrLeft, positionToStartRear) {
        setTimeout(() => { 
            this.moveForwardUntilPosition(position, isFull, finalPosition, rightOrLeft, positionToStartRear)
        }, 2000)
    }

    moveForwardUntilPosition = (position, isFull, finalPosition, rightOrLeft, positionToStartRear) => {
        const car = document.getElementsByClassName('Car')[0]
        let positionOnX = 0

        const doThisUpToPosition = setInterval(() => { 
            positionOnX  = positionOnX  - 0.5
            car.style.transform=`translate(${positionOnX }%, 0%)`

            if(positionOnX  < -[position]) {
                clearInterval(doThisUpToPosition )
                if(isFull === false) {
                this.startManeuver(positionOnX, car, finalPosition, rightOrLeft, position, positionToStartRear)
                }
            }
        }, 20)
    }

    startManeuver = (xPosition, elemCar, finalPosition, rightOrLeft, position, positionToStartRear) => {
        let positionOnX = xPosition
        const car = elemCar
        let positionOnY = 0
        let rotationAngle = 0
        const finalRotationAgle = rightOrLeft ? -43.04999999999969 : 43.04999999999969

        const doThisUpToPosition = setInterval(() => { 
            positionOnX = positionOnX + 0.1
            positionOnY = rightOrLeft ? positionOnY - 0.06 : positionOnY + 0.06
            rotationAngle = rightOrLeft ? rotationAngle - 0.05 : rotationAngle + 0.05

            car.style.transform=`translate(${positionOnX}%, ${positionOnY}%) rotate(${rotationAngle}deg)`
            if( rotationAngle === finalRotationAgle) {
                clearInterval(doThisUpToPosition)
                this.maneuverPhaseTwo(positionOnX, positionOnY, rotationAngle, car, finalPosition, rightOrLeft, position, positionToStartRear)
            }
        }, 20)
    }

    maneuverPhaseTwo = (xPosition, yPosition, Rotation, elemCar, finalPosition, rightOrLeft, position, positionToStartRear) => {
        let positionOnX = xPosition
        const car = elemCar
        let positionOnY = yPosition
        let rotationAngle = Rotation
        const finalRotationAngle = 0

        const doThisUpToPosition = setInterval(() => { 
            positionOnX = positionOnX + 0.1
            positionOnY = rightOrLeft ? positionOnY - 0.16 : positionOnY + 0.16
            rotationAngle = rightOrLeft ? rotationAngle + 0.1 : rotationAngle - 0.1

            car.style.transform=`translate(${positionOnX}%, ${positionOnY}%) rotate(${rotationAngle}deg)`

            if(rotationAngle > finalRotationAngle && rightOrLeft === true) {
                clearInterval(doThisUpToPosition)
                this.finalManeuver(positionOnX, positionOnY, rotationAngle, car, finalPosition, position, rightOrLeft, positionToStartRear)
            }
            else if (rotationAngle < finalRotationAngle && rightOrLeft === false) {
                clearInterval(doThisUpToPosition)
                this.finalManeuver(positionOnX, positionOnY, rotationAngle, car, finalPosition, position, rightOrLeft, positionToStartRear)
            }
        }, 20)
        
    }

    finalManeuver = (xPosition, yPosition, Rotation, elemCar, finalPosition, position, rightOrLeft, positionToStartRear) => {
        let positionOnX = xPosition
        const car = elemCar
        const positionOnY = yPosition
        const rotationAngle = Rotation
        const finalpositionOnX = finalPosition

        const doThisUpToPosition = setInterval(() => { 
            positionOnX = positionOnX - 0.2
            car.style.transform=`translate(${positionOnX}%, ${positionOnY}%) rotate(${rotationAngle}deg)`

            if(positionOnX < - finalpositionOnX) {
                clearInterval(doThisUpToPosition)
            this.findIndexOfPlaceTaken(position, rightOrLeft, positionToStartRear, elemCar)
            }
        }, 20)
    }

    findIndexOfPlaceTaken = (position, rightOrLeft, positionToStartRear, elemCar) => {
        positionToStartRear.forEach((element, index) => {
            if(element === position) {
                this.addPlaceTakenInPlacesArray(index, rightOrLeft, elemCar)
            }
        });
    }

    addPlaceTakenInPlacesArray = (index, rightOrLeft, elemCar) => {
        const placeUp = this.props.places.up
        const placeDown = this.props.places.down
        const toggleLeftRight = rightOrLeft ? placeUp[index] : placeDown[index]
        toggleLeftRight.isEmpty = false
        rightOrLeft ? this.props.changePlacesUp(placeUp) : this.props.changePlacesDown(placeDown)
        rightOrLeft ? this.props.actions('PLACES_UP_CHANGED') : this.props.actions('PLACES_DOWN_CHANGED')
        elemCar.style.transform = 'translate(0%, 0%) rotate(0deg)'
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
    game: state.game,
    places: state.places
})

export default 
connect(
mapStateToProps,
{changePlacesUp,
changePlacesDown,
actions}
)
(Road)
