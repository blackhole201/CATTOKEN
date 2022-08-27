<template>
    <section id="hero">
        <v-row align="center" justify="center">
            <v-col cols="10">
                <v-img
                    ref="bigCatImage"
                    class="bigcat hidden-md-and-down"
                    src="@/assets/img/cat-final.webp"
                    :style="{
                        top: topPosition,
                        left: leftPosition,
                        right: rightPosition,
                        height: imageHeight,
                    }"
                    style="position: absolute; z-index: -999"
                ></v-img>
                <v-col
                    cols="12"
                    lg="6"
                    md="6"
                    sm="6"
                    xl="8"
                    :z-index="99"
                    :align-self="start"
                >
                    <h1
                        class="
                            text-xl-h1
                            text-lg-h1
                            text-md-h2
                            text-sm-h3
                            text-h2
                            font-weight-bold
                            mb-4
                        "
                    >
                        Hold KittyCake. <br />
                        Earn passive income paid in Cake.
                    </h1>
                    <v-btn
                        color="primary"
                        rounded
                        x-large
                        @click="$vuetify.goTo('#features')"
                        class="mt-5"
                    >
                        Connect Wallet
                        <v-icon color="white">mdi-plus</v-icon>
                    </v-btn>
                    <v-btn
                        color="white"
                        rounded
                        x-large
                        text
                        @click="$vuetify.goTo('#features')"
                        class="mt-5"
                    >
                        Buy KittyCake
                    </v-btn>
                </v-col>
                <v-col cols="12" md="6" xl="4"> </v-col>
            </v-col>
        </v-row>
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
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        isTablet() {
            return this.$vuetify.breakpoint.mdAndDown;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.positionScroll);
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
                let imageStyle = this.$refs.bigCatImage.$el.style;
                let distanceToTop = window.scrollY;

                if (distanceToTop < 900) {
                    imageStyle.top = -(window.scrollY * 3.3) + "px";
                    imageStyle.opacity = 1 - distanceToTop / 400;
                }
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
    height: 996px;
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

<style>
section {
    position: relative;
}
</style>
