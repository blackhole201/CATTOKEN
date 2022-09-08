<template>
    <section id="teams">
        <v-container id="teams">
            <h1
                class="display-3 text-center white--text font-weight-bold"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                style="margin: 130px 0"
            >
                Teams
            </h1>
            <v-row align="strecth" justify="center" class="my-8">
                <v-col
                    cols="12"
                    xl="2"
                    lg="2"
                    md="2"
                    sm="2"
                    class="text-left"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    :data-aos-delay="200 + i * 300"
                    v-for="(feature, i) in features"
                    :key="i"
                >
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="card-features">
                            <v-img
                                src="@/assets/img/icon/icon3.webp"
                                max-width="70px"
                                class="d-block mr-auto"
                                :class="{ 'zoom-efect': hover }"
                            ></v-img>
                            <h1 class="font-weight-bold">{{ feature.title }}</h1>
                            <p class="font-weight-regular subtitle-1">
                                {{ feature.text }}
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
    gap: 8px;
    height: 100%;
    transition: 0.5s ease-out;
    background: transparent;
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
</style>