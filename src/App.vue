<template>
  <v-app>
    <v-main>
      <router-view class="primary" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/layouts/Footer.vue";
export default {
  name: "App",
  components: { Footer },
};
</script>

<style>
html::-webkit-scrollbar {
  width: 8px;
}
html::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
html::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}
html::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
html::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 4px;
}
html::-webkit-scrollbar-track:hover,
html::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
</style>
