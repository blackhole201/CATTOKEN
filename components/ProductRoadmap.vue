<template>
    <v-container id="roadmap">
        <h1
            class="display-3 text-center white--text font-weight-bold" style="margin: 90px 0"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
        >
            Product Roadmap
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
                        <v-btn text color="white" class="next-slide"
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
                { dateLabel: "January 2022", title: "Gathering Information" },
                { dateLabel: "February 2022", title: "Planning" },
                { dateLabel: "March 2017", title: "Design" },
                {
                    dateLabel: "April 2017",
                    title: "Content Writing",
                },
                { dateLabel: "May 2017", title: "Coding" },
                { dateLabel: "June 2017", title: "Testing Review" },
                { dateLabel: "July 2017", title: "Maintenance" },
                { dateLabel: "July 2017", title: "Maintenance" },
                { dateLabel: "July 2017", title: "Maintenance" },
                { dateLabel: "July 2017", title: "Maintenance" },
            ],
        };
    },
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            slidesPerView: 4,
            grabCursor: true,
            navigation: {
                nextEl: ".next-slide",
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
            if (event.activeIndex == 1) {
                event.allowSlideNext = false;
            }
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
    width: 200px;
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
    padding: 0px 40px;
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
.swiper-slide:nth-child(2n) {
    width: 40%;
}
.swiper-slide:nth-child(3n) {
    width: 20%;
}
</style>