import Onboarding from './Onboarding.vue';

const ONBOARDING = 0;
export const NAME_FORM = 1;
export const RESTAURANT_FORM = 2;
export const CHECKPOINT = 3;
export const FINISH = 4;
const PAGES = {
  [ONBOARDING]: Onboarding,
  [NAME_FORM]: Login,
  [RESTAURANT_FORM]: 2,
  [CHECKPOINT]: 3,
  [FINISH]: 4,
};
export default PAGES;
