import { 
SET_OCCUPATION_RATE,
CHOOSE_RIGHT,
CHOOSE_LEFT,
STARTING_GAME,
ACTION_GAME,
ACTION_RESET
} from './types'

export const actions = (msg) => {
    return {
        type: ACTION_GAME,
        payload: msg
    }
}

export const actionsReset = () => {
    return {
        type: ACTION_RESET
    }
}

export const setOccupationRate = (rate)  => {
        return {
                type: SET_OCCUPATION_RATE,
                payload: rate
            }
}

export const chooseRight = ()  => {
    return {
        type: CHOOSE_RIGHT
    }
}

export const chooseLeft = () => {
    return {
        type: CHOOSE_LEFT
    }
}

export const startingGame = () => {
    return {
        type: STARTING_GAME
    }
}