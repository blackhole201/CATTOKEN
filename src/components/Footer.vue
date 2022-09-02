<template>
    <v-footer dark id="footer">
        <v-container>
            <v-row justify="center" align="center">
                <v-col sm="12" md="12" class="text-center">
                    <twitter-button
                        v-bind:isBlank="false"
                        btnText="Follow us on Twitter"
                    />
                    <telegram-button
                        v-bind:isBlank="false"
                        btnText="Join Us on Telegram"
                    />
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col class="text-center">
                    <p>Copyright @ Kittycaketoken 2022.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
#footer {
    background: linear-gradient(
        179.75deg,
        #366ead 0.25%,
        rgba(39, 39, 39, 0.939039) 78.11%
    );
    background-blend-mode: darken;
}
.card-features {
    padding: 24px;
    gap: 12px;
    transition: 0.5s ease-out;
    background: rgba(255, 255, 255) !important;
    box-shadow: 15px -15px 0px #f64d95;
    border-radius: 20px !important;
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
.share-button {
    border-radius: 4px !important;
}
</style>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import TelegramButton from "vue-share-buttons/src/components/TelegramButton";

export default {
    data: () => ({}),
    components: {
        TwitterButton,
        TelegramButton,
    },
    computed: {
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 100;
                case "sm":
                    return 100;
                case "md":
                    return 60;
                case "lg":
                    return 60;
                case "xl":
                    return 60;
            }
        },
        leftCardAlign() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "mx-auto";
                case "sm":
                    return "mx-auto";
                case "md":
                    return "ml-auto";
                case "lg":
                    return "ml-auto";
                case "xl":
                    return "ml-auto";
            }
        },
        rightCardAlign() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "mx-auto";
                case "sm":
                    return "mx-auto";
                case "md":
                    return "mr-auto";
                case "lg":
                    return "mr-auto";
                case "xl":
                    return "mr-auto";
            }
        },
    },
};
</script>
