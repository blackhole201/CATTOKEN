<template>
    <v-container id="roadmap">
        <h1
            class="display-3 text-center white--text font-weight-bold" style="margin: 90px 0"
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
                <div class="swiper-container">
                    <p class="swiper-control">
                        <!-- <v-btn text color="white" class="prev-slide"
                            >Prev</v-btn
                        > -->
                        <v-btn rounded color="primary" ref="nextslide" class="next-slide"
                            >Next</v-btn
                        >
                    </p>
                    <div class="swiper-wrapper timeline">
                        <div
                            class="swiper-slide"
                            v-for="(item, index) in steps"
                            :key="index"
                        >
                            <div class="timestamp">
                                <span class="date">{{ item.dateLabel }}</span>
                            </div>
                            <div class="status">
                                <span>{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import Swiper, { Navigation } from "swiper";

export default {
    data() {
        return {
            steps: [
                { dateLabel: "Sept 2022", title: "V2 Presale launch" },
                { dateLabel: "Sept 2022", title: "New reward Dashboard launch" },
                { dateLabel: "Oct 2022", title: "Coinmarket cap and Coingeko listing" },
                { dateLabel: "Oct 2022", title: "P2E Game launch" },
                { dateLabel: "Nov 2022", title: "Setting up for sustainable passive income",},
                { dateLabel: "Market Cap 1 M", title: "Watch to Earn development stage 1" },
                { dateLabel: "Jan 2023", title: "First set of NFTs" },
                { dateLabel: "Market Cap 5 million ", title: "Watch to Earn development stage 2 " },
                { dateLabel: "Market Cap 2 million", title: "Charity of a choice giveaway" },
                { dateLabel: "December 2022", title: "Merchendise shop" },
                { dateLabel: "Market Cap 10 million", title: "big bonus to loyal holders" },
            ],
        };
    },
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            slidesPerView: 1,
            grabCursor: true,
            navigation: {
                nextEl: this.$el.querySelector('.next-slide'),
                prevEl: ".prev-slide",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: false,
            observer: true,
            observeParents: true,
            parallax: true,
        });
        swiper.on("slideChange", function (event) {
            event.allowSlideNext = true;
        });
    },
};
</script>

<style scoped>
body {
    background: #e8eeff;
}
#app {
    padding: 50px 0;
}
.timeline {
    margin: 50px 0;
    list-style-type: none;
    display: flex;
    padding: 0;
    text-align: center;
}
.timeline li {
    transition: all 200ms ease-in;
}
.timestamp {
    width: 300px;
    margin-bottom: 50px;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    transform: rotate(-30deg);
    color: white;
}
.status {
    padding: 0px 10px;
    display: flex;
    color: #ffffff;
    justify-content: center;
    border-top: 4px solid #fb5c64;
    position: relative;
    font-weight: 200;
    transition: all 200ms ease-in;
}
.status span {
    font-weight: 600;
    padding-top: 20px;
}
.status span:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: #e8eeff;
    border-radius: 25px;
    border: 4px solid #fb5c64;
    position: absolute;
    top: -15px;
    left: 42%;
    transition: all 200ms ease-in;
}
.swiper-control {
    text-align: right;
}
.swiper-container {
    width: 100%;
    height: 250px;
    margin: 50px 0;
    overflow: hidden;
    padding: 0 20px 30px 20px;
}
.swiper-slide {
    width: 200px;
    text-align: center;
    font-size: 18px;
}
</style>