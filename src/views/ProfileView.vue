<template>
  <div class="profile-container">
    <div class="d-flex justify-content-between align-items-center">
      <p class="profile-title">Mi Restaurante</p>
      <div
        class="profile-close-session-container d-flex justify-content-end align-items-center"
      >
        <img
          src="../assets/logout-icon.png"
          width="25"
          class="close-session-icon"
        />
        <div v-on:click="this.closeSession()" class="d-flex align-items-center">
          <a class="profile-close-session-text">Cerrar sesión</a>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="upload-predict-image-container d-flex justify-content-center align-items-center"
      >
        <div
          class="d-flex align-items-start justify-content-center flex-column"
        >
          <img
            src="../assets/drop-image-icon.png"
            width="80"
            class="close-session-icon"
          />
          <p class="upload-predict-image-title">
            Inserta una imagen para clasificar un plato
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getIsLogged from '../utils/getIsLogged';
import Button from '../components/Button.vue';
console.log(getIsLogged());
export default {
  created() {
    if (!getIsLogged()) {
      this.$router.push('login');
    }
  },
  components: {
    Button,
  },
  methods: {
    closeSession() {
      window.localStorage.removeItem('user');
      this.isLogged = false;
      window.location.replace('/login');
    },
  },
};
</script>

<style scoped>
.profile-container {
  margin-top: 80px;
  padding-left: 40px;
  padding-right: 40px;
}

.profile-title {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0px;
}

.profile-close-session-container {
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  height: 40px !important;
  text-decoration: none;
  transition: 0.3s;
}

.profile-close-session-container:hover {
  background-color: #ed76765d;
}

.profile-close-session-text {
  color: #df5454;
  font-weight: 700;
  padding: 0%;
}

.close-session-icon {
  margin-right: 3px;
}

.upload-predict-image-container {
  margin-top: 50px;
  outline: 5px dashed #00898f;
  border-radius: 20px;
  width: 90%;
  height: 300px;
}

.upload-predict-image-title {
  color: #029aa2;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0px;
}
</style>
