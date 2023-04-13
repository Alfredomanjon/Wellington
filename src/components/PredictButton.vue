<template>
  <button
    class="upload-predict-image-container d-flex justify-content-center align-items-center"
  >
    <div class="d-flex align-items-center justify-content-center flex-column">
      <img v-bind:src="filename" width="60" class="close-session-icon" />
      <p class="upload-predict-image-title">
        {{ title }}
      </p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    filename: undefined,
    title: undefined,
  },
};
</script>

<style scoped>
.upload-predict-image-container {
  background-color: #f6f6f6;
  border-radius: 20px;
  width: 90%;
  height: 300px;
  transition: 0.3s;
  border: 0px;
}

.upload-predict-image-container:hover {
  background-color: #7ed4da5d;
}

.upload-predict-image-title {
  color: #029aa2;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0px;
}
</style>
