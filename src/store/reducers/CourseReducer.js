import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    courses: [],
    errorMessage: '',
    courseData: {

    }
}

export const CourseReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.CONFIRMED_ADD_COURSE:
            return {
                ...state,
                courses: action.payload,
                errorMessage: ''
            }
        case ActionTypes.FAILED_ADD_COURSE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default: 
            return state
    }
}

export const GetCourseReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.CONFIRMED_GET_COURSE:
            return {
                ...state,
                courses: action.payload
            }
        default: 
            return state
    }
}