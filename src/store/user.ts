import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
  }),
  actions: {
    setUser(userData: any) {
      this.userData = userData
    },
    clearUser() {
      this.userData = null
    },
  },
})
