import api from "./config"

export const login = async (userData) => {
    
    try {
        const { data } = await api.post('auth/login', userData)
        return data
    } catch (error) {
        return false
    }
    
    
   

} 

export const signUp = async (userData) => {
    try {
        const  {data}  = await api.post('auth/signUp', userData)
         
        return data
    } catch (error) {
        console.log(error)
    }

}