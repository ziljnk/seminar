<template>
    <CommunityLayout>
        <div class="image-grid">
            <section class="column">
                <img v-for="image in column1" :src="image" alt="Community Outfit">
            </section>

            <section class="column">
                <img v-for="image in column2" :src="image" alt="Community Outfit">
            </section>

            <section class="column">
                <img v-for="image in column3" :src="image" alt="Community Outfit">
            </section>

            <section class="column">
                <img v-for="image in column4" :src="image" alt="Community Outfit">
            </section>
        </div>
    </CommunityLayout>
</template>

<script setup>
import CommunityLayout from "../../layouts/Community.vue"
import { ref } from "vue"

const column1 = ref([
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-1.jpeg?alt=media&token=e647c9e4-8f7b-455a-84b5-456615278ac2",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-2.jpeg?alt=media&token=4cb2a6bb-5be1-49ea-8f47-6deb5c478c85",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-3.jpeg?alt=media&token=36feec9f-57eb-47e9-b255-ead7676370e8",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-6.jpeg?alt=media&token=c9659ba3-a151-4f0c-ba84-831a2e0b8295",
])

const column2 = ref([
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-4.jpeg?alt=media&token=b60a2373-6741-416d-a319-6945a0c1d0b6",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-5.jpeg?alt=media&token=6890dc34-c496-4e80-a57a-5a205418241e",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-1.jpeg?alt=media&token=e647c9e4-8f7b-455a-84b5-456615278ac2",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-2.jpeg?alt=media&token=4cb2a6bb-5be1-49ea-8f47-6deb5c478c85",
])

const column3 = ref([
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-6.jpeg?alt=media&token=c9659ba3-a151-4f0c-ba84-831a2e0b8295",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-7.jpeg?alt=media&token=b7178067-3faa-4b34-a79c-ce2e2764cf40",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-8.jpeg?alt=media&token=baaa02e0-d8cc-44f7-8519-1f089448646a",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-4.jpeg?alt=media&token=b60a2373-6741-416d-a319-6945a0c1d0b6",
])

const column4 = ref([
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-9.jpeg?alt=media&token=f1a1d10d-f91f-449e-8fb8-c690ddb05b02",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-10.jpeg?alt=media&token=0583dd01-ad7a-4999-99d7-ac5fcb625874",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-7.jpeg?alt=media&token=b7178067-3faa-4b34-a79c-ce2e2764cf40",
    "https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/community-8.jpeg?alt=media&token=baaa02e0-d8cc-44f7-8519-1f089448646a",
])
</script>
<style scoped>
.image-grid {
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.column img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>