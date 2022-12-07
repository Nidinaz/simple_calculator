import { combineReducers } from "redux";
import{ calculatorReducer, CALCULATOR_KEY  } from './calculatorRedux/calculator.reducer'


let rootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {rootReducer}