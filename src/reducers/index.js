import { combineReducers } from 'redux';
import startGameReducer from './startGameReducer'
import cssReducer from './cssReducer'
import loadPlacesReducer from './loadPlacesReducer'

export default combineReducers({
    startGame: startGameReducer,
    css: cssReducer,
    places: loadPlacesReducer
})