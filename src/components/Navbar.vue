<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <router-link
      to="/"
      class="navbar-item-link"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <img
        alt="Wellington logo"
        class="navbar-logo"
        src="../assets/logo-no-name.png"
        height="38"
      />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >En tu restaurante</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Red Wellington</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            >Soporte</a
          >
        </li>
      </ul>
      <form v-if="this.isLogged" class="form-inline my-0 my-lg-0">
        <router-link to="/profile" style="text-decoration: none">
          <button
            class="navbar-profile-container navbar-item d-flex justify-content-end align-items-center"
          >
            <img src="../assets/restaurant-icon.png" width="30" />
            <div
              defaultVariant="text"
              className=" navbar-profile-text d-flex align-items-center"
            >
              <a
                class="navbar-profile-text-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Mi restaurante</a
              >
            </div>
          </button>
        </router-link>
      </form>
      <form v-if="!this.isLogged" class="form-inline my-0 my-lg-0">
        <router-link to="/login">
          <button
            class="navbar-profile-container navbar-item d-flex justify-content-end align-items-center"
          >
            <img src="../assets/login-access-icon.png" width="30" />
            <div
              defaultVariant="text"
              className=" navbar-profile-text d-flex align-items-center"
            >
              <a
                class="navbar-profile-text-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Iniciar sesión</a
              >
            </div>
          </button>
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
  background-color: rgba(253, 253, 253, 0.951);
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
  border: 0px;
  background-color: transparent;
}

.navbar-profile-container:hover {
  background-color: #7ed4da5d;
}

@media only screen and (max-width: 600px) {
  .navbar-profile-container {
    padding-right: 0px;
    padding-left: 0px;
  }
}
</style>
