<script setup>
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
</script>

<template>
  <div class="container">
    <NavBar />
    <div style="overflow: auto">
      <Hero />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>
