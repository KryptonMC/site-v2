<script setup>
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
</script>

<template>
  <div class="container">
    <NavBar />
    <div class="hero-section">
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

.hero-section {
  overflow: auto;
}
</style>
