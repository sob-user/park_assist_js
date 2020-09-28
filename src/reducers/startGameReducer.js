import { START_GAME } from '../actions/types'

const initialState = {
    start: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                start: true
            }
        default:
            return state
    }
}