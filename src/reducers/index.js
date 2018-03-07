import { combineReducers } from 'redux';
import stepOneReducer from './stepOneReducer';

export default combineReducers({
    stepOne: stepOneReducer
});