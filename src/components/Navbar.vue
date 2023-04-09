<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <router-link to="/" class="navbar-item-link">
      <img
        alt="Wellington logo"
        class="navbar-logo"
        src="../assets/logo-no-name.png"
        width="55"
      />
    </router-link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">En tu restaurante</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Red Wellington</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Soporte</a>
        </li>
      </ul>
      <form v-if="this.isLogged" class="form-inline my-0 my-lg-0">
        <Button
          v-on:click="this.closeSession()"
          defaultVariant="text"
          className="navbar-item navbar-signup-buttom"
        >
          <a class="nav-link">Cerrar sesión</a>
        </Button>
      </form>
      <form v-if="!this.isLogged" class="form-inline my-0 my-lg-0">
        <router-link to="/login">
          <Button
            defaultVariant="outlined"
            className="navbar-item navbar-signup-buttom"
          >
            <a class="nav-link">Iniciar sesión</a>
          </Button>
        </router-link>
      </form>
    </div>
  </nav>
</template>

<script>
import Button from '../components/Button.vue';
import { ref } from 'vue';
let isLogged = ref(window.localStorage.getItem('user') !== null);
window.addEventListener('login', () => {
  console.log('ENTRA');
  isLogged = true;
});
export default {
  data() {
    return {
      isLogged,
    };
  },
  components: {
    Button,
  },
  methods: {
    closeSession() {
      window.localStorage.removeItem('user');
      this.isLogged = false;
    },
  },
};
</script>

<style>
.navbar {
  box-shadow: 0px 6px 6px -7px rgba(0, 0, 0, 0.3);
  background-color: rgb(253, 253, 253);
}
.navbar-logo {
  padding-right: 8px;
}

.navbar-signup-buttom {
  border: 2px solid #00898f;
  height: 38px;
  height: 40px !important;
  border-radius: 200px;
  text-decoration: none;
}

.navbar-signup-buttom .nav-link {
  color: #00898f;
  padding: 0.3rem 1rem;
  font-weight: 600;
  text-decoration: none !important;
}
</style>
