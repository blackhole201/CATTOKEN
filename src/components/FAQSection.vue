<template>
  <section id="faq">
    <v-container>
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h2 text-lg-h3 text-md-h3 text-sm-h3"
        style="margin-bottom: 130px; word-wrap: break-word"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        Frequently Asked Questions
      </h1>
      <v-row
        align="center"
        justify="center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <v-expansion-panels
          style="margin-top: 80px; width: 1080px; border-radius: 12px"
        >
          <v-expansion-panel v-for="(item, i) in faq" :key="i">
            <v-expansion-panel-header class="font-weight-bold text-h5">
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="primary--text text-h6">
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          question: "What is KittyCake?",
          answer:
            "KittyCake is an advanced hyper-deflationary auto-rewards token on the Binance Smart Chain. KittyCake rewards holders with his favorite food, $CAKE, every hour! We also have a dashboard to track your $CAKE rewards",
        },
        {
          question: "So, KittyCake is a MEME rewards token?",
          answer:
            "We strive to bring it beyond the MEME token sphere and give it a solid utility. KittyCake will in time become a Bitcoin mining utility token.",
        },
        {
          question: "How does the dashboard works?",
          answer:
            "You just copy/paste your wallet address that holds $KCAKE into the dashboard. You will automatically see your KCAKE balance and your estimated and already paid $CAKE rewards!",
        },
        {
          question: "How much $KCAKE must I hold to get $CAKE rewards?",
          answer:
            "You must hold at least 2 000 000 $KCAKE tokens to receive $CAKE.",
        },
        {
          question:
            "Do I just have to hold $KCAKE to get $CAKE rewards in my wallet?",
          answer:
            "Yes you just have to hold the minimum amount of $KCAKE (2 000 000 tokens) in your wallet. Also make sure you have $CAKE added to your wallet. The $CAKE token contract address is: TBC",
        },
        {
          question: "Why am I not receiving rewards every hour?",
          answer:
            "The way the contract works is it auto accumulates your $CAKE rewards and pays them out hourly - HOWEVER if volume is low or the amount of your $CAKE reward based on your KittyCake total is deemed not high enough to pay the gas fee out of your reward to send you, the contract will hold your rewards and auto pay them when it will be most effective for you specifically as to not eat up all your rewards by constantly paying gas fees against your rewards. Also, as the number of $KCAKE holders grow, you will sometimes have to wait a bit longer, because there are investors who are due their $CAKE rewards before you.",
        },
      ],
    };
  },
};
</script>

<style>
#faq {
  padding: 120px 0;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  background: rgba(53, 56, 75, 0.5);
  border: 1px solid #afafaf;
  color: white;
  box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.45);
}
.v-expansion-panel-header {
  padding: 24px;
}
.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)
  > .v-expansion-panel--active {
  border-radius: 12px;
}
.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: white !important;
}
</style>
