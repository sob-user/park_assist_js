import {
ACTION_GAME,
ACTION_RESET
} from '../actions/types';
    
    const initialState = {
        msg: null
    }
    
    export default function(state = initialState, action) {
        switch(action.type) {
            case ACTION_GAME:
                return {
                    ...action.payload,
                    msg: action.payload
                }
            case ACTION_RESET:
                return {
                    ...action.payload,
                    msg: null
                }
            default:
                return state
        }
    }