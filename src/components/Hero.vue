<script setup></script>

<template>
  <div class="hero">
    <span>
      <h1>Krypton</h1>
      <h2>A Minecraft server, written from scratch in Kotlin</h2>
    </span>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  background: linear-gradient(135deg, #952bff, #54008c);
  height: calc(100vh - 45px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  color: #f5f5f5;
}

.hero h1 {
  font-size: 8vw;
  font-weight: 600;
}

.hero h2 {
  font-size: 2vw;
}
</style>
