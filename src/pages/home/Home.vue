<template>
  <div class="pb-16">
    <Header v-if="view" />
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Header from "./components/Header";

export default {
  name: "Home",

  components: {
    Header,
    Content,
  },

  data() {
    return {
      view: null,
    };
  },

  created() {
    this.media();
  },

  methods: {
    media() {
      let myFunction = (x) => {
        if (x.matches) {
          this.view = true;
        } else {
          this.view = false;
        }
      };
      let x = window.matchMedia("(max-width: 769px)");
      myFunction(x); // Call listener function at run time
      x.addEventListener("change", myFunction);
    },
  },
};
</script>
