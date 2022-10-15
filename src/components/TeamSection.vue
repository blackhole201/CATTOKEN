<template>
  <section id="teams">
    <v-container id="teams">
      <h1
        class="text-center white--text font-weight-bold roadmap-title text-h4 text-xl-h3 text-lg-h3 text-md-h3 text-sm-h3"
        style="margin-bottom: 2rem; word-wrap: break-word"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        CORE TEAM
      </h1>
      <v-row
        justify="center"
        align="start"
        class="my-8"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <v-col
          cols="12"
          xl="2"
          lg="2"
          md="2"
          sm="4"
          class="text-left team-wrapper"
          v-for="(feature, i) in features"
          :key="i"
        >
          <v-card class="card-features">
            <v-img
              :src="feature.img"
              contain
              class="mx-auto my-auto"
              max-height="75%"
            ></v-img>
          </v-card>
          <h1 class="font-weight-black white--text text-center mt-8">
            {{ feature.title }}
          </h1>
          <h2 class="font-weight-black grey--text lighten-5 text-center">
            {{ feature.text }}
          </h2>
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
          img: require("@/assets/img/sticker/sticker-1.png"),
          title: "Blackhole",
          text: "Supreme Leader",
        },
        {
          img: require("@/assets/img/sticker/sticker-2.png"),
          title: "Salman",
          text: "Investment Advisor",
        },
        {
          img: require("@/assets/img/sticker/sticker-3.png"),
          title: "Sharry",
          text: "Lead Social Media Advisor",
        },
        {
          img: require("@/assets/img/sticker/sticker-4.png"),
          title: "Trin",
          text: "Utiltiy Expert",
        },
        {
          img: require("@/assets/img/sticker/sticker-5.png"),
          title: "Asphyx",
          text: "Contract Dev",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.team-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.card-features {
  height: 10rem;
  width: 10rem;
  display: flex;
  transition: 0.5s ease-out;
  background: #525b9b;
  backdrop-filter: blur(20px);
  color: white !important;
  box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.85);
  border: 1px solid #92e7ff;
  border-radius: 50%;
}

.card-features .v-image {
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
