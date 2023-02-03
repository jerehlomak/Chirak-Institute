import axios from "../../api/axios"

const REGISTER_URL = '/api/v1/auth/register'
const headers = {
    "Access-Control-Allow-Origin": "*",

}

export const signUp = (firstName, lastName, email, password, userType) => {
    const postData = {
        firstName,
        lastName, 
        email, 
        password, 
        userType 
    }

    return axios.post(
        `${REGISTER_URL}`,
        postData,
    )
}
