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
     console.log(data)

    return data.filter((elem)=>{ return new Date(elem.date+"T"+elem.time).getTime() >  new Date().getTime() });
}

export const getStudentClassDates = async (classObj) => {
  
     
    const { data } = await api.get('/profile/classDate/student/',{
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    }) 
     
    console.log(data)
    return data.filter((elem)=> elem.timetableId)
}

export const createClassDate = async (classObj) => {
  
     console.log(classObj)
    const { data } = await api.post('/profile/classDate', classObj,{
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    }) 
     

    return data
}



