<template>
    <section id="teams">
        <v-container id="teams">
            <h1
                class="display-3 text-center white--text font-weight-bold text-h3 text-h3"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                style="margin: 130px 0"
            >
                CORE TEAM
            </h1>
            <v-row align="strecth" justify="center" class="my-8">
                <v-col
                    cols="12"
                    xl="2"
                    lg="4"
                    md="4"
                    sm="4"
                    class="text-left"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    :data-aos-delay="200 + i * 300"
                    v-for="(feature, i) in features"
                    :key="i"
                >
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="card-features">
                            <v-img
                                :src="feature.img"
                                max-width="70px"
                                class="d-block mr-auto"
                                :class="{ 'zoom-efect': hover }"
                            ></v-img>
                            <h1 class="font-weight-black primary--text">{{ feature.title }}</h1>
                            <p class="font-weight-regular subtitle-1">
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
                    title: "Blackhole",
                    text: "Supreme Leader",
                },
                {
                    img: require("@/assets/img/icon/icon2.webp"),
                    title: "Salman",
                    text: "Investment Advisor",
                },
                {
                    img: require("@/assets/img/icon/icon3.webp"),
                    title: "Sharry",
                    text: "Lead Social Media Advisor",
                },
                {
                    img: require("@/assets/img/icon/icon4.webp"),
                    title: "Trin",
                    text: "Utiltiy Expert",
                },
                {
                    img: require("@/assets/img/icon/icon5.webp"),
                    title: "Lobster",
                    text: "Contract Dev",
                },
                {
                    img: require("@/assets/img/icon/icon6.webp"),
                    title: "Shiva",
                    text: "Crypto Market analyst",
                },
            ],
        };
    },
};
</script>

<style scoped>
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
</style>