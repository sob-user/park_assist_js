import { PLACES_UP_LOADED, PLACES_DOWN_LOADED, PLACES_DOWN_CHANGED,PLACES_UP_CHANGED } from './types'



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

export const changePlacesUp = (places)  => {
    return{
        type: PLACES_UP_CHANGED,
        payload: places
    }
}

export const changePlacesDown = (places)  => {
    return{
        type: PLACES_DOWN_CHANGED,
        payload: places
    }
}