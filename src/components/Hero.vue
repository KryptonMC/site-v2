<script setup></script>

<template>
  <div class="hero">
    <span>
      <h1>Krypton</h1>
      <h2>A fast, lightweight Minecraft server written from scratch</h2>
    </span>
  </div>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: calc(100vh - 45px);
  background: linear-gradient(135deg, #952bff, #54008c);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  span {
    position: relative;
    bottom: 32px;
  }

  h1, h2 {
    width: fit-content;
    margin: auto;
  }

  h1 {
    font-size: 8vw;
  }

  h2 {
    font-size: 2vw;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
