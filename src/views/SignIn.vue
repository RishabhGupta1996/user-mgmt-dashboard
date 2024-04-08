<template>
  <form @submit.prevent="signIn">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Sign In</button>
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

    const signIn = async () => {
      try {
        await userStore.signIn({ email: email.value, password: password.value });
        // Redirect to dashboard
      } catch (error) {
        console.error('Sign in failed:', error);
      }
    };

    return { email, password, signIn };
  },
});
</script>



