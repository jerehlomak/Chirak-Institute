import { signUp } from './AuthService'
import { ActionTypes } from '../constants/actionTypes'


export const signUpAction = (firstName, lastName, email, password, userType) => {
    return (dispatch) => {
        signUp(firstName, lastName, email, password, userType)
        .then((response) => {
            const successMessage = response.data.message
            console.log(successMessage)
            console.log(response.data)
            dispatch(confirmedSignUpAction(response.data)                               )
        })
        .catch((error) => {
            const errorMessage = error.response.data.message
            console.log(errorMessage)
            dispatch(failedSignUpAction(errorMessage)) 
        })
    }
}

export const confirmedSignUpAction = (payload) => {
    return {
        type: ActionTypes.SIGNUP_CONFIRMED_ACTION,
        payload,
    }
}

export const failedSignUpAction = (message) => {
    return {
        type: ActionTypes.FAILED_SIGUP_ACTION,
        payload: message
    }
}