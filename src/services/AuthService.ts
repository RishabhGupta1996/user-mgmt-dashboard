import axios from 'axios'

const API_URL = 'https://reqres.in/api'

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error('Login failed')
  }
}

export async function register(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error('Registration failed')
  }
}
