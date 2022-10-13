<template>
  <section id="buy">
    <v-snackbar
      v-model="snackbar"
      rounded="pill"
      color="success"
      timeout="2000"
      :absolute="true"
    >
      Token Address has been copied to clipboard!

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-container class="buy">
      <h1
        class="display-3 text-left white--text font-weight-bold text-h3"
        style="margin-bottom: 130px"
      >
        <span class="white--text"
          >How KittyCake Will be the Most Holder-centric Meme Coin
        </span>
      </h1>

      <v-row align="stretch" justify="center" class="my-8">
        <v-col
          cols="12"
          xl="12"
          lg="4"
          md="4"
          sm="6"
          class="text-left card"
          v-for="(feature, i) in buyStep"
          :key="i"
        >
          <v-hover>
            <v-card style="cursor: pointer" class="card-features">
              <h1 class="font-weight-bold text-h5">
                {{ i + 1 }}. {{ feature.title }}
              </h1>
              <p
                class="font-weight-regular text-h6 font-weight-light text-sm-h6 text-md-h5 text-subtitle-1 text-xl-h6 my-5"
              >
                {{ feature.description }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      buyStep: [
        {
          title: "Higher revenue potential",
          description:
            "KittyCake will expand the income-generation possibilities for its holders in two ways. It will eliminate overreliance on transaction fees and provide an alternative income source by investing in crypto mining hardware. Secondly, the KittyCake project’s mining activities will not be limited to one cryptocurrency. Rather, the equipment invested in will be for mining various coins including Bitcoin, Helium, and Ethereum Classic. This means that KittyCake will have multiple channels of generating the income to be paid to holders. That way, the revenue potential of the project will be sufficiently maximized for long-term gains.",
        },
        {
          title: "Cushioning holders from market movement",
          description:
            "While developments are being made to ensure more stability, crypto markets are still very speculative. As a result, they are prone to frequent fluctuations. On, one hand, these constant market movements provide prime opportunity for making profit. On the other hand, they are very inconvenient and increase the risk associated with investing in crypto. However, KittyCake’s revenue model provides a way of sheltering holders from the volatility that sometimes characterizes crypto markets. This is because crypto mining is not acutely responsive to market movements. Mining work goes on whether there is a rise or slump in the market. Hence, KittyCake holders can be assured of consistent passive income regardless of how the markets move.",
        },
        {
          title: "Higher profit margins",
          description:
            "Besides exploring new revenue generation avenues, the KittyCake crypto project also aims to maximize returns and benefits to holders. This is by reducing the costs of mining crypto using the equipment we have invested in. For instance, KittyCake’s mining equipment will be installed in an area where electricity is cheap and affordable. That way, the cost of mining will be low and this will allow holders to enjoy higher profit margins.",
        },
        {
          title: "Sustainable source of passive income",
          description:
            "By investing in projects like KittyCake, most crypto enthusiasts hope to establish themselves a way of earning income passively. However, most crypto projects are unable to provide this consistently as their revenue models are over-reliant on transaction fees. However, KittyCake offers holders not just a lucrative and consistent but most importantly, a sustainable source of passive income. This is because of its investment in mining equipment spreading across multiple cryptocurrencies. That way, holders can be able to achieve their financial goals more easily without having to worry about how other factors like market movements may affect their income. Unlocking the full revenue potential of the crypto ecosystem KittyCake is not just another crypto project reliant on traditional models to offer holders normal marginal benefits. We aim to completely turn around the Meme coin landscape by making sure passive income to our holders is lucrative and sustainable. That is why part of the revenue generated will be reinvested in more equipment to expand mining operations and consequently, increase revenues. That way, KittyCake will be the most holder-centric project in the world of crypto!",
        },
      ],
    };
  },
  methods: {
    copyToken() {
      let token = this.$refs.tokenAddress.innerHTML;
      // navigator.clipboard.writeText(token)
      this.snackbar = true;
    },
  },
  mounted() {},
};
</script>

<style scoped>
#buy {
  padding: 120px 0;
  box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.05);
  background-blend-mode: darken;
}
.buy {
  width: 100%;
}
.step-1,
.step-2,
.step-3,
.step-4,
.step-5 {
  margin-bottom: 24px;
}
.card-features {
  padding: 24px;
  height: 100%;
  transition: 0.5s ease-out;
  background: transparent;
  backdrop-filter: blur(20px);
  color: white !important;
  box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.85);
  border: 3px solid #92e7ff;
}
</style>
