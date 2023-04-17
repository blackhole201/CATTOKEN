<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <section id="features">
      <v-container class="features">
        <h1
          class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h3 text-lg-h3 text-md-h3 text-sm-h3"
          style="margin-bottom: 2rem; word-wrap: break-word"
        >
          Tokenomics
        </h1>
        <v-row align="stretch" justify="center" class="my-8">
          <v-col
            cols="12"
            xl="4"
            lg="4"
            md="4"
            sm="6"
            class="text-left card"
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="card-features">
                <v-img
                  :src="feature.img"
                  max-width="100px"
                  class="d-block mr-auto"
                  :class="{ 'zoom-efect': hover }"
                ></v-img>
                <h1 class="font-weight-bold">
                  {{ feature.title }}
                </h1>
                <p class="font-weight-regular subtitle-2">
                  {{ feature.text }}
                </p>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      features: [
        {
          img: require("@/assets/img/planet1.webp"),
          title: "CAKE Redistribution",
          text: "Rewards will be distributed to true holders. Hold $KittyCake tokens and earn $CAKE. A Minimum of 4.000,000 tokens is required in order to qualify for rewards.",
        },
        {
          img: require("@/assets/img/planet2.webp"),
          title: "Automatic Reward Payment",
          text: "No need to claim, it’s all done automatically and sent to your wallet.",
        },
        {
          img: require("@/assets/img/planet3.webp"),
          title: "Strategic Marketing",
          text: "3% of every transaction is allocated to Marketing in $CAKE (swapped to CAKE in real-time to avoid dumps). This allows us to invest and develop the project further to expand the rewards for our community.",
        },
        {
          img: require("@/assets/img/planet4.png"),
          title: "Small Selling Fee",
          text: "An extra 1% fee is applied to all sells. This will allow us to reduce swing-trading and break whales’ control.",
        },
        {
          img: require("@/assets/img/planet5.png"),
          title: "Locked Liquidity",
          text: "Initial Liquidity Provided is locked and Contract will be audited prior to launch",
        },
        {
          img: require("@/assets/img/planet6.png"),
          title: "Auto Liquidity",
          text: "1% of every transaction is converted into liquidity for Pancakeswap. It’s automatic and helps create a price floor (stability).",
        },
      ],
    };
  },
  mounted() {
    // this.$gsap.utils.toArray("section#features").forEach((section, i) => {
    //   section.style.backgroundPosition = "0% 0px";
    //   this.$gsap.to(section, {
    //     backgroundPosition: `0% ${-window.innerHeight / 1}px`,
    //     scrollTrigger: {
    //       trigger: "#features",
    //       start: "top top",
    //       scrub: true,
    //     },
    //     ease: "none",
    //   });
    // });
  },
};
</script>

<style scoped>
#features {
  z-index: 9999;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  padding-top: 5rem;
  /* background: url("../assets/img/background/feature-background.webp"); */
}
.card-features {
  padding: 24px;
  gap: 8px;
  height: 100%;
  transition: 0.5s ease-out;
  background: transparent !important;
  backdrop-filter: blur(20px);
  color: white !important;
  box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.85);
  border: 3px solid #92e7ff;
}

.card-features .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card-features h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
/* .sun {
    position: absolute;
    right: -500px;
    top: 0;
    z-index: -1;
} */
</style>
