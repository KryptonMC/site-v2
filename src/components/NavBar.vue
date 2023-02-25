<script setup></script>

<template>
  <header>
    <img src="../assets/images/banner.png" alt="Krypton MC Logo" class="logo" />
    <nav>
      <ul class="items">
        <li><a href="https://github.com/KryptonMC/Krypton">Github</a></li>
        <li><a href="https://discord.com/invite/4QuwYACDRX">Discord</a></li>
        <li><a href="https://wiki.kryptonmc.org/">Wiki</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f2f2f;
  height: 60px;
  padding: 15px;
  font-family: 'Merriweather Sans Light', sans-serif;
}
img {
  width: 200px;
  height: 40px;
}

nav ul li {
  list-style-type: none;
  align-items: center;
  display: inline-block;
  font-size: 28px;
}

nav ul li a {
  color: #bebebe;
  padding: 5px 25px;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
