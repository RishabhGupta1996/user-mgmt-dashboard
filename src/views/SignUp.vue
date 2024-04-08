<template>
  <form @submit.prevent="signUp">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from '@/store';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();

    const signUp = async () => {
      try {
        await userStore.signUp({ email: email.value, password: password.value });
        // Redirect to dashboard
      } catch (error) {
        console.error('Sign up failed:', error);
      }
    };

    return { email, password, signUp };
  },
});
</script>
