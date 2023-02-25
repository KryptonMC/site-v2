<template>
  <div class="navbar">
    <span>
      <img
          src="../assets/images/banner.png"
          alt="Krypton"
          width="210"
          height="60"
      />
    </span>
    <div class="navbar-right">
      <a href="https://github.com/KryptonMC/Krypton" class="navbar-link">
        <i class="fab fa-github" />
        GitHub
      </a>
      <a href="https://discord.com/invite/4QuwYACDRX" class="navbar-link">
        <i class="fab fa-discord" />
        Discord
      </a>
      <a href="https://wiki.kryptonmc.org/" class="navbar-link">
        <i class="fas fa-book" style="font-size: 24px" />
        Wiki
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
$navbar-height: 60px;

.navbar {
  height: $navbar-height;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  background-color: #2f2f2f;

  &:after {
    width: 100%;
    height: 7px;
    background-image: linear-gradient(to bottom, #222, rgba(#222, .75), transparent);
    content: "";
    display: block;
    position: absolute;
  }

  flex-shrink: 0;

  &:after {
    position: absolute;
    width: calc(100% - 4px);
    top: $navbar-height;
    left: 0;
  }

  img {
    padding: 10px 0 10px 10px;
  }

  span {
    display: flex;
    margin-left: calc(100% / 6.4);
    margin-right: auto;

    > i {
      display: block;
      font-size: 24px;
      align-self: center;
    }
  }
}

.navbar-right {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  padding-right: calc(100% / 6.4);
}

.navbar-link {
  display: flex;
  align-items: center;
  padding: 5px 10px;

  > i {
    margin-right: 6px;
    font-size: 28px;
  }

  &:hover {
    transition-duration: .5s;
    background-color: #252525;

    &:after {
      transition-duration: .5s;
      width: 100%;
    }
  }
}
</style>
