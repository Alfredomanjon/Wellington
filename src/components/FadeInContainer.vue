<template>
  <div class="fade-in-animation"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in-animation {
  animation: fadeIn 2s;
}
</style>
