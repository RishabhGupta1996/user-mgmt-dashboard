import { login } from '../services/AuthService'

describe('AuthService', () => {
  it('should return user data on successful login', async () => {
    const email = 'eve.holt@reqres.in'
    const password = 'cityslicka'
    const userData = await login(email, password)
    expect(userData).toHaveProperty('token')
  })

  it('should throw an error on failed login', async () => {
    const email = 'test@example.com'
    const password = 'password'
    await expect(login(email, password)).rejects.toThrow('Login failed')
  })
})
