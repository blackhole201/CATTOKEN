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
                        <span class="primary--text">KittyCake</span> not just a
                        meme coin.
                    </h1>
                    <h1
                        class="
                            content
                            font-weight-light
                            text-sm-h4 text-h6 text-xl-h5
                            my-5
                        "
                    >
                        <br />
                        KittyCake garners the attention of both crypto
                        enthusiasts and investors with its unique tokenomics and
                        ecosystem. It has positioned itself in a unique way by
                        bringing the best of gaming, NFTs and reward system in
                        one place.
                        <br />
                        <br />
                        An anonymous developer launched a token named KittyCake
                        inspired from the Waving Lucky Cat of the
                        Chinese/Japanese community. It was believed that the
                        figurine will bring good fortune and luck to the owners.

                        <br />
                        <br />
                        A strong community quickly formed around it; the token
                        did really well initially & provided investors with a
                        passive income of over 100,000 $CAKE Tokens i.e. over $2
                        M in dividend payments. However like many other projects
                        the project was abandoned by the developers but the
                        vibrant community did not give up on it. The current
                        team, a group of very initial investors took the
                        initiative and proposed a community takeover, which was
                        welcomed by the community. Now we are re launching the
                        project. We aim to bring the destined glory to the
                        investors and community.

                        <br />
                        <br />
                        The team has put in place a solid long-term roadmap and
                        is consistently working to build an ecosystem with a
                        goal of making sustainability and longevity as the
                        central focus.

                        <br />
                        <br />
                        Now, it is KittyCake’s turn to bring you tons of fortune
                        through its CAKE token.
                        <br /><br />
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
        this.$gsap.utils.toArray("section#about").forEach((section, i) => {
            section.style.backgroundPosition = "0% 0px";

            this.$gsap.to(section, {
                backgroundPosition: `0% ${-window.innerHeight / 3}px`,
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",
                    scrub: true,
                },
                ease: "none",
            });
        });

        this.$gsap.to(".planet-1", {
            top: "30%",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                scrub: true,
            },
            ease: "none",
        });

        this.$gsap.to(".planet-2", {
            top: "15%",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                scrub: true,
            },
            ease: "none",
        });

        this.$gsap.to(".planet-3", {
            top: "10%",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                scrub: true,
            },
            ease: "none",
        });

        this.$gsap.to(".planet-4", {
            top: "25%",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                scrub: true,
            },
            ease: "none",
        });

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
    padding: 5rem 0;
    background: url("../assets/img/background/about.png");
}
.planet-1 {
    position: absolute;
    left: -500px;
    top: 0;
    z-index: -99;
}

.planet-2 {
    position: absolute;
    left: -500px;
    top: 0;
    z-index: -99;
}

.planet-3 {
    position: absolute;
    right: -500px;
    top: 0;
    z-index: -99;
}
.planet-4 {
    position: absolute;
    right: -500px;
    top: 0;
    z-index: -99;
}
.scroll-downs {
    position: absolute;
    right: 0;
    left: 0;
    top: -13rem;
    margin: auto;
    width: auto;
    height: 55px;
    text-align: center;
    color: white;
}
@media only screen and (min-width: 1680px) {
    .scroll-downs {
        position: absolute;
        right: 0;
        left: 0;
        top: -5rem;
        margin: auto;
        width: auto;
        height: 55px;
        text-align: center;
        color: white;
    }
}
@media only screen and (min-width: 1024px) {
    .scroll-downs {
        position: absolute;
        right: 0;
        left: 0;
        top: -14rem;
        margin: auto;
        width: auto;
        height: 55px;
        text-align: center;
        color: white;
    }
}
@media only screen and (min-height: 667px) {
    .scroll-downs {
        position: absolute;
        right: 0;
        left: 0;
        top: -16rem;
        margin: auto;
        width: auto;
        height: 55px;
        text-align: center;
        color: white;
    }
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
