<template>
  <section id="faq">
    <v-container>
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h3 text-lg-h3 text-md-h3 text-sm-h3"
        style="margin-bottom: 2rem; word-wrap: break-word"
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
            "KittyCake is an advanced hyper-deflationary auto-rewards token on the Binance Smart Chain. KittyCake rewards true holders with divident payments generated from mining equipment.",
        },
        {
          question: "So, KittyCake is a rewards token?",
          answer:
            "We strive to bring it beyond the MEME token sphere and give it a solid utility. KittyCake will in time become a Bitcoin mining utility token.",
        },
        
        {
          question: "How much $KCAKE must I hold to get dividents?",
          answer:
            "You must hold at least 4 000 000 000 $KCAKE tokens to be eligable for rewards.",
        },
        {
          question:
            "Do I just have to hold $KCAKE to get dividents?",
          answer:
            "Yes you just have to hold the minimum amount of $KCAKE (4 000 000 000 tokens) in your wallet.",
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
