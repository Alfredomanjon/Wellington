<template>
  <div class="profile-container">
    <div class="d-flex justify-content-between align-items-center">
      <p class="profile-title">Mi Restaurante</p>
      <button
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
      </button>
    </div>
    <div class="predict-options-container">
      <PredictButton
        :filename="this.addImage"
        title="Insertar una imagen para clasificar un plato"
      />
      <PredictButton
        :filename="this.cameraImage"
        title="Tomar una imagen para clasificar un plato"
      />
    </div>
    <p class="profile-sub-title">Platos registrados en el modelo</p>
    <div class="dishes-container"></div>
  </div>
</template>

<script>
import getIsLogged from '../utils/getIsLogged';
import Button from '../components/Button.vue';
import PredictButton from '../components/PredictButton.vue';
import imageIcon from '../assets/drop-image-icon.png';
import cameraIcon from '../assets/camera-icon.png';
console.log(getIsLogged());
export default {
  data() {
    return {
      cameraImage: cameraIcon,
      addImage: imageIcon,
    };
  },
  created() {
    if (!getIsLogged()) {
      this.$router.push('login');
    }
  },
  components: {
    Button,
    PredictButton,
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

.profile-sub-title {
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 0px;
}

.profile-close-session-container {
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  height: 40px !important;
  text-decoration: none;
  transition: 0.3s;
  border: 0px;
  background-color: transparent;
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

.predict-options-container {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 35px;
}

.profile-sub-title {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
