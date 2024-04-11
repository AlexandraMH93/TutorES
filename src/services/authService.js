import api from "./config"

export const login = async (userData) => {
    const { data } = await api.post('auth/login', userData)
    
    return data
} 

export const signUp = async (userData) => {
    const { data } = await api.post('auth/signUp', userData)

    return data
}