<template>
  <div>
    <web-header></web-header>
    <router-view></router-view>
    <Web-footer></Web-footer>
  </div>
</template>
  <script>
import HomePage from "./components/pages/HomePage.vue";
import WebHeader from "./components/header/WebHeader.vue";
import WebFooter from "./components/footer/WebFooter.vue";

export default {
  components: {
    HomePage,
    WebHeader,
    WebFooter,
  },
};
</script>