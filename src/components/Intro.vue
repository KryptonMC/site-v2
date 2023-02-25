<script setup>
import Warn from './Warn.vue'
</script>

<template>
  <div class="intro">
    <h3>Introduction</h3>
    <p>
      Krypton is Minecraft server software, just like Paper or Sponge, but unlike both of those,
      it's written entirely from scratch, and doesn't depend on vanilla Minecraft.
    </p>
    <p>
      Krypton's API is relatively new. Our aim is to make our API simple to understand, so it is
      easy to learn, but powerful enough to achieve complex tasks. We also provide ways to
      manipulate many vanilla mechanics, and many events to control what happens on the server.
    </p>
    <p>
      In addition, though not directly encouraged, it is possible, and in fact, very easy, to depend
      directly on the implementation. No longer do you have to setup Paperweight or ForgeGradle or
      remap JARs, it is as simple as adding the server as a dependency.
    </p>
    <Warn text="Krypton is still in fairly early development, so go easy on us please :)" />
  </div>
</template>

<style scoped></style>
