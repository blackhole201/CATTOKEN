<template>
    <v-container id="roadmap" >
        <h1
            class="display-3 text-center white--text font-weight-bold"
            style="margin: 90px 0"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
        >
            Roadmap
        </h1>
        <div class="row">
            <div
                class="col-md-12"
                data-aos="flip-down"
                data-aos-duration="500"
                data-aos-delay="800"
            >
                <vue-horizontal-timeline :items="items" />
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        const items = [
            {
                title: "September 2022",
                content: "V2 Presale launch",
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
            }
        ];

        return { items };
    },
};
</script>

<style lang="scss">
.vue-horizontal-timeline {
    background: transparent !important;
    box-shadow: unset !important;
    padding: auto;
}
</style>