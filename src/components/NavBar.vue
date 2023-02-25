<script setup></script>

<template>
  <header>
    <img src="../assets/images/banner.png" alt="Krypton MC Logo" class="logo" />
    <nav>
      <ul class="items">
        <li>
          <a href="https://github.com/KryptonMC/Krypton">
            <font-awesome-icon icon="fa-brands fa-github" />
            Github
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/4QuwYACDRX">
            <font-awesome-icon icon="fa-brands fa-discord" />
            Discord
          </a>
        </li>
        <li>
          <a href="https://wiki.kryptonmc.org/">
            <font-awesome-icon icon="fa-solid fa-book" />
            Wiki
          </a>
        </li>
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
  padding: 20px;
  font-family: 'Merriweather Sans Light', sans-serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}
img {
  width: 200px;
  height: 40px;
}

nav ul li {
  list-style-type: none;
  align-items: center;
  display: inline-block;
  font-size: 24px;
}

nav ul li a {
  color: #bebebe;
  padding: 10px 30px;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
