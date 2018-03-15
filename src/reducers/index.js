import { combineReducers } from 'redux';
import stepOneReducer from './stepOneReducer';
import stepTwoReducer from "./stepTwoReducer";
import stepThreeReducer from './stepThreeReducer';

export default combineReducers({
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer
});