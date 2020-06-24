<template>
  <v-app-bar app color="deep-purple accent-4" dense dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">Image Hosting App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="red text--white mr-2" route :to="{name: 'Registration'}">Register</v-btn>
    <v-btn class="black text--white" route :to="{name: 'Login'}">Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {};
  }
};
</script>

