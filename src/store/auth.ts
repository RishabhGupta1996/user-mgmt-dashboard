import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userToken: null,
  }),
  actions: {
    login(token: string) {
      this.isAuthenticated = true
      this.userToken = token
      // You can also store user data like user id, email, etc., if needed
    },
    logout() {
      this.isAuthenticated = false
      this.userToken = null
      // Clear any user-related data from the store
    },
  },
})
