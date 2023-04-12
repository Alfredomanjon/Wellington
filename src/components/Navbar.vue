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
        <router-link to="/profile">
          <div
            class="navbar-profile-container d-flex justify-content-end align-items-center"
          >
            <img src="../assets/restaurant-icon.png" width="30" />
            <div
              defaultVariant="text"
              className="navbar-item navbar-profile-text d-flex align-items-center"
            >
              <a class="nav-link navbar-profile-text-link">Mi restaurante</a>
            </div>
          </div>
        </router-link>
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
      this.$router.replace({ path: '/login' });
    },
  },
};
</script>

<style scoped>
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

.navbar-profile-text {
  height: 40px !important;
  border-radius: 200px;
  text-decoration: none;
}

.navbar-profile-text a {
  color: #00898f;
  font-weight: 700;
  padding: 0%;
}

.navbar-profile-text-link:hover {
  text-decoration: none !important;
}

.navbar-profile-container {
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.navbar-profile-container:hover {
  background-color: #7ed4da5d;
}
</style>
