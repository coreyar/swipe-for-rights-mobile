// @flow
import axios from "axios";

class ApiService {

  api: Object

  constructor(baseURL: string) {
    this.api = axios.create({
      // base URL is read from the "constructor"
      baseURL,
      // here are some default headers
      headers: {},
      // 10 second timeout...
      timeout: 10000
    });
  }

  login = async (email: string, password: string) => {
    const response = await this.api.post("login", { email, password });
    this.api.defaults.headers.common.Authorization = `Bearer ${response.data}`;
    return response;
  };

  signUp = (data: {
    email: string,
    password: string,
    street_address: string,
    locality: string,
    region: string,
    postal_code: string
  }) => this.api.post("signup", { ...data });

  saveAddress = (address: {
    street_address: string,
    locality: string,
    region: string,
    postal_code: string
  }) => {
    return this.api.post("me", { ...address });
  };
}

export default ApiService;
