<template>
  <section id="about">
    <img
      src="@/assets/img/airplane-planet.png"
      alt="Planet-1"
      height="500"
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
      src="@/assets/img/planet1.png"
      alt="Planet-1"
      height="300"
      class="planet-4"
    />
    <v-container id="about-content">
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h2 text-lg-h3 text-md-h3 text-sm-h3"
        style="margin-bottom: 130px; word-wrap: break-word"
      >
        <span class="primary--text">KittyCake</span> Revolutionising passive
        income models
      </h1>
      <v-row align="center" justify="center">
        <v-col cols="12" md="12" lg="6" sm="12" xl="6"> </v-col>
        <v-col cols="12" md="12" lg="6" sm="12" xl="6">
          <div class="box">
            <v-card class="card-features">
              <p
                class="content font-weight-light text-sm-h6 text-md-h5 text-subtitle-1 text-xl-h6 my-5"
              >
                <br />
                KittyCake garners the attention of both crypto enthusiasts and
                investors with its unique tokenomics and ecosystem. It has
                positioned itself in a unique way by bringing the best of
                gaming, NFTs and reward system in one place.
                <br />
                <br />
                As the pioneer Bitcoin-powered meme coin, KittyCake doesn’t only
                aim to offer its holders more utility than other coins
                conventionally do. More importantly, KittyCake is going to
                transform how passive income is generated in the crypto
                ecosystem.

                <br />
                <br />
                Rather, KittyCake will invest in equipment for mining a variety
                of cryptocurrencies using latest POWAN technology. This will help
                expand the project’s income channels and consequently, holders
                will enjoy higher revenue benefits with this eco-friendly,
                low-power and low-cost mining system.
                <br />
                <br />
              </p>
              <h1>You want to know more about old Kitty?</h1>
              <v-btn
                color="primary"
                x-large
                outlined
                rounded
                block
                link
                style="background-color: white"
                class="mt-5"
                target="_blank"
                href="https://medium.com/@kittycakecommunity"
                >Read our story
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </div>
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
      y: 400,
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
      y: 400,
      duration: 1.5,
      scale: 0.5,
      scrollTrigger: {
        trigger: "#about",
        start: "90% bottom",
      },
    });
    this.$gsap.to(".planet-4", {
      x: -1000,
      y: 650,
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
  background-image: linear-gradient(rgba(0, 0, 0 0.2), rgba(0, 0, 0, 0.8)),
    url("https://picsum.photos/id/1031/500/400");
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
.card-features {
  padding: 24px;
  gap: 8px;
  height: 100%;
  transition: 0.5s ease-out;
  background: transparent !important;
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
</style>
