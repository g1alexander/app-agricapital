<template>
  <v-footer color="primary" fixed padless>
    <v-tabs
      v-model="tab"
      background-color="accent"
      centered
      dark
      icons-and-text
      class="rounded-t-xl"
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        <v-icon>mdi-arrow-top-right-thin-circle-outline</v-icon>
      </v-tab>

      <v-tab @click="toggle_dark_mode">
        <v-icon>mdi-brightness-4</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        <v-icon>mdi-chart-bar</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-tab>
    </v-tabs>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },

  methods: {
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  created() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      theme === "true"
        ? (this.$vuetify.theme.dark = true)
        : (this.$vuetify.theme.dark = false);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    } else {
      this.$vuetify.theme.dark = false;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
};
</script>
