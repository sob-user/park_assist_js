import { combineReducers } from 'redux';
import startGameReducer from './startGameReducer'
import cssReducer from './cssReducer'
import loadPlacesReducer from './loadPlacesReducer'
import gameReducer from './gameReducer'
import actionsGameReducer from './actionsGameReducer'

export default combineReducers({
    startGame: startGameReducer,
    css: cssReducer,
    places: loadPlacesReducer,
    game: gameReducer,
    action: actionsGameReducer
})