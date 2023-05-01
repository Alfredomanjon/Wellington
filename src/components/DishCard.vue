<template>
  <div
    class="exists-dish-container d-flex justify-content-center align-items-center"
  >
    <p class="exists-dish-title">{{ this.defaultName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    defaultName: 'ttest',
  },
  mounted() {
    console.log(this.defaultName);
  },
};
</script>

<style>
.exists-dish-container {
  background-color: rgb(246, 246, 246);
  border-radius: 20px;
  height: 150px;
  width: 150px;
  padding: 10px;
}

.exists-dish-container p {
  width: 120px;
  padding: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exists-dish-title {
  color: #029aa2;
  font-weight: 600;
  font-size: 18px;
  margin: 0%;
  padding: 20px;
  text-align: center;
}
</style>
