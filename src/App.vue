<template>
    <v-app id="app">
        <navigation :color="color" :flat="flat" />
        <img src="@/assets/img/moon.png" alt="Moon" class="moon" />
        <v-main id="scrollbar" class="pt-0">
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
        <foote />
    </v-app>
</template>

<style>
#app {
    background: rgb(44, 45, 48);
    width: auto;
    height: auto;
    /* background: radial-gradient(50% 50% at 50% 50%, #590468 1.27%, rgba(0, 0, 0, 0.9) 100%); */
    /*background: linear-gradient(
        5deg,
        rgb(28, 20, 132) 5%,
        rgba(16, 25, 60, 1) 35%,
        rgb(65, 7, 190) 50%,
        rgba(16, 25, 60, 1) 65%,
        rgb(25, 17, 130) 95%
    );*/
    background-blend-mode: multiply;
    backdrop-filter: blur(55px);
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
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import features from "./components/FeaturesSection";
import partners from "./components/PartnersSection";
import buy from "./components/BuySection";
import team from "./components/TeamSection";
import faq from "./components/FAQSection";
import ProductRoadmap from "./components/Roadmap.vue";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "App",

    components: {
        navigation,
        foote,
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

    created() {
        let scrollbar = Scrollbar.init(document.querySelector("#app"), {
            damping: 0.01,
            alwaysShowTracks: false,
        });
    },

    mounted() {
        this.$gsap.to(".moon", {
            rotation: 360,
            transformOrigin: "center",
            ease: "none",
            duration: 10,
            repeat: -1,
        });

        this.$gsap.utils.toArray(".moon").forEach((section, i) => {
            const heightDiff =
                section.offsetHeight - section.parentElement.offsetHeight;

            this.$gsap.fromTo(
                section,
                {
                    y: () => -section.offsetHeight,
                },
                {
                    scrollTrigger: {
                        trigger: section.parentElement,
                        scrub: true,
                    },
                    y:
                        section.parentElement.offsetHeight -
                        section.offsetHeight,
                    ease: "none",
                }
            );
        });
        // this.$gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#about",
        //         endTrigger: "#features",
        //         start: "top bottom",
        //         end: "bottom bottom",
        //         scrub: true,
        //         pin: true,
        //         markers: true,
        //     },
        // });
        // this.$gsap.utils.toArray("#partners").forEach((elem) => {
        //     ScrollTrigger.create({
        //         trigger: elem,
        //         start: "top 30%",
        //         end: "bottom 30%",
        //         onLeave: (self) => {
        //             this.$gsap.to("#faq", {
        //                 backgroundColor: "#000",
        //                 duration: 1.4,
        //             });
        //         },
        //         onToggle: (self) =>
        //             this.$gsap.to("#partners", {
        //                 backgroundColor: "#fff",
        //                 duration: 1.4,
        //             }),
        //     });
        // });
    },
};
</script>