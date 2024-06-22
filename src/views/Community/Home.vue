<template>
    <CommunityLayout>
        <div class="image-grid">
            <img @click="handleShowImage(index)" v-for="(item, index) in inspirations" :key="index" alt="outfit" :src="item.image"/>
        </div>
    </CommunityLayout>

    <VueSidePanel
		v-model="isOpened"
		lock-scroll
		width="30%"
        v-if="Object.keys(selectedOutfit).length > 0"
    >
        <section class="outfit-detail">
            <img :src="selectedOutfit.image" :alt="selectedOutfit.name"/>

            <div class="text-content">
                <p class="name">{{ selectedOutfit.name }}</p>
                <p class="height">Height: {{ selectedOutfit.height }}</p>
                <p class="weight">Weight: {{ selectedOutfit.weight }}</p>
                <p class="size">Size: {{ selectedOutfit.size }}</p>
            </div>
        </section>
    </VueSidePanel>
</template>

<script setup>
import CommunityLayout from "../../layouts/Community.vue"
import { ref } from "vue"

let inspirations = ref([])
let isOpened = ref(false)
let selectedOutfit = ref({})

fetch("http://localhost:2000/api/v1/community", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(response => response.json())
.then(data => {
    inspirations.value = data.inspirations;
})

function handleShowImage(index) {
    isOpened.value = true;
    selectedOutfit.value = inspirations.value[index]
}
</script>
<style scoped>
.image-grid {
    gap: 16px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1300px;
}

.image-grid img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    transition: all 0.3s;
    object-fit: cover;
}

.image-grid img:hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transform: scale(1.05);
}

.outfit-detail {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-block: 80px;
    width: 100%;
    height: 100%;
}

.outfit-detail img {
    width: 300px;
    height: auto;
    border-radius: 16px;
    align-self: center;
}

.text-content {
    width: 300px;
}

.text-content .name {
    width: inherit;
    font-weight: 700;
    font-size: 32px;
}
</style>