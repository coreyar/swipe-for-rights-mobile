import { Container } from 'unstated'
import API from '../services/Api'

class LoginContainer extends Container {
  api = API.create()
  state = {
    email: '',
    password: '',
    location: {},
    isFetching: false,
    error: undefined,
  };
  setEmail = (email) => {
    this.setState({ email });
  };
  setPassword = (password) => {
    this.setState({ password });
  };
  setLocation = ( location) => {
    this.setState({location})
  }
  async login() {
    this.setState({
      isFetching: true
    })
    try {
      const response = await this.api.login(this.state.email, this.state.password)
      this.setState({
        isFetching: false
      })
    } catch (err) {
      console.log({err})
    }
  }
  async signUp() {
    this.setState({
      isFetching: true,
      error : ''
    })
    try {
      if (this.state.street_address.length > 1 && this.state.locality.length > 1 && this.state.region.length > 1 && this.state.postal_code.length > 1) {
        const response = await this.api.signUp(this.state.email, this.state.password, this.state.location)  
      } else {
        this.setState({error: 'Data is invalid'})
      }
      
      this.setState({
        isFetching: false
      })
    } catch (err) {
      console.log({err})
    }
  }
}

export default new LoginContainer();