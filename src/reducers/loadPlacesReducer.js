import { PLACES_UP_LOADED, PLACES_DOWN_LOADED, PLACES_UP_CHANGED, PLACES_DOWN_CHANGED } from '../actions/types'


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
        case PLACES_UP_CHANGED:
            return {
                ...state,
                up: action.payload
        }
        case PLACES_DOWN_CHANGED:
            return {
                ...state,
                down: action.payload
        }
        default:
            return state
    }
}