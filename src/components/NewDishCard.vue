<template>
  <div class="new-dish-modal-drawer">
    <button
      v-if="
        this.screenWidth >= 600 && this.screenOrientation == 'landscape-primary'
      "
      class="close-modal"
      @click="this.closeModal()"
    >
      <img
        src="../assets/close-modal-icon.png"
        width="30"
        class="close-session-icon"
      />
    </button>
    <div class="new-dish-modal">
      <div class="default-padding-dish-model">
        <button
          v-if="this.screenWidth <= 600"
          class="close-modal"
          @click="this.closeModal()"
        >
          <img
            src="../assets/close-modal-icon-mobile.png"
            width="30"
            class="close-session-icon"
          />
        </button>
        <div class="d-flex align-items-end justify-content-between">
          <p class="new-dish-title">Añadir nuevo plato</p>
        </div>

        <div class="new-dish-inputs-container">
          <input
            type="name"
            class="form-control dish-name-input"
            aria-describedby="emailHelp"
            placeholder="Nombre del nuevo plato"
            v-model="dishName"
          />
        </div>
        <div class="new-dish-file-input">
          <input
            id="input-video"
            type="file"
            accept="video/*"
            @change="loadVideo"
            hidden
          />
          <button @click="this.chooseFiles()" class="upload-video-container">
            <div
              class="d-flex align-items-center justify-content-center flex-column"
            >
              <img src="../assets/add-dish-video-icon.png" width="50" />
              <p class="upload-video-title">Insertar video del plato</p>
            </div>
          </button>
          <div
            class="add-video-info-container d-flex align-items-center justify-content-center"
          >
            <img src="../assets/info-icon.png" width="20" />
            <p>
              Se recomienda introducir videos de más de 30 segundos para un
              correcto entrenamiento del modelo.
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <button
              class="btn submit-new-dish-button"
              :disabled="!this.base64Video || !this.dishName"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
  apply() {
    return {
      screenWidth: 0,
      screenOrientation: '',
    };
  },
  data() {
    return {
      dishName: '',
      base64Video: '',
    };
  },
  props: {
    closeModal: undefined,
  },
  async created() {
    this.screenWidth = window.innerWidth;
    this.screenOrientation = window.screen.orientation.type;
  },
  methods: {
    async loadVideo(event) {
      document.getElementById('input-video').click();
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });
      this.base64Video = await toBase64(event.target.files[0]);
      console.log(this.base64Video);
    },
    chooseFiles() {
      document.getElementById('input-video').click();
    },
    insertDish() {
      console.log('INSERTANDO PLATO');
    },
  },
};
</script>

<style>
.new-dish-modal-drawer {
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.544);
}

.new-dish-modal {
  z-index: 2;
  width: 500px;
  background-color: white;
  border-radius: 15px;
  position: initial;
}

.default-padding-dish-model {
  padding: 20px 30px;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0px;
}

.new-dish-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0%;
}

.dish-name-input {
  text-align: start;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
}

.upload-video-container {
  width: 100%;
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  height: 150px;
  margin-top: 20px;
  transition: 0.3s;
  border: 0px;
}

.upload-video-container:hover {
  background-color: #7ed4da5d;
}

.upload-video-title {
  color: #029aa2;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0px;
}

.submit-new-dish-button {
  margin-top: 20px;
  background-color: #00898f;
  width: 200px;
  height: 50px;
  border-radius: 200px;
  transition: 0.3s;
  color: white;
}

.submit-new-dish-button:hover {
  background-color: #01a7ace2;
  color: white;
}

.add-video-info-container {
  margin-top: 15px;
  border-radius: 15px;
  background-color: #fde9ab;
  padding: 10px;
}
.add-video-info-container p {
  margin: 0px;
  font-size: 14px;
  padding-left: 5px;
}

@media only screen and (max-width: 600px) {
  .new-dish-modal-drawer {
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: start;
    position: fixed;
    padding-top: 70px;
    background-color: rgb(255, 255, 255);
  }

  .close-modal {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: transparent;
    border: 0px;
    z-index: 5;
  }

  .new-dish-title {
    padding-top: 30px;
  }
}
</style>
