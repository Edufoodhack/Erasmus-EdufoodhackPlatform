import { defineStore } from 'pinia';

export const useHqUx = defineStore('hqux', {
  state: () => ({
    activeStep: "",
    toggleDrawer: false,
  }),
  getters: {

  },
  actions: {
    changeToggleDrawer() {
      this.toggleDrawer = !this.toggleDrawer
      if(this.toggleDrawer === false) {
        this.activeStep =""
      }
    },
  },
});
