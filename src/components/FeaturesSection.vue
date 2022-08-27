<template>
    <section id="features">
        <v-container fluid id="features" style="margin: 120px 0">
            <h1
                class="display-3 text-center white--text font-weight-bold"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                style="margin: 130px 0"
            >
                Features We Provide You
            </h1>
            <v-row align="center" justify="center" class="my-8">
                <v-col cols="10">
                    <v-row align="stretch" justify="space-around">
                        <v-col
                            cols="12"
                            sm="2"
                            class="text-left"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            :data-aos-delay="200 + (i * 300)"
                            v-for="(feature, i) in features"
                            :key="i"
                        >
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                    class="card-features"
                                    :elevation="hover ? 10 : 4"
                                    :class="{ up: hover }"
                                >
                                    <v-img
                                        :src="feature.img"
                                        max-width="70px"
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
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    img: require("@/assets/img/icon/icon1.webp"),
                    title: "7% CAKE Redistribution",
                    text: "7% of every buy/sell is taken and redistributed to all holders. Hold $KittyCake tokens and earn $CAKE. A Minimum of 200,000 tokens is required in order to qualify for rewards.",
                },
                {
                    img: require("@/assets/img/icon/icon2.webp"),
                    title: "Automatic Reward Payment",
                    text: "No need to claim your earned $CAKE, it’s automatically sent to your wallet. Just add the PancakeSwap token ($CAKE) address to your wallet and you're set.",
                },
                {
                    img: require("@/assets/img/icon/icon3.webp"),
                    title: "Strategic Marketing",
                    text: "5% of every transaction is allocated to Marketing in $CAKE (swapped to CAKE in real-time to avoid dumps). This allows us to invest and develop the project further to expand the rewards for our community.",
                },
                {
                    img: require("@/assets/img/icon/icon4.webp"),
                    title: "Small Selling Fee",
                    text: "An extra 1% fee is applied to all sells. This will allow us to reduce swing-trading and break whales’ control.",
                },
                {
                    img: require("@/assets/img/icon/icon5.webp"),
                    title: "Locked Liquidity",
                    text: "Initial Liquidity Provided is locked with DXLock until 2030. Contract is fully audited by Desert Finance",
                },
                {
                    img: require("@/assets/img/icon/icon6.webp"),
                    title: "Auto Liquidity",
                    text: "2% of every transaction is converted into liquidity for Pancakeswap. It’s automatic and helps create a price floor (stability).",
                },
            ],
        };
    },
};
</script>

<style scoped>
.card-features {
    padding: 24px;
    gap: 12px;
    height: 100%;
    transition: 0.5s ease-out;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    color: white !important;
    border: 1px solid #afafaf;
    box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.45);
    border-radius: 20px !important;
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
</style>