// #region Global Imports
import { combineReducers } from 'redux';
import { sneakers, sneaker } from '../components/sneakers/store/reducer'
import { layout } from '../HOC/store/reducer'

export default combineReducers({
    layout,
    sneakers,
    sneaker,
});
