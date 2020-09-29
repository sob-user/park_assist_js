import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { setOccupationRate, actions, chooseRight, chooseLeft } from '../../actions/gameAction'

export class Controller extends Component {
    upOccupationRate = () => {
        if(this.props.game.rate !== 100) {
            this.props.setOccupationRate(this.props.game.rate + 10)
            this.props.actions('SET_OCCUPATION_RATE')
        }
    }

    downOccupationRate = () => {
        if(this.props.game.rate !== 0) {
            this.props.setOccupationRate(this.props.game.rate - 10)
            this.props.actions('SET_OCCUPATION_RATE')
        }
    }

    chooseRightSide = () => {
        if(this.props.game.right !== true) {
            this.props.chooseRight()
        }
    }

    chooseLeftSide = () => {
        if(this.props.game.left !== true) {
            this.props.chooseLeft()
        }
    }

    render() {
        const {css} = this.props
        const {controller} = css
        const {startGame} = css
        const {StartGameButton} = css
        const {OccupationRate} = css
        const {ChooseYourSide} = css
        const {OccupationRateTitle} = css
        const {OccupationRateSet} = css
        const {Less} = css
        const {DisplayOccupationRate} = css
        const {More} = css
        const {ParkRightSide} = css
        const {ParkLeftSide} = css
        const {ChooseYourSideTitle} =css
        const {ChooseYourSideArrows} = css

        return (
            <div className='Controller' style={controller}>
                <div className='OccupationRate' style={OccupationRate}>
                    <div className='OccupationRateTitle' style={OccupationRateTitle}>
                        occupation rate
                    </div>
                    <div className='OccupationRateSet' style={OccupationRateSet}>
                        <div className='Less' style={Less} onClick={this.downOccupationRate}>
                            -
                        </div>
                        <div className='DisplayOccupationRate' style={DisplayOccupationRate}>
                            {this.props.game.rate}%
                        </div>
                        <div className='More' style={More} onClick={this.upOccupationRate}>
                            +
                        </div>
                    </div>
                </div>
                <div className='StartGame 'style={startGame}>
                    <div className='StartGameButton' style={StartGameButton}>
                        <p>start game</p>
                    </div>
                </div>
                <div className='ChooseYourSide' style={ChooseYourSide}>
                    <div className='ChooseYourSideTitle' style={ChooseYourSideTitle}>
                        choose your side
                    </div>
                    <div className='ChooseYourSideArrows' style={ChooseYourSideArrows}>
                        <div className='ParkLeftSide' style={ParkLeftSide} onClick={this.chooseLeftSide}>
                            &larr;
                        </div>
                        <div className='ParkRightSide' style={ParkRightSide} onClick={this.chooseRightSide}>
                            &rarr;
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Controller.propTypes = {
    css: propTypes.object.isRequired,
    setOccupationRate: propTypes.func.isRequired,
    actions: propTypes.func.isRequired,
    chooseRight: propTypes.func.isRequired,
    chooseLeft: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css,
    game: state.game
})

export default 
connect(
mapStateToProps,
{setOccupationRate, actions, chooseRight, chooseLeft}
)
(Controller)
