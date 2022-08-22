<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary dark>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/cat-final-2.webp" alt="Logo" />
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
                    @click="$vuetify.goTo(link)"
                >
                    <v-list-item-icon class="justify-center">
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>
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
            :color="color"
            :flat="flat"
            dark
            absolute
            class="px-12"
            :class="{ expand: flat }"
        >
            <v-toolbar-title>
                <v-img src="@/assets/img/cat-final-2.webp" max-width="50px" />
            </v-toolbar-title>
            <v-spacer />
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="mr-4"
                v-if="isXs"
            />
            <div v-else>
                <v-btn text @click="$vuetify.goTo('#about')">
                    <span class="mr-2">About Us</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#features')">
                    <span class="mr-2">Our Features</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#roadmap')">
                    <span class="mr-2">Roadmap</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#buy')">
                    <span class="mr-2">How To Buy</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#faq')">
                    <span class="mr-2">FAQ</span>
                </v-btn>
                <v-btn
                    color="primary"
                    rounded
                    @click="$vuetify.goTo('#footer')"
                >
                    <span class="mr-2">Connect Wallet</span>
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
export default {
    data: () => ({
        drawer: null,
        isXs: false,
        items: [
            ["mdi-home-outline", "Home", "#hero"],
            ["mdi-information-outline", "About Us", "#about"],
            ["mdi-download-box-outline", "Our Features", "#features"],
            ["mdi-email-outline", "See Products", "#contact"],
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
