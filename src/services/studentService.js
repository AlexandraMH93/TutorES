import api from "./config"

export const getTimeTableBySubject = async (id) => {
    const { data } = await api.get('/timeTable/subject/'+id, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })

    return data
}