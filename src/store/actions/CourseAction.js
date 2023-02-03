import { addCourse, formatCourse, getCourse } from "./CourseService";
import { ActionTypes } from "../constants/actionTypes";

export const getPostAction = () => {
    return (dispatch, getState) => {
        getCourse()
        .then((response) => {
            console.log(response.data)
            let courses = response.data.data
            dispatch(confirmedGetPostAction(courses))
        })
    }
}

export const confirmedGetPostAction = (courses) => {
    return {
        type: ActionTypes.CONFIRMED_GET_COURSE, 
        payload: courses
    }
}


export const addCourseAction = (courseData) => {
    return (dispatch, getState) => {
        addCourse(courseData)
        .then((response) => {
            const singlePost = response.data
            console.log(response)
            dispatch(confirmedCreatePostAction(singlePost));
    })
        .catch((error) => {
            const errorMessage = error.response.data.message
            dispatch(failedAddCourseAction(errorMessage)) 
        })
    }
}

export function confirmedCreatePostAction(singlePost) {
    return {
        type: ActionTypes.CONFIRMED_ADD_COURSE,
        payload: singlePost,
    };
}

export const failedAddCourseAction = (message) => {
    return {
        type: ActionTypes.FAILED_ADD_COURSE,
        payload: message
    }
}