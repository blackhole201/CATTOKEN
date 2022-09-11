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
                title: "September 2022",
                content: "V2 Presale launch",
                stepCssClass: 'is-active',
                boxCssClass: 'is-box-active',
            },
            {
                title: "September 2022",
                content: "New reward Dashboard launch",
            },
            {
                title: "October 2022",
                content: "Coinmarket cap and Coingeko listing",
            },
            {
                title: "October 2022",
                content: "P2E Game Launch",
            },
            {
                title: "November 2022",
                content: "Setting up for sustainable passive income",
            },
            {
                title: "Market Cap 1M",
                content: "Watch to Earn development stage 1",
            },
            {
                title: "January 2023",
                content: "First set of NFTs",
            },
            {
                title: "Market Cap 5M ",
                content: "Watch to Earn development stage 2 ",
            },
            {
                title: "Market Cap 2M",
                content: "Charity of a choice giveaway",
            },
            { title: "December 2022", content: "Merchendise shop" },
            {
                title: "Market Cap 10M",
                content: "big bonus to loyal holders",
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
    background: green !important;
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
                        box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
                        border: 3px solid rgba(249, 117, 34, 1);
                        transition: 0.5s ease-out;
                        backdrop-filter: blur(30px) !important;

                        &::before {
                            border-color: transparent !important;
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
                        box-shadow: 12px 4px 44px rgba(249, 117, 34, 1);
                        border: 3px solid rgba(249, 117, 34, 1);
                        backdrop-filter: blur(30px) !important;

                        &::before {
                            border-color: transparent !important;
                        }
                    }
                }
            }
        }
    }
}
</style>