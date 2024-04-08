<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/store';

export default defineComponent({
  setup() {
    const userStore = useUserStore();

    const signOut = async () => {
      try {
        await userStore.signOut();
        // Redirect to sign in page
      } catch (error) {
        console.error('Sign out failed:', error);
      }
    };

    return { signOut };
  },
});
</script>
