import { 
SET_OCCUPATION_RATE,
CHOOSE_RIGHT,
CHOOSE_LEFT,
STARTING_GAME
} from '../actions/types'


const initialState = {
    rate: 50,
    start: false,
    right: false,
    left: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_OCCUPATION_RATE:
            return {
                ...state,
                rate: action.payload
        }
        case CHOOSE_RIGHT:
            return {
                ...state,
                right: true,
                left: false
        }
        case CHOOSE_LEFT:
            return {
                ...state,
                left: true,
                right: false
        }
        case STARTING_GAME:
            return {
                ...state,
                start: true
        }
        default:
            return state
    }
}