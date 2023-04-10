<template>
  <FadeInContainer>
    <div class="verification-container">
      <p class="verification-title">Verifica tu dirección de correo</p>
      <p>
        Introduce un código que te hemos enviado a tu dirección de correo
        electrónico.
      </p>
      <Input
        placeholder="XXXXXX"
        :onChange="(event) => (this.code = event.target.value)"
      />
      <Button
        defaultVariant="text"
        v-on:click="this.resendConfirmationCode()"
        class="resend-button"
      >
        Volver a enviar el código
      </Button>
      <Button
        defaultVariant="primary"
        :disabled="!this.code"
        v-on:click="this.confirmSignUp()"
        class="verification-button"
      >
        Confirmar
      </Button>
    </div>
  </FadeInContainer>
</template>

<script>
import { Auth } from 'aws-amplify';
import FadeInContainer from '../../components/FadeInContainer.vue';
import Input from '../../components/DefaultInput.vue';
import Button from '../../components/Button.vue';
export default {
  data() {
    return {
      code: '',
    };
  },
  components: {
    FadeInContainer,
    Input,
    Button,
  },
  props: {
    username: undefined,
  },
  methods: {
    async resendConfirmationCode() {
      try {
        await Auth.resendSignUp(this.username);
      } catch (err) {
        console.log('error resending code: ', err);
      }
    },
    async confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.username, this.code);
        window.location.replace('/profile');
      } catch (error) {
        console.log('error confirming sign up', error);
      }
    },
  },
};
</script>

<style>
.verification-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0px;
}

.verification-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
}

.resend-button {
  margin-top: 10px;
}

.verification-button {
  margin-top: 30px;
}
</style>
