import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      light: {
        primary: "#F8FAFC",
        secondary: "#F8FAFC",
        accent: "#02B46B",
        gray: "#979798",
        error: "#FF5252",
        info: "#2196F3",
        success: "#00CC81",
        warning: "#FFC107",
      },
      dark: {
        primary: "#1B1D2C",
        secondary: "#1B1D2C",
        accent: "#008750",
        gray: "#979798",
        error: "#FF5252",
        info: "#2196F3",
        success: "#00CC81",
        warning: "#FFC107",
      },
    },
  },
});
