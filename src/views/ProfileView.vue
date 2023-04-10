<template>
  <div class="profile-container">
    <p class="profile-title">Mi Restaurante</p>
  </div>
</template>

<script>
import getIsLogged from '../utils/getIsLogged';
console.log(getIsLogged());
export default {
  created() {
    if (!getIsLogged()) {
      this.$router.push('login');
    }
  },
};
</script>

<style>
.profile-container {
  margin-top: 80px;
  padding-left: 30px;
  padding-right: 30px;
}

.profile-title {
  font-weight: 700;
  font-size: 40px;
}
</style>
