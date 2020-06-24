<template>
  <v-card class="mx-auto" dark>
    <v-img :src="src" class="pink--text font-weight-bold"></v-img>
    <v-container class="d-flex align-end">
      <v-card-subtitle class="white--text">Here is a prop Title</v-card-subtitle>
      <v-spacer></v-spacer>
      <v-btn class="red md" small>Descritpion</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["src"],
  name: "ImageCard"
};
</script>