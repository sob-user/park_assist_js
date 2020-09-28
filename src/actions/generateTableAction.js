import { PLACES_UP_LOADED, PLACES_DOWN_LOADED } from './types'



export const placesUp = (places)  => {
    return{
        type: PLACES_UP_LOADED,
        payload: places
    }
}

export const placesDown = (places)  => {
    return{
        type: PLACES_DOWN_LOADED,
        payload: places
    }
}