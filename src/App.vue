<template>
  <v-app :dark="uiStore.isDark" id="inspire">
    <v-navigation-drawer app v-model="uiStore.drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <img src="./assets/logotecsi.png" alt="Logo Tecsci" class="image-logo">
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <router-link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="v-list-item"
          active-class="v-list-item--active"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      color="#fcb69f"
      :dark="uiStore.isDark"
      src="./assets/bgheader.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
        </v-img>
      </template>

      <v-app-bar-nav-icon @click="uiStore.toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title></v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon @click="uiStore.toggleTheme">
        <v-icon>{{ uiStore.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useUIStore } from '@/stores/uiStore';

export default {
  setup() {
    const uiStore = useUIStore();

    const items = [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Api', icon: 'mdi-api', to: '/api' },
      { title: 'About', icon: 'mdi-account', to: '/about' },
    ];

    return {
      uiStore,
      items,
    };
  }
};
</script>

<style scoped>
.image-logo {
  max-width: 150px;
  width: 100%;
  margin-left: 30px;
}
</style>
