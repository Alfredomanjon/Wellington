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
import { post } from '../../utils/api';
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
    password: undefined,
    data: undefined,
  },
  methods: {
    async signIn() {
      try {
        const user = await Auth.signIn(this.username, this.password);
        console.log(user);
        try {
          const res = await post('/restaurant', {
            restaurantId: user['username'],
            data: this.data,
          });
          console.log(res);
        } catch (error) {
          toast.error('Error al crear tu espacio Welligton: ' + error, {
            autoClose: 4000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log('error en post: ', error);
        }
        window.localStorage.setItem('user', JSON.stringify(user));
        window.location.replace('/profile');
      } catch (error) {
        toast.error('Error al acceder a tu cuenta wellington: ' + error, {
          autoClose: 4000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log('error signing in', error);
      }
    },
    async resendConfirmationCode() {
      try {
        await Auth.resendSignUp(this.username);
      } catch (err) {
        toast.error(
          'No se ha podido enviar de nuevo el código, inténtelo más tarde',
          {
            autoClose: 4000,
            position: toast.POSITION.BOTTOM_CENTER,
          }
        );
        console.log('error resending code: ', err);
      }
    },
    async confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.username, this.code);
        await this.signIn();
      } catch (error) {
        toast.error('Error al confirmar el correo:' + error, {
          autoClose: 4000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
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
  background-color: white;
}

.verification-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  color: #2c3e50;
}

.verification-container p {
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  color: #2c3e50;
}

.resend-button {
  margin-top: 10px;
}

.verification-button {
  margin-top: 30px;
}
</style>
