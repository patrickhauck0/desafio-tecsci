import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
  state: () => ({
    drawer: false,
    isDark: false
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleTheme() {
      this.isDark = !this.isDark;
    },
    openDrawer() {
      this.drawer = true;
    },
    closeDrawer() {
      this.drawer = false;
    },
    setDarkTheme() {
      this.isDark = true;
    },
    setLightTheme() {
      this.isDark = false;
    }
  }
});
