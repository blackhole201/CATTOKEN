<template>
  <section id="partners">
    <v-container fluid>
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h2 text-lg-h3 text-md-h3 text-sm-h3"
        style="word-wrap: break-word"
      >
        Our Partners
      </h1>
      <v-row align="center" justify="center" style="padding-top: 40px">
        <v-col>
          <v-sheet class="mx-auto" max-width="1200">
            <v-slide-group light multiple show-arrows>
              <v-slide-item v-for="(partner, index) in partners" :key="index">
                <img
                  :src="partner.image"
                  :alt="partner.name"
                  height="64"
                  width="100%"
                  style="margin: 0 16px"
                />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pt-16" fluid id="connect">
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h2 text-lg-h3 text-md-h3 text-sm-h3"
        style="word-wrap: break-word"
      >
        Connect With Us
      </h1>
      <v-row justify="center" align="center" style="padding-top: 40px">
        <v-col sm="12" md="12" class="text-center">
          <img
            src="@/assets/img/social-media/Instagram.png"
            height="50"
            width="50"
            class="mx-3 social-media"
            alt="social-media"
            @click="clickedImage('https://www.instagram.com/kittycake2022')"
          />
          <img
            src="@/assets/img/social-media/Telegram.png"
            height="50"
            width="50"
            class="mx-3 social-media"
            alt="social-media"
            @click="clickedImage('https://t.me/kittycaketoken')"
          />
          <img
            src="@/assets/img/social-media/Twitter.png"
            height="50"
            width="50"
            class="mx-3 social-media"
            alt="social-media"
            @click="clickedImage('https://twitter.com/kittycaketoken')"
          />
          <img
            src="@/assets/img/social-media/Facebook.png"
            height="50"
            width="50"
            class="mx-3 social-media"
            alt="social-media"
            @click="
              clickedImage('https://www.facebook.com/KittycakeTokenOfficial')
            "
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <p>Copyright @ Kittycaketoken 2022.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
#partners {
  background-image: url("../assets/img/background/about.webp");
  backdrop-filter: blur(30px) !important;
  border-radius: 40px 40px 0px 0px;
  padding-top: 80px;
  color: white !important;
}
.theme--light.v-sheet {
  background-color: transparent;
}
.v-icon.notranslate.mdi.mdi-chevron-right.theme--light {
  color: white !important;
}
.social-media {
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
}
</style>

<script>
export default {
  data: () => ({
    partners: [
      {
        name: "blockfolio",
        image: require("@/assets/img/partners/blockfolio.png"),
      },
      {
        name: "coingecko",
        image: require("@/assets/img/partners/coingecko.png"),
      },
      {
        name: "indoe",
        image: require("@/assets/img/partners/indoe.png"),
      },
      {
        name: "coinmarket",
        image: require("@/assets/img/partners/coinmarket.png"),
      },
    ],
  }),
  computed: {
    size() {
      const size = { md: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
  methods: {
    clickedImage(url) {
      window.open(url);
    },
  },
  mounted() {},
};
</script>

<style>
.v-icon.notranslate.mdi.mdi-chevron-right.theme--light,
.v-icon.notranslate.mdi.mdi-chevron-left.theme--light {
  color: white !important;
  font-size: 32px;
}
</style>
