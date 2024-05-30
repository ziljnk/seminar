<template>
<DefaultLayout>
    <section class="product-information">
        <div class="image-group">
            <img id="main-image" :src="productInformation.images[0]" alt="main product"/>

            <div class="sub-images">
                <img v-for="(image, index) in subImages" :key="index" class="sub-image" alt="sub-1" :src="image"/>
            </div>
        </div>

        <div class="text-group">
            <div class="title-section">
                <div class="title-group">
                    <h1 style="font-size: 40px;">{{ productInformation.name }}</h1>
                    <p style="font-size: 30px;">${{productInformation.price}}</p>
                </div>

                <HeartIconSolid v-if="isFavorite" class="icon cursor-pointer" @click="toggleFavorite"/>
                <HeartIcon v-else class="icon cursor-pointer" @click="toggleFavorite"/>
            </div>

            <div class="size-section">
                <div class="size cursor-pointer" @click="isOpened = true">
                    <p>Size</p>
                    <div class="size-number">
                        <p style="font-weight: bold;">48</p>
                        <ChevronRightIcon class="icon"/>
                    </div>
                </div>

                <button class="add-to-cart-button">Add to cart</button>
            </div>

            <div class="detail-section">
                <h1>Product Detail</h1>
                <p>{{ productInformation.description }}</p>
            </div>
        </div>
    </section>

    <CommunityInspiration :outfitData="productInformation.inspireImages"/>

    <VueSidePanel
		v-model="isOpened"
		lock-scroll
		width="50%"
    >
        <section class="side-panel-container">
            <div class="title-wrapper">
                <h1>Size</h1>
            </div>

            <div class="size-wrapper">
                <p class="size-bubble cursor-pointer" v-for="(size, index) in 15" :key="index">
                    {{ size + 35 }}
                </p>
            </div>
        </section>
    </VueSidePanel>
</DefaultLayout>
</template>

<style scoped>
.product-information {
    width: 100%;
    display: flex;
}

.image-group {
    width: 50%;
    padding-left: 50px;
}

.text-group {
    padding-top: 100px;
    width: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: flex-start;
    align-items: center;
    padding-right: 50px;
}

#main-image {
    width: 100%;
    max-width: 500px;
}

.sub-images {
    display: flex;
    gap: 16px;
    width: 100%;
}

.sub-image {
    width: calc((100% - 32px) / 3);
    outline: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
}

.sub-image:hover {
    outline: 1px solid darkgray;
}

.title-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
}

h1, p {
    margin: 0;
    white-space: pre-line;
}

.size-section {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.size {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.size-number {
    display: flex;
    align-items: center;
    gap: 8px;
}

.add-to-cart-button {
    width: 100%;
    padding: 8px;
    border-radius: 20px;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    outline: 1px solid black;
    cursor: pointer;
}

.add-to-cart-button:hover {
    background-color: #fff;
    color: black;
    outline: 1px solid black;
}

.detail-section {
    width: 500px;
}

.detail-section p {
    letter-spacing: 1px;
}

.side-panel-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding: 24px;
}

.size-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem 1rem;
}

.size-bubble {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #b4b4b4;
    line-height: 50px;
    text-align: center;
    color: #b4b4b4;
    transition: all .3s cubic-bezier(.39,.575,.565,1), box-shadow .3s cubic-bezier(.39,.575,.565,1);
}

.size-bubble:hover {
    border: 1px solid black;
    color: black;
}
</style>

<script setup>
import DefaultLayout from '../layouts/Default.vue';
import CommunityInspiration from '../components/CommunityInspiration.vue';
import { HeartIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid';
import { ref, onBeforeMount } from 'vue';

let isFavorite = ref(false);
let isOpened = ref(false);
let productInformation = ref(null)
let subImages = ref(null)

function toggleFavorite() {
      isFavorite.value = !isFavorite.value; 
}

onBeforeMount(async () => {
    document.title = "LOUIS VUITTON | Product Detail";
    const productId = await window.location.pathname.split("/")[1];
    console.log("productId", productId)
    fetch(`http://localhost:2000/api/v1/products/${productId}`)
    .then(response => response.json())
    .then(data => {
        productInformation.value = data.product;
        subImages.value = productInformation.value.images.shift()
        console.log("productInformation", productInformation.value)
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
</script>