<script setup>
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
</script>

<template>
  <div style="display: flex; flex-flow: column; height: 100vh">
    <NavBar />
    <div style="overflow: auto">
      <Hero />
    </div>
  </div>
</template>

<style scoped></style>
