import Inject from '/public/inject.js';

export default {
  mount() {
    Inject.init();
    Inject.app();
  },
};
