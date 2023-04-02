<template>
  <FadeInContainer>
    <div class="signup-checkpoint-container">
      <p class="checkpoint-title">Perfecto! Último paso.</p>
      <form>
        <Input
          placeholder="Correo electrónico"
          :onChange="(event) => (this.email = event.target.value)"
        />
        <Input
          placeholder="Contraseña"
          :onChange="(event) => (this.password = event.target.value)"
        />
        <Input
          placeholder="Repetir Contraseña"
          :onChange="(event) => (this.repeatPassword = event.target.value)"
        />
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            :onChange="(event) => (this.accepted = event.target.checked)"
          />
          <label class="form-check-label" for="exampleCheck1"
            >He leído los <a href="#">terminos y condiciones</a></label
          >
        </div>
      </form>
      <Button
        defaultVariant="primary"
        :disabled="
          !this.email ||
          !this.password ||
          !this.repeatPassword ||
          this.password != this.repeatPassword ||
          !this.accepted
        "
        v-on:click="
          this.setEmailPassForm(this.email, this.password, this.repeatPassword)
        "
        class="email-pass-form-button"
      >
        Crear cuenta
      </Button>
    </div>
  </FadeInContainer>
</template>

<script>
import FadeInContainer from '../../components/FadeInContainer.vue';
import Input from '../../components/DefaultInput.vue';
import Button from '../../components/Button.vue';
export default {
  components: {
    FadeInContainer,
    Input,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      accepted: false,
    };
  },
  props: {
    setEmailPassForm: undefined,
  },
};
</script>

<style>
.signup-checkpoint-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0px;
}

.checkpoint-title {
  font-size: 40px;
  font-weight: 700;
}

.form-check {
  margin-top: 20px;
  width: 350px;
  display: flex;
  justify-content: left;
}

.email-pass-form-button {
  margin-top: 20px;
}
</style>
