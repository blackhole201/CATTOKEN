<template>
    <section id="features">
        <img
            src="@/assets/img/sun.png"
            alt="Sun Image"
            height="200"
            class="sun"
        />
        <v-container class="features">
            <h1
                class="
                    display-3
                    text-center
                    white--text
                    font-weight-bold
                    feature-title
                "
                style="margin-top: 7rem"
            >
                What do we offer
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
                        <v-card style="cursor: pointer" class="card-features">
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
                    title: "4% CAKE Redistribution",
                    text: "4% of every buy/sell is taken and redistributed to all holders. Hold $KittyCake tokens and earn $CAKE. A Minimum of 200,000 tokens is required in order to qualify for rewards.",
                },
                {
                    img: require("@/assets/img/icon/icon2.webp"),
                    title: "Automatic Reward Payment",
                    text: "No need to claim your earned $CAKE, it’s automatically sent to your wallet. Just add the PancakeSwap token ($CAKE) address to your wallet and you're set.",
                },
                {
                    img: require("@/assets/img/icon/icon3.webp"),
                    title: "Strategic Marketing",
                    text: "2% of every transaction is allocated to Marketing in $CAKE (swapped to CAKE in real-time to avoid dumps). This allows us to invest and develop the project further to expand the rewards for our community.",
                },
                {
                    img: require("@/assets/img/icon/icon4.webp"),
                    title: "Small Selling Fee",
                    text: "An extra 1% fee is applied to all sells. This will allow us to reduce swing-trading and break whales’ control.",
                },
                {
                    img: require("@/assets/img/icon/icon5.webp"),
                    title: "Locked Liquidity",
                    text: "Initial Liquidity Provided is locked Contract will be audited prior to launch",
                },
                {
                    img: require("@/assets/img/icon/icon6.webp"),
                    title: "Auto Liquidity",
                    text: "1% of every transaction is converted into liquidity for Pancakeswap. It’s automatic and helps create a price floor (stability).",
                },
            ],
        };
    },
    mounted() {
        this.$gsap.utils.toArray("section#features").forEach((section, i) => {
            section.style.backgroundPosition = "0% 0px";

            this.$gsap.to(section, {
                backgroundPosition: `0% ${-window.innerHeight / 1}px`,
                scrollTrigger: {
                    trigger: '#features',
                    start: "top bottom",
                    scrub: true,
                },
                ease: "none",
            });
        });
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
    height: 100vh;
    padding-top: 5rem;
    background: url("../assets/img/background/feature-background.png");
}
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
.sun {
    position: absolute;
    right: -500px;
    top: 0;
    z-index: -1;
}
</style>