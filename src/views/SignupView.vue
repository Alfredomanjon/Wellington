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
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Auth } from 'aws-amplify';
import Onboarding from '../features/Signup/Onboarding.vue';
import Transition1 from '../features/Signup/Transition1.vue';
import NameForm from '../features/Signup/NameForm.vue';
import RestaurantForm from '../features/Signup/RestaurantForm.vue';
import EmailPassForm from '../features/Signup/EmailPassForm.vue';
export default {
  data() {
    return {
      page: ref(0),
      ONBOARDING: 0,
      TRANSITION1: 1,
      NAME_FORM: 2,
      RESTAURANT_FORM: 3,
      CHECKPOINT: 4,
      FINISH: 5,
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
  },
  methods: {
    async signUp() {
      try {
        const { user } = await Auth.signUp(this.email, this.password);
        console.log(user);
      } catch (error) {
        console.log('error signing up:', error);
      }
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
