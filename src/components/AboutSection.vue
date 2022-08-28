<template>
    <section id="about">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
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
                            <h1
                                class="
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

<style scoped>
#about {
    z-index: 9999;
    display: flex;
    align-items: center;
    color: white;
}
</style>
