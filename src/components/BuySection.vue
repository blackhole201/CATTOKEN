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
                <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container class="buy">
            <h1
                class="display-3 text-left white--text font-weight-bold text-h3"
                style="margin-bottom: 130px"
            >
        
                <span class="primary--text">How KittyCake Will be the Most Holder-centric Meme Coin
</span>
            </h1>

            <v-row>
                <v-col class="white--text gap-8">
                    <div class="step-1">
                        <h1 class="text-h5">a)	Higher revenue potential</h1>
                        <h2 class="primary--text text-h5">
                            KittyCake will expand the income-generation possibilities for its holders in two ways. It will eliminate overreliance on transaction fees and provide an alternative income source by investing in crypto mining hardware.
Secondly, the KittyCake project’s mining activities will not be limited to one cryptocurrency. Rather, the equipment invested in will be for mining various coins including Bitcoin, Helium, and Ethereum Classic.
This means that KittyCake will have multiple channels of generating the income to be paid to holders. That way, the revenue potential of the project will be sufficiently maximized for long-term gains.
</div>
                    <div
                        class="step-2"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">b)	Cushioning holders from market movements</h1>
                        <h2 class="primary--text text-h5">
                            While developments are being made to ensure more stability, crypto markets are still very speculative. As a result, they are prone to frequent fluctuations. On, one hand, these constant market movements provide prime opportunity for making profit.
On the other hand, they are very inconvenient and increase the risk associated with investing in crypto. However, KittyCake’s revenue model provides a way of sheltering holders from the volatility that sometimes characterizes crypto markets.
This is because crypto mining is not acutely responsive to market movements. Mining work goes on whether there is a rise or slump in the market. Hence, KittyCake holders can be assured of consistent passive income regardless of how the markets move.
                </div>
                    <div
                        class="step-3"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">c)	Higher profit margins</h1>
                        <h2 class="primary--text text-h5">
                            Besides exploring new revenue generation avenues, the KittyCake crypto project also aims to maximize returns and benefits to holders. This is by reducing the costs of mining crypto using the equipment we have invested in.
For instance, KittyCake’s mining equipment will be installed in an area where electricity is cheap and affordable. That way, the cost of mining will be low and this will allow holders to enjoy higher profit margins.

                        
                    </div>
                    <div
                        class="step-4"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">d)	Sustainable source of passive income;</h1>
                        <h2 class="primary--text text-h5">
                            By investing in projects like KittyCake, most crypto enthusiasts hope to establish themselves a way of earning income passively. However, most crypto projects are unable to provide this consistently as their revenue models are over-reliant on transaction fees.
However, KittyCake offers holders not just a lucrative and consistent but most importantly, a sustainable source of passive income. This is because of its investment in mining equipment spreading across multiple cryptocurrencies.
That way, holders can be able to achieve their financial goals more easily without having to worry about how other factors like market movements may affect their income.
Unlocking the full revenue potential of the crypto ecosystem
KittyCake is not just another crypto project reliant on traditional models to offer holders normal marginal benefits. We aim to completely turn around the Meme coin landscape by making sure passive income to our holders is lucrative and sustainable.
That is why part of the revenue generated will be reinvested in more equipment to expand mining operations and consequently, increase revenues. That way, KittyCake will be the most holder-centric project in the world of crypto!

                    
                    </div>
                    <div
                        class="step-5"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">Last step,</h1>
                        <h2 class="primary--text text-h5">
                            Add the Pancake Swap Token address to see your
                            rewards as they are
                        </h2>
                        <p class="text-h6">
                            Pancake Swap Token Address:
                            <span ref="tokenAddress"
                                >to be announced when presale starts</span
                            >.

                        </p>
                    </div>
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
</style>