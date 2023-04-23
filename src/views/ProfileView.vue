<template>
  <CameraModal v-if="this.openModal" :closeModal="this.closeCameraModal" />
  <div class="profile-container">
    <div class="profile-top-container">
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
          <a class="profile-close-session-text" style="text-decoration: none"
            >Cerrar sesión</a
          >
        </div>
      </button>
    </div>
    <div class="predict-container">
      <div class="predict-options-container">
        <input
          id="input-archivo"
          type="file"
          accept="image/*"
          @change="cargarArchivo"
          hidden
        />
        <PredictButton
          :filename="this.addImage"
          :defaultClick="this.chooseFiles"
          title="Insertar una imagen para clasificar un plato"
        />
        <PredictButton
          :defaultClick="this.openCamaraModal"
          :filename="this.cameraImage"
          title="Tomar una imagen para clasificar un plato"
        />
      </div>
      <p class="profile-sub-title">Platos registrados en el modelo</p>
      <div class="dishes-container">
        <DishCard />
        <div
          class="new-dish-container d-flex justify-content-center align-items-center"
        >
          <img src="../assets/add-dish-icon.png" width="60" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getIsLogged from '../utils/getIsLogged';
import Button from '../components/Button.vue';
import PredictButton from '../components/PredictButton.vue';
import DishCard from '../components/DishCard.vue';
import CameraModal from '../components/CameraModal.vue';
import imageIcon from '../assets/drop-image-icon.png';
import cameraIcon from '../assets/camera-icon.png';
console.log(getIsLogged());
export default {
  data() {
    return {
      cameraImage: cameraIcon,
      addImage: imageIcon,
      openModal: false,
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
    DishCard,
    CameraModal,
  },
  methods: {
    closeSession() {
      window.localStorage.removeItem('user');
      this.isLogged = false;
      window.location.replace('/login');
    },
    cargarArchivo(event) {
      const archivo = event.target.files[0];
      console.log('Archivo seleccionado:', archivo);
      // Aquí puedes trabajar con el archivo, por ejemplo, cargarlo en una API o procesarlo en el cliente
    },
    chooseFiles() {
      document.getElementById('input-archivo').click();
    },
    openCamaraModal() {
      this.openModal = true;
    },
    closeCameraModal() {
      this.openModal = false;
    },
  },
};
</script>

<style scoped>
.profile-container {
  background-color: rgb(251, 251, 251);
  min-height: calc(100vh - 54px);
}

.profile-top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px 40px;
  margin-top: 54px;
}

.profile-title {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0px;
  color: #2c3e50;
}

.profile-sub-title {
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 0px;
  color: #2c3e50;
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

.predict-container {
  padding-left: 10%;
  padding-right: 10%;
}

.predict-options-container {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 35px;
}

.insert-image-label {
  width: 100%;
}

.dishes-container {
  margin-top: 20px;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 10px;
}

.new-dish-container {
  display: flex;
  border: 3px dashed #00898f;
  border-radius: 20px;
  height: 150px;
  width: 150px;
}

@media only screen and (max-width: 600px) {
  .profile-title {
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 0px;
  }

  .profile-top-container {
    display: block;
    padding: 20px 30px;
  }

  .profile-close-session-container {
    padding-left: 0px;
    padding-right: 0px;
  }

  .predict-options-container {
    display: block;
    margin-top: 30px;
  }

  .predict-container {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }
}
</style>
