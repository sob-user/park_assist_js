import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

export class BannedScreen extends Component {
    render() {
        const {css} = this.props
        const {BannedPage}= css
        const {BannedMessage} = css
        return (
            <section className='BannedPage' style={BannedPage}>
            <article className='BannedMessage' style={BannedMessage}>
                For user's experience this screen has been disable, 
                this game only available on desktop
            </article>
            </section>
        )
    }
}

BannedScreen.propTypes = {
    css: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    css: state.css.css
})

export default 
connect(
mapStateToProps,
null)
(BannedScreen)

