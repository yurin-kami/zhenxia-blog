<template>
    <div class="carousel">
        <div class="slides">
            <img v-for="(slide, index) in slides" :src="slide" :key="index" alt="Slide" />
        </div>
    </div>
</template>

<script>
import ShangriLaFrontia from '../images/Shangri-La Frontia.jpg';
import Buta from '../images/buta.jpg';
import UnluckyUndead from '../images/unluckyundead.jpg';

export default {
    data() {
        return {
            slides: [ShangriLaFrontia, Buta, UnluckyUndead],
            // Add more image URLs as needed
            currentSlideIndex: 0,
            delay: 6000, // 2 seconds delay, adjust as needed
        };
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentSlideIndex];
        },
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                this.showNextSlide();
            }, this.delay);
        },
        showNextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        },
    },
}
</script>

<style scoped>
@keyframes slide {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.carousel {
    display: flex;
    overflow: hidden;
    background-color: rgb(177,163,253);
}

.slides {
    display: flex;
    animation: slide 6s infinite;
    /* adjust duration as needed */
}

img {
    width: 100vh;
    height: 98vh;
}
</style>