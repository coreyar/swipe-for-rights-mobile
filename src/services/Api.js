import axios from 'axios'
// import Config from 'react-native-config'

const create = (baseURL = 'http://127.0.0.1:8080') => {
  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10000
  })

  const login = async (email, password) => {
    const response = await api.post('login', {email, password,})
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
    return response
  }

  const signup = (email, password) => api.post('signup', {email, password})

  const saveAddress = (address) => {
   console.log({...address})
    return api.post('me', {...address})
  }

  return {
    login,
    signup,
    saveAddress
  }
}

export default {
  create
}
