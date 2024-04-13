import api from './config'

export const getUserInfo = async () => {
    const { data } = await api.get('/profile/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })
 
    return data
}


export const updateUserInfo = async (newUser) => {
    try {
        const {data}  = await api.put('/profile/', newUser, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }                                                   
        })
         
      
        return data
        
    } catch (error) {
        return false
    }
   
}

/* export const getTeacherInfo = async () => {
    const { data } = await api.get('/profile/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }                                                   
    })
    return data
} */