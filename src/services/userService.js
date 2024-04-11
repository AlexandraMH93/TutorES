import api from './config'

export const getUserInfo = async () => {
    const { data } = await api.get('/profile/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })
    console.log(data)
    return data
}


/* export const getTeacherInfo = async () => {
    const { data } = await api.get('/profile/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })
    return data
} */