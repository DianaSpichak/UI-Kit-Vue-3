<script setup>
const emit = defineEmits(['header-click']);

const handleHeaderClick = () => {
  emit('header-click');
};
</script>

<template>
  <header class="header" @click="handleHeaderClick">
    <router-link to="/">UI Kit (Vue 3 + Composition API)</router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
}
</style>