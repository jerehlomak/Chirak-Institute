import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    auth: {
        firstName: '',
        email: '',
        otp: '',
        id: '',
    },
    errorMessage: '',
}

export const AuthReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SIGNUP_CONFIRMED_ACTION:
            return {
                ...state,
                auth: payload,
                errorMessage: '',
            }
        case ActionTypes.FAILED_SIGUP_ACTION:
            return {
                ...state,
                errorMessage: payload,
            }
        default: return state
        
    }

   
}