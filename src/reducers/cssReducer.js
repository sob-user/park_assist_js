import { CSS_LOADED, CSS_LOADING } from '../actions/types'

const initialState = {
    loading: false,
    css: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CSS_LOADING:
            return {
                ...state,
                loading: false
            }
        case CSS_LOADED:
            return {
                ...state,
                css: action.payload,
                loading: true
        }
        default:
            return state
    }
}