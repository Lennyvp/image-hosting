import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Cloudinary from 'cloudinary-vue';

Vue.config.productionTip = false

// Custom directives

// Vue.directive('rainbow', {
//   bind(el) {
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// })

// Vue.directive('theme', {
//   bind(el,binding) {
//     if(binding.value == 'wide') {
//       el.style.maxWidth = "1200px";
//     } else if(binding.value == 'narrow') {
//       el.style.maxWidth = "600px";
//     }

//     if(binding.arg == 'column') {
//       el.style.background = '#ddd';
//       el.style.padding = '20px';
//     }
//   }
// })

// Filters

// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// })

// Vue.filter('snippet', function(value) {
//   return value.slice(100) + '...';
// })

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "demo"
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
