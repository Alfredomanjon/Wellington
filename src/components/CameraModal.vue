<template>
  <div class="custom-modal-drawer">
    <button
      v-if="this.screenWidth >= 600"
      class="close-modal"
      @click="this.closeModal()"
    >
      <img
        src="../assets/close-modal-icon.png"
        width="30"
        class="close-session-icon"
      />
    </button>
    <button v-else class="close-modal" @click="this.closeModal()">
      <img
        src="../assets/close-modal-icon-mobile.png"
        width="30"
        class="close-session-icon"
      />
    </button>
    <div class="custom-modal">
      <video class="video-container" ref="video" autoplay></video>
      <div class="take-photo-icon-container">
        <img
          @click="this.takeCapture()"
          src="../assets/take-photo-icon.png"
          width="65"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  apply() {
    return {
      screenWidth: 0,
    };
  },
  props: {
    closeModal: undefined,
  },
  async created() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    if (
      'mediaDevices' in navigator &&
      'getUserMedia' in navigator.mediaDevices
    ) {
      navigator.mediaDevices.getUserMedia();
      console.log("Let's get this party started");
    }
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === 'videoinput'
      );
      console.log(videoDevices[0].deviceId);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        deviceId: { exact: videoDevices[0].deviceId },
      });
      console.log(videoDevices);
      this.$refs.video.srcObject = stream;
      this.$refs.video.play();
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  },
  methods: {
    takeCapture() {
      let image = '';
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      ctx.drawImage(this.$refs.video, 0, 0, 965, 540);
      image = canvas.toDataURL('image/jpeg');
      console.log(image);
    },
  },
};
</script>

<style scoped>
.custom-modal-drawer {
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.545);
}

.custom-modal {
  z-index: 2;
  width: 960px;
  height: 640px;
  background-color: white;
  border-radius: 20px;
  position: initial;
}

.video-container {
  position: initial;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 960px;
  height: 540px;
  object-fit: cover;
}

.take-photo-icon-container {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: initial;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0px;
}

@media only screen and (max-width: 600px) {
  .custom-modal {
    z-index: 2;
    width: 100%;
    height: calc(100% - 56px);
    background-color: transparent;
    border-radius: 20px;
    border-radius: 0px;
  }

  .video-container {
    transform: rotate(90deg);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    transform-origin: bottom left;
    width: 70vh;
    height: 100vw;
    margin-top: -100vw;
    position: fixed;
    top: 15%;
    left: 0px;
    object-fit: cover;
  }
  .custom-modal-drawer {
    z-index: 5;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    height: 100vh;
    width: 100vw;
  }
  .take-photo-icon-container {
    position: fixed;
    top: 87%;
    left: 0%;
  }
  .close-modal {
    z-index: 4;
    position: fixed;
    top: 75px;
    right: 15px;
  }
}
</style>
