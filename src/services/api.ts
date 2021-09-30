import axios from 'axios'
console.log('api:', process.env.API)
const api = axios.create({
  baseURL: process.env.API
})

export default api
