<template>
    <div>
        <section class="top"></section>
        <section class="pinparent">
            <div class="scene1 position-relative">
                <div class="video">
                    <img
                        src="https://images.unsplash.com/photo-1602517526565-1213eff53df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                        alt=""
                        style="w-100 h-100 fit-cover"
                    />
                </div>
                <div class="text-container text-1">
                    <div class="text-inner" tabindex="0">
                        <h2>Here is a first heading</h2>
                        <p>Here is a paragraph element.</p>
                    </div>
                    <div class="bar"></div>
                </div>
            </div>
        </section>
        <section style="height: 10000px"></section>
    </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    mounted() {
        this.$gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".scene1",
            start: "top top",
            pin: ".scene1 .video",
            end: "bottom top",
            pinSpacing: false,
            markers: true,
        });

        let tl = this.$gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".text-1",
                    start: "center center",
                    pin: true,
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                },
            })
            .fromTo(
                ".text-1 .text-inner h2",
                {
                    opacity: 0,
                    y: 50,
                },
                { opacity: 1, y: 0, duration: 1 },
                "<"
            )
            .fromTo(
                ".bar",
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 2,
                },
                ">"
            )
            .fromTo(
                ".text-1 .text-inner p",
                {
                    opacity: 0,
                    y: 10,
                },
                { opacity: 1, y: 0, duration: 1 },
                "<1"
            )
            .to({}, { duration: 1 }, ">");
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
}
section.top {
    height: 200px;
    background: pink;
}

.text-container {
    padding: 5vw;
}

.text-inner p {
    margin-bottom: 2vw;
}

.bar {
    width: 80%;
    height: 10px;
    margin: auto;
    background: white;
}

.w-100 {
    width: 100%;
}

.h-100 {
    height: 100%;
}

.fit-cover {
    object-fit: cover;
}

.position-relative {
    position: relative;
}

.scene1 .video {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
}

.bar {
    transform-origin: left;
}

.text-1 {
    padding: 40vw 0;
}
</style>