import axios from "../../api/axios";

const ADD_COURSE_URL = '/api/v1/courses/create'
const GET_COURSE_URL = '/api/v1/courses/all-courses'
const token = localStorage.getItem('token')
console.log(token)
//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzMjcyNWQwZDQyMmRkN2IzYWFhM2Q1OCIsImZpcnN0TmFtZSI6ImVkYWNoZSAiLCJsYXN0TmFtZSI6InByYWlzZSIsImZ1bGxOYW1lIjoiZWRhY2hlICBwcmFpc2UiLCJlbWFpbCI6InByYWlzZUBnbWFpbC5jb20iLCJjb3Vyc2VzIjpbXSwidHJhbnNhY3Rpb25zIjpbXSwidmVyaWZpZWQiOnRydWUsInVzZXJUeXBlIjoidGVhY2hlciIsIndhbGxldCI6MCwib3RwIjoiNzEzMzMwIiwicGFzc3dvcmQiOiIkMmEkMTIkTU9qL21XaEo3aXNZdkF6UC84OE5xT1lXemZaM0xkWmxDbW9LcW5Sdk1SYVkubi9xM25xS0siLCJhY2NyZWRpdGVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMi0wOS0xOFQxNDowNjowOC43MzhaIiwidXBkYXRlZEF0IjoiMjAyMi0wOS0xOFQxNDowOTowMS4xNjFaIiwiX192IjowfSwiaWF0IjoxNjYzNTczMTQ2LCJleHAiOjE2OTUxMDkxNDZ9.zuHM8lHy8v4KH0_I3GLAG3dFEgKXUYoVUW26Lzvs34Q'
export const addCourse = (courseData) => {
    return axios.post(`${ADD_COURSE_URL}`, courseData, {
        headers: {
            'x-access-token': token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export const getCourse = () => {
    return axios.get(`${GET_COURSE_URL}`)
}

export const formatCourse = (postsData) => {
    let posts = []
    for (let key in postsData) {
        posts.push({ ...postsData[key], id:key })
    }

    return posts
}