import { PLACES_UP_LOADED, PLACES_DOWN_LOADED } from '../actions/types'


const initialState = {
    loading: true,
    up: [],
    down: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PLACES_UP_LOADED:
            return {
                ...state,
                up: action.payload,
                loading: false
        }
        case PLACES_DOWN_LOADED:
            return {
                ...state,
                down: action.payload,
                loading: false
        }
        default:
            return state
    }
}