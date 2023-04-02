<template>
  <div class="transition-onboarding-container">
    <p class="transition-title">Genial. ¡Empecemos!</p>
  </div>
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

.transition-onboarding-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  animation: fadeIn 1s;
}

.transition-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 6px;
}
</style>
