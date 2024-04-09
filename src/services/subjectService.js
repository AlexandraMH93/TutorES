import api from "./config"

export const getAllSubjects = async () => {
    const { data } = await api.get('/subject', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })

    return data
}

export const getAvailableSubjects = async () => {
    const { data } = await api.get('/subject/available', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })

    return data
}


export const getOneSubject = async (id) => {
    const { data } = await api.get(`/subject/:${id}`)
    return data
}

