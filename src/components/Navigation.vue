<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/Logo-kitty.webp" alt="Logo" width="100%" height="100%" style="object-fit: cover" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title"
                            >Kittycaketoken</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider />

            <v-list dense>
                <v-list-item
                    v-for="([icon, text, link], i) in items"
                    :key="i"
                    link
                    @click="goToSection(link)"
                >
                    <v-list-item-content>
                        <v-list-item-title class="subtitile-1">{{
                            text
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="transparent"
            :flat="true"
            dark
            fixed
            absolute
            class="px-md-16 py-8"
            :class="{ expand: flat }"
        >
            <v-toolbar-title>
                <v-img src="@/assets/img/Logo-kitty.webp" max-width="70px" width="70" />
            </v-toolbar-title>
            <v-spacer />
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="mr-4"
                v-if="isXs"
            />
            <div class="font-weight-bold" v-else>
                <v-btn text x-large @click="$vuetify.goTo('#about')">
                    <span class="mr-2 font-weight-black">About Us</span>
                </v-btn>
                <v-btn text x-large @click="$vuetify.goTo('#features')">
                    <span class="mr-2 font-weight-black">Our Features</span>
                </v-btn>
                <v-btn text x-large @click="$vuetify.goTo('#roadmap')">
                    <span class="mr-2 font-weight-black">Roadmap</span>
                </v-btn>
                <v-btn text x-large @click="$vuetify.goTo('#buy')">
                    <span class="mr-2 font-weight-black">Buy Presale</span>
                </v-btn>
                <v-btn ref="faq" text x-large @click="$vuetify.goTo('#partners')">
                    <span class="mr-2 font-weight-black">Connect With Us</span>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<style scoped>
.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    data: () => ({
        drawer: null,
        isXs: false,
        items: [
            ["mdi-home-outline", "About us", "#about"],
            ["mdi-information-outline", "Our Features", "#features"],
            ["mdi-download-box-outline", "Roadmap", "#roadmap"],
            ["mdi-email-outline", "Buy Presale", "#buy"],
            ["mdi-email-outline", "Connect With Us", "#partners"],
        ],
    }),
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        },
        goToSection(args) {
            this.drawer = !this.drawer
            this.$vuetify.goTo(link)
        }
    },

    watch: {
        isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
};
</script>
