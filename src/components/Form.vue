<template>
  <form @submit.prevent="handleSubmit">
    <slot name="header"></slot>
    <div class="form-group">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
    <button type="submit" class="btn btn-primary">{{ submitText }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const submitText = ref('Submit')

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted')
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.btn {
  padding: 0.5rem 1rem;
  background-color: #3490dc;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #2779bd;
}
</style>
