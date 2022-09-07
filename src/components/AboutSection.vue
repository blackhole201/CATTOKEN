<template>
    <section id="about">
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
            <div class="text font-weight-thin">SCROLL DOWN</div>
        </div>
        <img
            src="@/assets/img/planet1.png"
            alt="Planet-1"
            height="300"
            class="planet-1"
        />
        <img
            src="@/assets/img/planet2.png"
            alt="Planet-2"
            height="300"
            class="planet-2"
        />
        <img
            src="@/assets/img/planet3.png"
            alt="Planet-3"
            height="300"
            class="planet-3"
        />
        <img
            src="@/assets/img/planet4.png"
            alt="Planet-4"
            height="300"
            class="planet-4"
        />
        <v-container id="about-content">
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <h1
                        class="
                            heading
                            font-weight-medium
                            text-sm-h3 text-h3 text-xl-h2
                        "
                    >
                        <span class="primary--text">KittyCake</span> has been
                        one of the most joy filled community crypto has ever
                        seen.
                    </h1>
                    <h1
                        class="
                            content
                            font-weight-light
                            text-sm-h4 text-h6 text-xl-h5
                            my-5
                        "
                    >
                        KittyCake was taken over voluntarily by some die hards
                        who just wanted to see what could be done of all of us
                        "nobodies" put our minds to it.

                        <br />
                        Well, here we are, a full bull cycle and well into a
                        bear cycle and we are still here! Still building, still
                        dreaming and still working to sustain our beloved
                        KittyCake into its second set of 9 lives.

                        <br />
                        We aren't ever leaving and we aren't ever going
                        anywhere. This new realm of KittyCake will TRULY let the
                        cat out of the bag.
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
        </v-container>
    </section>
</template>

<script>
export default {
    mounted() {
        this.$gsap.to(".scroll-downs", {
            duration: 0.5,
            y: -100,
            scrollTrigger: {
                trigger: "#about",
                start: "10% bottom",
            },
            onComplete: () => {
                this.$gsap.to(".scroll-downs", {
                    duration: 0.5,
                    y: 1200,
                    scrollTrigger: {
                        trigger: "#about",
                        start: "10% bottom",
                    },
                    opacity: 0,
                });
            },
        });
        this.$gsap.to(".planet-1", {
            x: 700,
            y: 500,
            duration: 1,
            scrollTrigger: {
                trigger: "#about",
                start: "10% bottom",
            },
            onComplete: () => {
                console.log("on complete");
            },
        });
        this.$gsap.to(".planet-2", {
            x: 1100,
            y: 200,
            duration: 2,
            scale: 0.3,
            scrollTrigger: {
                trigger: "#about",
                start: "10% bottom",
            },
        });
        this.$gsap.to(".planet-3", {
            x: -900,
            y: 1000,
            duration: 1.5,
            scale: 0.5,
            scrollTrigger: {
                trigger: "#about",
                start: "90% bottom",
            },
        });
        this.$gsap.to(".planet-4", {
            x: -1000,
            y: 850,
            duration: 1.5,
            scale: 0.8,
            scrollTrigger: {
                trigger: "#about",
                start: "90% bottom",
            },
        });

        this.$gsap.utils
            .toArray("#about #about-content")
            .forEach((section, i) => {
                this.$gsap.fromTo(
                    section,
                    {
                        y: section.offsetHeight,
                    },
                    {
                        scrollTrigger: {
                            trigger: section.parentElement,
                            scrub: true,
                            start: "top top",
                            end: "bottom bottom",
                        },
                        y:
                            section.parentElement.offsetHeight -
                            section.offsetHeight,
                        ease: "none",
                    }
                );
            });
    },
};
</script>

<style scoped>
#about {
    z-index: 9999;
    display: flex;
    align-items: center;
    color: white;
    width: 100%;
    padding-bottom: 80rem;
    padding-top: 5rem;
    background: url("../assets/img/background/about.png");
}
.planet-1 {
    position: absolute;
    left: -500px;
    top: 0;
}

.planet-2 {
    position: absolute;
    left: -500px;
    top: 0;
}

.planet-3 {
    position: absolute;
    right: -500px;
    top: 0;
}
.planet-4 {
    position: absolute;
    right: -500px;
    top: 0;
}
.scroll-downs {
    position: absolute;
    right: 0;
    left: 0;
    top: -50px;
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
