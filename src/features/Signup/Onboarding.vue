<template>
  <FadeInContainer>
    <div class="signup-onboarding-container">
      <img
        alt="Restaurant icon"
        src="../../assets/logo-mini-2.png"
        width="250"
      />
      <p class="onboarding-title">Crea hoy tu restaurante del mañana</p>
      <p>
        Tardarás menos de 1 minuto en crear tu cuenta. Podrás terminar de
        configurarla más adelante.
      </p>
      <div v-on:click="setNextPage" class="btn signup-onboarding-button">
        Empezar
      </div>
    </div>
  </FadeInContainer>
</template>

<script>
import FadeInContainer from '../../components/FadeInContainer.vue';
export default {
  components: {
    FadeInContainer,
  },
  props: {
    setNextPage: undefined,
  },
};
</script>

<style scoped>
.signup-onboarding-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  background-color: white;
}
.onboarding-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 6px;
  text-align: center;
  line-height: 1;
  color: #2c3e50;
}

.signup-onboarding-container p {
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
  color: #2c3e50;
}

.signup-onboarding-button {
  margin-top: 15px;
  margin-bottom: 50px;
}

.signup-onboarding-button {
  margin-top: 40px;
  background-color: #00898f;
  width: 200px;
  height: 50px;
  border-radius: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
