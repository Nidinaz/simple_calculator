import { LOAD_ANS, LOAD_CLEAR, LOAD_BUTTONS } from "./calculator.actionTypes";

export const loadButtons = (number) => {
    return {
        type:LOAD_BUTTONS,
        payload:number
    }
}

export const loadAnswer = (number) => {
    return {
        type:LOAD_ANS,
        payload:number
    }
}

export const loadClear = (number) => {
    return {
        type:LOAD_CLEAR,
        payload:number
    }
}

