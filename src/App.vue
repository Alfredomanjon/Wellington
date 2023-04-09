<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
window.addEventListener('login', () => {
  console.log('ENTRA EN APP');
});
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped></style>
