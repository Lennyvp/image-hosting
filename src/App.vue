<template>
<v-app>
    <!-- <v-navigation-drawer app>
        Text
    </v-navigation-drawer>-->
    <TheNavbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  name: "App",

  components: {
    TheNavbar
  },

  data: () => ({
    //
  })
};
</script>