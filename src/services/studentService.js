import api from "./config"

export const getTimeTableBySubject = async (id) => {
    const { data } = await api.get('/timeTable/subject/'+id, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })

    return data
}



export const getTeachersByDate = async (dateObj) => {
  
     
    const { data } = await api.post('/teacher/date', dateObj,{
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })
     

    return data
}



export const createClassDate = async (classObj) => {
  
     
    const { data } = await api.post('/profile/classDate', classObj,{
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    }) 
     

    return data
}



