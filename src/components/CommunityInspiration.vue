<template>
    <section>
        <h1>Community Inspiration</h1>
        <p>Look from out Outfit Community</p>

        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(outfit, index) in outfitData" :key="index">
                    <InspirationItem :imageURL="outfit"/>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding-inline: 50px;
    padding-bottom: 500px;
}

.outfit-group {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    justify-content: flex-start;
    align-items: center;
}

.mySwiper {
    width: 100%;
}
</style>

<script setup>
import InspirationItem from "../components/InspirationItem.vue"
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ref, onMounted } from 'vue'

const props = defineProps({
    outfitData: Array
})

const swiperInstance = ref(null);

function calculateSlidesPerView() {
    const containerWidth = window.innerWidth;
    const slidesPerView = Math.floor(containerWidth / 350); // Change 300 to your desired width per slide

    return slidesPerView;
}

onMounted(() => {
    swiperInstance.value = new Swiper('.mySwiper', {
        slidesPerView: calculateSlidesPerView(),
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true, 
        loopAdditionalSlides: 1, 
        loopedSlides: 5,
    });
});
</script>