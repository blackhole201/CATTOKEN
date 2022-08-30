<template>
    <section>
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
            <div class="text font-weight-thin">SCROLL DOWN</div>
        </div>
        <v-container fluid id="about" ref="about">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="3" class="d-none d-md-flex">
                            <v-img
                                src="@/assets/img/cat-final-2.webp"
                                class="d-block ml-auto mr-auto kitty"
                                max-width="400px"
                            />
                        </v-col>
                        <v-col cols="12" md="9">
                            <h1
                                class="
                                    heading
                                    font-weight-medium
                                    text-sm-h3 text-h3 text-xl-h2
                                "
                            >
                                <span class="primary--text">KittyCake</span> has
                                been one of the most joy filled community crypto
                                has ever seen.
                            </h1>
                            <h1
                                class="
                                    content
                                    font-weight-light
                                    text-sm-h4 text-h6 text-xl-h5
                                    my-5
                                "
                            >
                                KittyCake was taken over voluntarily by some die
                                hards who just wanted to see what could be done
                                of all of us "nobodies" put our minds to it.

                                <br />
                                Well, here we are, a full bull cycle and well
                                into a bear cycle and we are still here! Still
                                building, still dreaming and still working to
                                sustain our beloved KittyCake into its second
                                set of 9 lives.

                                <br />
                                We aren't ever leaving and we aren't ever going
                                anywhere. This new realm of KittyCake will TRULY
                                let the cat out of the bag.
                            </h1>
                            <v-btn
                                color="primary"
                                x-large
                                outlined
                                rounded
                                style="background-color: white"
                                class="mt-5"
                                >Read Our Whitepaper
                                <v-icon color="primary">mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    mounted() {
        // this.$gsap.from(".content", {
        //     duration: 1,
        //     x: 200,
        //     scrollTrigger: {
        //         trigger: "#about",
        //         start: "40% bottom",
        //     },
        // });
        this.$gsap.fromTo(
            ".heading",
            { yPercent: -50, scale: 0.5 },
            {
                opacity: 1,
                yPercent: 0,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#about",
                    start: "10% center",
                    end: "20% center",
                    scrub: true,
                },
            }
        );
        this.$gsap.fromTo(
            ".content",
            { yPercent: -50, scale: 0.5 },
            {
                opacity: 1,
                yPercent: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: "#about",
                    start: "30% center",
                    end: "40% center",
                    scrub: true,
                },
            }
        );
    },
};
</script>

<style scoped>
#about {
    z-index: 9999;
    display: flex;
    align-items: center;
    color: white;
}
.scroll-downs {
    position: absolute;
    right: 0;
    left: 0;
    top: -300px;
    margin: auto;
    width: auto;
    height: 55px;
    text-align: center;
    color: white;
}
.text {
    font-size: 2rem;
}
.mousey {
    margin: auto;
    width: 3px;
    margin-bottom: 1rem;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
}
.scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
}
@keyframes scroll {
    0% {
        opacity: 0;
    }
    10% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(15px);
        opacity: 0;
    }
}
</style>
