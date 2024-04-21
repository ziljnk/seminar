<template>
<DefaultLayout>
    <section class="product-information">
        <div class="image-group">
            <img id="main-image" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/big-image.png?alt=media&token=32245838-20d7-41d0-bcb9-13a1cffaba93" alt="main product"/>

            <div class="sub-images">
                <img class="sub-image" alt="sub-1" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/image-1.png?alt=media&token=64a747ad-70b4-4090-94c2-5625e241a018"/>
                <img class="sub-image" alt="sub-2" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/image-2.png?alt=media&token=2d92577d-0bc9-4151-a2b7-0a124358d2ed"/>
                <img class="sub-image" alt="sub-3" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/image-3.png?alt=media&token=53eb26c8-92e1-40ec-8e31-b4510c6660e8"/>
            </div>
        </div>

        <div class="text-group">
            <div class="title-section">
                <div class="title-group">
                    <h1 style="font-size: 40px;">Denim Jacket</h1>
                    <p style="font-size: 30px;">$500</p>
                </div>

                <HeartIconSolid v-if="isFavorite" class="icon cursor-pointer" @click="toggleFavorite"/>
                <HeartIcon v-else class="icon cursor-pointer" @click="toggleFavorite"/>
            </div>

            <div class="size-section">
                <div class="size">
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
                <p>{{ "Long-sleeved, crew-neck sweatshirt. Regular fit.\nMade of black jersey. Decorated with a canvas patch featuring the FF Eclissi motif on the chest in shades of brown and black with a gradient effect. Made in Italy\nComposition: 100% cotton, buttons: 100% motherofpearl\nFit: Regular\nSize worn: 48 IT. The model is 187 cm tall\nProduct Code: FY0178AQJ9F0QA1" }}</p>
            </div>
        </div>
    </section>

    <CommunityInspiration/>
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
</style>

<script setup>
import DefaultLayout from '../layouts/Default.vue';
import CommunityInspiration from '../components/CommunityInspiration.vue';
import { HeartIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid';
import { ref, onMounted } from 'vue';

let isFavorite = ref(false);

function toggleFavorite() {
      isFavorite.value = !isFavorite.value; 
}

onMounted(() => {
    document.title = "LOUIS VUITTON | Product Detail";
})
</script>