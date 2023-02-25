<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <div class="warn">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.warn {
  background-color: rgba(#ff6c32, 0.3);
  padding: 10px;
  border-left: solid 5px #ff6c32;
  display: block;
}
</style>
