<template>
  <div class="custom-modal-drawer">
    <button class="close-modal" @click="this.closeModal()">
      <img
        src="../assets/close-modal-icon.png"
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
const constraints = {
  video: {
    width: {
      min: 965,
      max: 965,
    },
    height: {
      min: 540,
      max: 540,
    },
  },
};
export default {
  props: {
    closeModal: undefined,
  },
  async created() {
    if (
      'mediaDevices' in navigator &&
      'getUserMedia' in navigator.mediaDevices
    ) {
      navigator.mediaDevices.getUserMedia(constraints);
      console.log("Let's get this party started");
    }
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === 'videoinput'
      );
      console.log(videoDevices[1].deviceId);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        deviceId: { exact: videoDevices[1].deviceId },
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
}

.video-container {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 960px;
  height: 540px;
}

.take-photo-icon-container {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0px;
}
</style>
