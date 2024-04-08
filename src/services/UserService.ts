import axios from 'axios'

const API_URL = 'https://reqres.in/api'

export async function getUser(userId: number) {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch user')
  }
}
