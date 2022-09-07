<template>
    <v-app id="app">
        <navigation :color="color" :flat="flat" />
        <!-- <img src="@/assets/img/moon.png" alt="Moon" class="moon" /> -->
        <v-main class="pt-0">
            <home />
            <about />
            <features />
            <product-roadmap />
            <buy />
            <team />
            <faq />
            <partners />
        </v-main>

        <v-scale-transition>
            <v-btn
                fab
                v-show="fab"
                v-scroll="onScroll"
                dark
                fixed
                bottom
                right
                color="secondary"
                @click="toTop"
            >
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>
    </v-app>
</template>

<style>
#app {
    /* background: linear-gradient(
        181.28deg,
        #380c6f 1.97%,
        rgba(29, 90, 191, 0.939039) 47.11%,
        rgba(17, 11, 51, 0.965232) 98.91%
    ); */
    background: url("./assets/img/background/galaxy.png");
    background-size: cover;
    height: auto;
    background-blend-mode: multiply;
    backdrop-filter: blur(55px);
    background-position: 10% 130px;
}
.theme--light.v-expansion-panels
    .v-expansion-panel-header
    .v-expansion-panel-header__icon
    .v-icon {
    color: white;
}
.moon {
    position: absolute;
    right: 5px;
    width: 180px;
    height: 180px;
    z-index: 99;
}
</style>

<script>
import navigation from "./components/Navigation";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import features from "./components/FeaturesSection";
import partners from "./components/PartnersSection";
import buy from "./components/BuySection";
import team from "./components/TeamSection";
import faq from "./components/FAQSection";
import ProductRoadmap from "./components/Roadmap.vue";

export default {
    name: "App",

    components: {
        navigation,
        home,
        features,
        about,
        partners,
        buy,
        team,
        faq,
        ProductRoadmap,
    },

    metaInfo: {
        title: "Kittycaketoken",
        meta: [
            { charset: "utf-8" },
            {
                name: "description",
                content:
                    "KittyCake is an advanced hyper-deflationary auto-rewards token on the Binance Smart Chain.",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
    },

    data: () => ({
        fab: null,
        color: "",
        flat: null,
    }),

    created() {
        const top = window.pageYOffset || 0;
        if (top <= 60) {
            this.color = "transparent";
            this.flat = true;
        }
    },

    watch: {
        fab(value) {
            if (value) {
                this.color = "secondary";
                this.flat = false;
            } else {
                this.color = "transparent";
                this.flat = true;
            }
        },
    },

    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 60;
        },
        toTop() {
            this.$vuetify.goTo(0);
        },
    },

    mounted() {
        this.$gsap.utils.toArray("#app").forEach((section, i) => {
            this.$gsap.to(section, {
                backgroundPosition: `10% ${-window.innerHeight / 0.2}px`,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    scrub: true,
                },
                ease: "none",
            });
        });
        // this.$gsap.utils.toArray("section").forEach((section, i) => {
        //     if (i != 0) {
        //         this.$gsap.from(section, {
        //             scrollTrigger: {``
        //                 trigger: section,
        //                 start: "top top",
        //             },
        //             opacity: 0,
        //         });
        //         this.$gsap.to(section, {
        //             scrollTrigger: {
        //                 trigger: section,
        //                 start: "top top",
        //             },
        //             opacity: 1,
        //         });
        //     }
        // });
    },
};
</script>