<template>
  <FadeInContainer>
    <div class="nameform-container">
      <p class="nameform-title">¿Cómo te llamas?</p>
      <form onSubmit="">
        <Input
          placeholder="Nombre"
          :onChange="(event) => (this.nameInput = event.target.value)"
        />
        <Input
          placeholder="Apellidos"
          :onChange="(event) => (this.surnamesInput = event.target.value)"
        />
      </form>
      <Button
        defaultVariant="primary"
        :disabled="!this.nameInput || !this.surnamesInput"
        v-on:click="this.setNameForm(this.nameInput, this.surnamesInput)"
        class="nameform-button"
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
import { ref } from 'vue';
export default {
  data() {
    return {
      nameInput: ref(''),
      surnamesInput: ref(''),
    };
  },
  components: {
    FadeInContainer,
    Input,
    Button,
  },
  props: {
    setNameForm: undefined,
  },
  methods: {
    callSetNameForm() {},
  },
};
</script>

<style scoped>
.nameform-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  background-color: white;
}

.nameform-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #2c3e50;
}

.nameform-input {
  text-align: center;
  width: 350px;
  height: 60px;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 18px;
}

.nameform-button {
  margin-top: 40px;
}
</style>
