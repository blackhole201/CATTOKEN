<template>
  <v-app id="app">
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <about />
      <features />
      <roadmap />
      <buy />
      <team />
      <faq />
      <partners />
    </v-main>

    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<style>
@font-face {
  font-family: "Saira";
  src: local("Saira") url("./assets/fonts/Saira/Saira-Regular.ttf")
    format("truetype");
}
html,
body {
  position: relative;
  overflow-x: hidden;
}
#app {
  /* background: linear-gradient(
        181.28deg,
        #380c6f 1.97%,
        rgba(29, 90, 191, 0.939039) 47.11%,
        rgba(17, 11, 51, 0.965232) 98.91%
    ); */
  font-family: "Saira", Helvetica, Arial;
  background: url("./assets/img/background/full-background.png");
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
  background-blend-mode: multiply;
  backdrop-filter: blur(10px);
  background-position: 5% 130px;
}
.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: white;
}
.moon {
  position: absolute;
  right: 5px;
  width: 180px;
  height: 180px;
  z-index: 99;
}
</style>

<script>
export default {
  name: "App",

  components: {
    navigation: () => import("@/components/Navigation"),
    home: () => import("@/components/HomeSection"),
    about: () => import("@/components/AboutSection"),
    features: () => import("@/components/FeaturesSection"),
    partners: () => import("@/components/PartnersSection"),
    buy: () => import("@/components/BuySection"),
    team: () => import("@/components/TeamSection"),
    faq: () => import("@/components/FAQSection"),
    roadmap: () => import("@/components/Roadmap"),
  },

  metaInfo: {
    title: "Kittycaketoken",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "KittyCake is an advanced hyper-deflationary auto-rewards token on the Binance Smart Chain.",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

  mounted() {
    this.$gsap.utils.toArray("#app").forEach((section, i) => {
      this.$gsap.to(section, {
        backgroundPosition: `10% ${-window.innerHeight / 2.4}px`,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          scrub: true,
        },
        ease: "none",
      });
    });
  },
};
</script>
