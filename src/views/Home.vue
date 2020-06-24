<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>HOME</h1>ok it's fine
        <v-card class="d-inline-block mx-auto">
          <v-container fluid>
            <v-row rows="6" sm="4">
              <v-col cols="6" sm="4" v-for="image in images" :key="image.id">
                <!-- <cld-image cloudName="demo" publicId="sample" width="300" crop="scale" /> -->
                <ImageCard :src="image.path" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import ShowBlogs from '@/components/ShowBlogs.vue'
import cloudinary from "cloudinary-core";
import axios from "axios";
import ImageCard from "@/components/ImageCard";

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "demo" });

export default {
  name: "Home",
  data() {
    return {
      images: []
    };
  },
  components: {
    ImageCard
  },
  computed: {
    cloudinarySrc() {
      return cloudinaryCore.url("sample");
    }
  },
  mounted() {
    axios
      .get("http://localhost:8081/load")
      .then(response => {
        // this.images.push({
        //   id: response.data.id,
        //   src: response.data.path
        // })
        this.images = response.data;
        console.log(this.images);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
