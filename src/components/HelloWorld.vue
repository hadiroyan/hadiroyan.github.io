<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="p-5">
    <h1 class="text-blue-600 font-bold text-xl">Hello World</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
