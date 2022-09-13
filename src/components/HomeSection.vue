<template>
    <section id="hero">
        <v-parallax
            src="@/assets/img/background/background1.jpeg"
            height="870"
            ref="parallax"
            id="parallax"
            style="width: 100%"
        >
            <img
                src="@/assets/img/cat-final.webp"
                width="auto"
                height="700"
                class="kitty-image d-none d-lg-block"
                alt=""
                :style="{ right: rightPosition }"
            />
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-col
                        cols="12"
                        lg="6"
                        md="12"
                        sm="12"
                        xl="6"
                        :z-index="99"
                        :align-self="'start'"
                    >
                        <img
                            src="@/assets/img/text-logo.webp"
                            alt="Text Logo"
                            height="100%"
                            :style="{ width: imageWidth }"
                        />
                        <h2
                            class="
                                text-h4
                                text-xl-h3
                                text-lg-h4
                                text-md-h3
                                text-sm-h3
                                font-weight-medium
                            "
                        >
                            Not Just A Meme Coin
                        </h2>
                        <p
                            class="
                                text-subtitle-1
                                text-xl-h6
                                text-lg-h6
                                text-md-h6
                                text-sm-subtitle-1
                                font-weight-light
                            ">
                            KittyCake V2 the most sustainable passive income project ins BSC space.
                            We are not only keeping the rewarded system which has so far paid holders over USD 2,000,000 we will also be adding few more utilities
                            for sustainability.
                        </p>
                        <v-btn
                            color="primary"
                            rounded
                            x-large
                            @click="$vuetify.goTo('#features')"
                        >
                            Buy Presale
                            <v-icon color="white">mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="6" xl="4"> </v-col>
                </v-col>
            </v-row>
        </v-parallax>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            videoId: "i8IvvHJssWE",
        };
    },
    computed: {
        topPosition() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 460 + "px";
                case "sm":
                    return 460 + "px";
                case "md":
                    return 460 + "px";
                default:
                    return 40 + "px";
            }
        },
        leftPosition() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "auto";
                case "sm":
                    return "auto";
                case "md":
                    return "auto";
                default:
                    return 450 + "px";
            }
        },
        rightPosition() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "auto";
                case "sm":
                    return "auto";
                case "md":
                    return "auto";
                case "lg":
                    return -200 + "px";
                case "xl":
                    return -20 + "px";
                default:
                    return "unset";
            }
        },
        imageHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 850 + "px";
                case "sm":
                    return 850 + "px";
                case "md":
                    return 850 + "px";
                default:
                    return 1680 + "px";
            }
        },
        imageWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 110 + "%";
                case "sm":
                    return 100 + "%";
                case "md":
                    return 100 + "%";
                case "lg":
                    return 45 + "rem";
                default:
                    return 60 + "rem";
            }
        },
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        isTablet() {
            return this.$vuetify.breakpoint.mdAndDown;
        },
    },
    mounted() {
        this.$gsap.utils
            .toArray(".v-parallax__image-container")
            .forEach((section, i) => {
                section.style.backgroundPosition = "0% 0px";

                this.$gsap.to(section, {
                    backgroundPosition: `80% ${-window.innerHeight / 1}px`,
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top bottom",
                        scrub: true,
                    },
                    ease: "none",
                });
            });
        window.addEventListener("scroll", this.positionScroll);

        this.$gsap.utils.toArray(".kitty-image").forEach((section, i) => {
            this.$gsap.fromTo(
                section,
                {
                    // y: () => -section.offsetHeight,
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
    },
    watch: {
        dialog(value) {
            if (!value) {
                this.pause();
            }
        },
    },
    methods: {
        positionScroll() {
            if (!this.$vuetify.breakpoint.mdAndDown) {
                // let imageStyle = this.$refs.bigCatImage.$el.style;
                // let distanceToTop = window.scrollY;
                // if (distanceToTop < 900) {
                //     imageStyle.top = -(window.scrollY * 3.5) + "px";
                //     imageStyle.opacity = 1 - distanceToTop / 400;
                // }
            }
        },
        ready(event) {
            this.player = event.target;
        },
        playing(event) {
            // The player is playing a video.
        },
        change() {
            // when you change the value, the player will also change.
            // If you would like to change `playerVars`, please change it before you change `videoId`.
            // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
            // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
            this.videoId = "another video id";
        },
        stop() {
            this.player.stopVideo();
        },
        pause() {
            this.player.pauseVideo();
        },
    },
};
</script>

<style lang="scss">
#hero {
    height: 54.375rem;
    display: flex;
    color: white;
}
.circle {
    stroke: white;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
}
.kitty-image {
    position: absolute;
    right: -20px;
    z-index: -1;
}
.playBut {
    /*  border: 1px solid red;*/
    display: inline-block;
    -webkit-transition: all 0.5s ease;

    .triangle {
        -webkit-transition: all 0.7s ease-in-out;
        stroke-dasharray: 240;
        stroke-dashoffset: 480;
        stroke: white;
        transform: translateY(0);
    }

    &:hover {
        .triangle {
            stroke-dashoffset: 0;
            opacity: 1;
            stroke: white;
            animation: nudge 0.7s ease-in-out;

            @keyframes nudge {
                0% {
                    transform: translateX(0);
                }
                30% {
                    transform: translateX(-5px);
                }
                50% {
                    transform: translateX(5px);
                }
                70% {
                    transform: translateX(-2px);
                }
                100% {
                    transform: translateX(0);
                }
            }
        }

        .circle {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }
}
</style>

<style scoped>
.btn-play {
    transition: 0.2s;
}

.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}

#hero {
    z-index: 0;
}
.svg-border-waves img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -2px;
    z-index: -1;
}
</style>

<style lang="scss">
section {
    position: relative;
}
@media only screen and (max-width: 992px) {
    .parallax img {
        max-height: 130%; /* or a little bit higher */
    }
}

@media only screen and (min-width: 993px) {
    .parallax img {
        max-height: 170%; /* or higher percentages. It's up to your taste */
    }
}
</style>
