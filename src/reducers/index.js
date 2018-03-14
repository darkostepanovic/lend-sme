import { combineReducers } from 'redux';
import stepOneReducer from './stepOneReducer';
import stepTwoReducer from "./stepTwoReducer";

export default combineReducers({
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer
});