<template>
  <div>
    <div>
      <Onboarding
        v-if="this.page == this.ONBOARDING"
        :setNextPage="this.setNextPage"
      />
      <Transition1 v-if="this.page == this.TRANSITION1" />
      <NameForm
        v-if="this.page == this.NAME_FORM"
        :setNameForm="this.setNameForm"
      />
      <RestaurantForm
        v-if="this.page == this.RESTAURANT_FORM"
        :userName="name"
        :setRestaurantForm="this.setRestaurantForm"
      />
      <EmailPassForm
        v-if="this.page == this.CHECKPOINT"
        :setEmailPassForm="this.setEmailPassForm"
      />
      <VerificationMail
        v-if="this.page == this.VERIFICATION"
        :username="this.email"
        :password="this.password"
        :data="this.data"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Auth } from 'aws-amplify';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Onboarding from '../features/Signup/Onboarding.vue';
import Transition1 from '../features/Signup/Transition1.vue';
import NameForm from '../features/Signup/NameForm.vue';
import RestaurantForm from '../features/Signup/RestaurantForm.vue';
import EmailPassForm from '../features/Signup/EmailPassForm.vue';
import VerificationMail from '../features/Signup/VerificationMail.vue';
export default {
  data() {
    return {
      page: ref(0),
      ONBOARDING: 0,
      TRANSITION1: 1,
      NAME_FORM: 2,
      RESTAURANT_FORM: 3,
      CHECKPOINT: 4,
      VERIFICATION: 5,
      data: {},
      name: '',
      surnames: '',
      restaurantName: '',
      restaurantAddress: '',
      restaurantCity: '',
      restaurantZIP: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
  components: {
    Onboarding,
    Transition1,
    NameForm,
    RestaurantForm,
    EmailPassForm,
    VerificationMail,
  },
  methods: {
    async signUp() {
      try {
        const { user } = await Auth.signUp(this.email, this.password);
        this.createUserInfoJSON();
        this.setNextPage();
      } catch (error) {
        toast.error('Error crear la cuenta: ' + error, {
          autoClose: 4000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log('error signing up:', error);
      }
    },
    createUserInfoJSON() {
      this.data = {
        name: this.name,
        surnames: this.surnames,
        restaurantName: this.restaurantName,
        restaurantAddress: this.restaurantAddress,
        restaurantCity: this.restaurantCity,
        restaurantZIP: this.restaurantZIP,
        email: this.email,
      };
    },
    setNextPage() {
      this.page++;
      if (this.page == 1) {
        this.transitionPage();
      }
    },
    transitionPage() {
      setTimeout(this.setNextPage, 2300);
    },
    setNameForm(name, surnames) {
      this.name = name;
      this.surnames = surnames;
      this.setNextPage();
    },
    setRestaurantForm(
      restaurantName,
      restaurantAddress,
      restaurantCity,
      restaurantZIP
    ) {
      this.restaurantName = restaurantName;
      this.restaurantAddress = restaurantAddress;
      this.restaurantCity = restaurantCity;
      this.restaurantZIP = restaurantZIP;
      console.log(restaurantName);
      this.setNextPage();
    },
    setEmailPassForm(email, password, repeatPassword) {
      this.email = email;
      this.password = password;
      this.repeatPassword = repeatPassword;
      this.signUp();
    },
  },
};
</script>

<style scoped></style>
