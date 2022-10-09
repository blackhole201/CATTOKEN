<template>
    <section id="roadmap">
        <v-container id="roadmap-container" class="roadmap" fluid>
            <h1
                class="
                    display-3
                    text-center
                    white--text
                    font-weight-bold
                    roadmap-title
                    text-h3
                "
                style="margin: 90px 0"
            >
                Roadmap
            </h1>
            <v-row>
                <v-col>
                    <vue-horizontal-timeline :items="items" class="timeline" />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        const items = [
            {
                title: "Ocotber 2022",
                content: "V2 Presale launch",
                stepCssClass: "is-active",
                boxCssClass: "is-box-active",
            },
            {
                title: "Ocotber 2022",
                content: "New reward Dashboard launch",
            },
            {
                title: "November 2022",
                content: "Coinmarket cap and Coingeko listing",
            },
            {
                title: "November 2022",
                content: "P2E Game Launch",
            },
            {
                title: "December 2022",
                content: "Setting up for sustainable passive income",
            },
            {
                title: "January 2023",
                content: "First set of NFTs limited",
            },
            {
                title: "Market Cap 5M ",
                content: "Utility development stage 2 ",
            },
            {
                title: "January 2023",
                content: "Online Store",
            },
            { title: "Marcet Cap 10M", content: "Big reward to all loyal holders" },
            {
                title: "Marcet Cap 20M",
                content: "Charity donation and all inclusive trip for 2 lucky holders",
            },
        ];

        return { items };
    },
    mounted() {},
};
</script>

<style lang="scss">
#roadmap {
    background-repeat: no-repeat;
    background: url("../assets/img/background/roadmap-background.webp");
    width: 100%;
    padding-bottom: 8rem;
    z-index: 9999;
}

.is-active::after {
    background: rgb(0, 255, 0) !important;
}

.is-box-active {
    color: red !important;
}

.vue-horizontal-timeline {
    background: transparent !important;
    box-shadow: unset !important;
    padding: auto;

    .timeline {
        ol {
            li {
                &:nth-of-type(odd) {
                    .time {
                        min-height: 200px;
                        color: white !important;
                        border-top-left-radius: 16px !important;
                        border-top-right-radius: 16px !important;
                        border-bottom-right-radius: 16px !important;
                        border-top-right-radius: 16px;
                        padding: 2rem 1rem !important;
                        background: transparent !important;
                        border: 3px solid rgba(249, 117, 34, 1);
                        transition: 0.5s ease-out;
                        backdrop-filter: blur(30px) !important;

                        &::before {
                            border-color: transparent !important;
                        }
                        &:hover {
                            box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
                        }
                    }
                }

                &:nth-of-type(even) {
                    .time {
                        min-height: 200px;
                        color: white !important;
                        border-bottom-left-radius: 16px !important;
                        border-top-right-radius: 16px !important;
                        border-bottom-right-radius: 16px !important;
                        padding: 2rem 1rem !important;
                        background: transparent !important;
                        border: 3px solid rgba(249, 117, 34, 1);
                        backdrop-filter: blur(30px) !important;

                        &::before {
                            border-color: transparent !important;
                        }

                        &:hover {
                            box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
                        }
                    }
                }
            }
        }
    }
}
</style>