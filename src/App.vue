
<template>
  <div id="app">
    <header>
      User Management Dashboard
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store';
import { onMounted } from 'vue';
import router from '@/router';

const userStore = useUserStore();

// Check if user is authenticated on page load
onMounted(() => {
  if (!userStore.user && router.currentRoute.value.path !== '/signin') {
    // Redirect to sign in page if not signed in
    router.push('/signin');
  }
});
</script>

