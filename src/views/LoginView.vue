<template>
  <div class="login-container">
    <div class="row">
      <div class="col-12 col-lg-6 login-preview-container">
        <div>
          <div class="login-logo-container">
            <img
              alt="Vue logo"
              class="logo"
              src="../assets/logo-mini-2.png"
              width="225"
            />
          </div>
          <p class="login-slogan">¡Clasifica tus platos al vuelo!</p>
          <div class="wellington-proceeds-container row">
            <img
              alt="wellington check"
              src="../assets/check.png"
              width="30"
              height="30"
            />
            <p class="wellington-proceeds">
              Siempre a tu disposición. Disponible 24 horas / 365 dias al año.
            </p>
          </div>
          <div class="wellington-proceeds-container row">
            <img
              alt="wellington check"
              src="../assets/check.png"
              width="30"
              height="30"
            />
            <p class="wellington-proceeds">
              Clasifica tus platos en segundos. En un abrir y cerrar de ojos.
            </p>
          </div>
          <div class="wellington-proceeds-container row">
            <img
              alt="wellington check"
              src="../assets/check.png"
              width="30"
              height="30"
            />
            <p class="wellington-proceeds">Úsalo en cualquier dispositivo.</p>
          </div>
          <div class="login-inputs-container">
            <router-link to="/signup">
              <button class="sign-in-redirect-button">Regístrate gratis</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="login-form-container">
          <div class="login-form-flex">
            <form class="login-form">
              <p class="login-form-title">Inicio de sesión</p>
              <p class="login-form-subtitle">
                Accede con una cuenta existente de Wellington, si no tienes
                cuenta puedes registrarte a la izquierda.
              </p>
              <div class="login-inputs-container">
                <input
                  type="email"
                  class="form-control login-input"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  v-model="email"
                />
              </div>
              <div class="login-inputs-container">
                <input
                  type="password"
                  class="form-control login-input"
                  aria-describedby="emailHelp"
                  placeholder="Contraseña"
                  v-model="password"
                />
              </div>
              <div class="login-inputs-container">
                <input
                  class="btn login-submit-button"
                  v-on:click="signIn()"
                  value="Acceder"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signIn() {
      console.log(this.email);
      console.log(this.password);
      try {
        const user = await Auth.signIn(this.email, this.password);
        console.log(user);
        window.localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('error signing in', error);
      }
    },
    async signOut() {
      try {
        console.log('Sesión Cerrada');
        await Auth.signOut();
      } catch (error) {
        console.log('error signing out: ', error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}

.login-preview-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-logo-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-slogan {
  padding-top: 20px;
  width: 100%;
  font-size: 250%;
  text-align: center;
  font-weight: 700;
}

.wellington-proceeds-container {
  padding-bottom: 10px;
}

.wellington-proceeds {
  padding-left: 8px;
  margin: 0%;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.login-form-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 6%;
}

.login-form-flex {
  display: flex;
  align-items: center;
  width: 70%;
  height: 600px;
  border-radius: 15px;
  background-color: rgb(250, 250, 250);
}

.login-form-title {
  margin-top: -8%;
  font-size: 220%;
  font-weight: 600;
  text-align: center;
}

.login-form-subtitle {
  display: flex;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}

.login-inputs-container {
  display: flex;
  justify-content: center;
}

.login-input {
  text-align: center;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
}

.login-submit-button {
  margin-top: 40px;
  background-color: #00898f;
  width: 200px;
  height: 50px;
  border-radius: 200px;
  color: white;
}

.sign-in-redirect-button {
  margin-top: 25px;
  background-color: white;
  border: 2px solid #00898f;
  width: 200px;
  height: 50px;
  border-radius: 200px;
  color: #00898f;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

@media (min-width: 1024px) {
}
</style>
