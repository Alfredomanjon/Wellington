<template>
  <FadeInContainer>
    <div class="signup-restaurant-container">
      <div class="restaurant-title-container">
        <h1 class="restaurant-title">
          ¡Encantado,
          <span class="username-title restaurant-title">{{ userName }}</span
          >!
        </h1>
        <h2 class="restaurant-title">Háblame un poco de tu restaurante</h2>
      </div>
      <form>
        <Input
          placeholder="Nombre"
          :onChange="(event) => (this.restaurantName = event.target.value)"
        />
        <Input
          placeholder="Dirección"
          :onChange="(event) => (this.restaurantAddress = event.target.value)"
        />
        <Input
          placeholder="Municipio"
          :onChange="(event) => (this.restaurantCity = event.target.value)"
        />
        <Input
          placeholder="Código Postal"
          :onChange="(event) => (this.restaurantZIP = event.target.value)"
        />
      </form>
      <Button
        defaultVariant="primary"
        :disabled="
          !this.restaurantName ||
          !this.restaurantAddress ||
          !this.restaurantCity ||
          !this.restaurantZIP
        "
        v-on:click="
          this.setRestaurantForm(
            this.restaurantName,
            this.restaurantAddress,
            this.restaurantCity,
            this.restaurantZIP
          )
        "
        class="restaurant-form-button"
      >
        Siguiente
      </Button>
    </div>
  </FadeInContainer>
</template>

<script>
import FadeInContainer from '../../components/FadeInContainer.vue';
import Input from '../../components/DefaultInput.vue';
import Button from '../../components/Button.vue';
export default {
  data() {
    return {
      restaurantName: '',
      restaurantAddress: '',
      restaurantCity: '',
      restaurantZIP: '',
    };
  },
  components: {
    Input,
    Button,
    FadeInContainer,
  },
  props: {
    userName: undefined,
    setRestaurantForm: undefined,
  },
};
</script>

<style>
.signup-restaurant-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: white;
}

.restaurant-title {
  font-size: 40px;
  font-weight: 700;
  color: #2c3e50;
}

.username-title {
  color: #00bac2;
}

.restaurant-title-container {
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
}

.restaurant-form-button {
  margin-top: 25px;
}
</style>
