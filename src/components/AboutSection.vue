<template>
    <section id="about">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center" class="py-4">
                        <v-col
                            cols="12"
                            md="3"
                            class="d-none d-md-flex"
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            <v-img
                                src="@/assets/img/cat-final-2.webp"
                                class="d-block ml-auto mr-auto"
                                max-width="400px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            data-aos="fade-left"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            <h1 class="font-weight-medium text-sm-h2">
                                KittyCake is an advanced hyper-deflationary
                                auto-rewards token on the Binance Smart Chain.
                            </h1>
                            <h1 class="font-weight-light text-sm-h3">
                                KittyCake rewards holders with his favorite
                                food, $CAKE, every hour! We also have a
                                dashboard to track your $CAKE rewards
                            </h1>
                            <v-btn
                                color="primary"
                                large
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

<style scoped>
#about {
    z-index: 9999;
    display: flex;
    align-items: center;
    height: 260px;
    color: white;
}
</style>
