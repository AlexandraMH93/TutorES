import axios from "axios"

const api = axios.create({
    baseURL: 'https://api-order-lessons.onrender.com/api'
})

export default api