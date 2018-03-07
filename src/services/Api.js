import axios from 'axios'
// import Config from 'react-native-config'

const create = (baseURL = 'http://0.0.0.0:8080') => {
  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10000
  })

  const login = (email, password) => {
    const response = api.post('login', {email: email, password,})
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
    return response
  }

  const signUp = (email, password) => api.post('signup', {email, password})

  const saveAddress = (address) => {
    return api.post('me', {...address})
  }

  return {
    login,
    signUp,
    saveAddress
  }
}

export default create()
