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

  const signUp = (email, password, location) => api.post('signup', {email, password, location})

  const saveAddress = (address) => {
    return api.post('me', {...address})
  }

  return {
    login,
    signUp,
    saveAddress
  }
}

export default {
  create
}
