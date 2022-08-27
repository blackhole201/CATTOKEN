<template>
    <section id="faq">
        <v-container>
            <h1
                class="display-3 text-center white--text font-weight-bold"
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
        <v-container
            class="mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
        >
            <v-row align="center" justify="center">
                <v-col class="text-center">
                    <v-btn
                        color="primary"
                        x-large
                        outlined
                        rounded
                        style="background-color: white"
                        >Read More FAQs
                        <v-icon color="primary">mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
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
                    answer: "KittyCake is an advanced hyper-deflationary auto-rewards token on the Binance Smart Chain. KittyCake rewards holders with his favorite food, $CAKE, every hour! We also have a dashboard to track your $CAKE rewards",
                },
                {
                    question: "So, KittyCake is a MEME rewards token?",
                    answer: "We strive to bring it beyond the MEME token sphere and give it a solid utility. KittyCake will in time become a gaming utility token.",
                },
                {
                    question: "How does the dashboard works?",
                    answer: "You just copy/paste your wallet address that holds $KCAKE into the dashboard. You will automatically see your KCAKE balance and your estimated and already paid $CAKE rewards!",
                },
                {
                    question:
                        "How much $KCAKE must I hold to get $CAKE rewards?",
                    answer: "You must hold at least 200 000 $KCAKE tokens to receive $CAKE.",
                },
                {
                    question:
                        "Do I just have to hold $KCAKE to get $CAKE rewards in my wallet?",
                    answer: "Yes you just have to hold the minimum amount of $KCAKE (200 000 tokens) in your wallet. Also make sure you have $CAKE added to your wallet. The $CAKE token contract address is: 0xc22e8114818a918260662375450e19ac73d32852",
                },
                {
                    question: "Why am I not receiving rewards every hour?",
                    answer: "The way the contract works is it auto accumulates your $CAKE rewards and pays them out hourly - HOWEVER if volume is low or the amount of your $CAKE reward based on your KittyCake total is deemed not high enough to pay the gas fee out of your reward to send you, the contract will hold your rewards and auto pay them when it will be most effective for you specifically as to not eat up all your rewards by constantly paying gas fees against your rewards. Also, as the number of $KCAKE holders grow, you will sometimes have to wait a bit longer, because there are investors who are due their $CAKE rewards before you.",
                },
            ],
        };
    },
};
</script>

<style scoped>
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
.v-icon {
    color: white !important;
}
</style>