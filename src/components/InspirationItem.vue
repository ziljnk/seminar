<template>
    <img class="sample-outfit" alt="sample-outfit" :src="imageURL"/>

    <section class="information-section">
        <div class="left-side">
            <img class="user-avatar" alt="user-avatar" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/jayden-smith.webp?alt=media&token=2daa518e-47a3-4a56-bf4c-f0d143e5d738"/>
        </div>

        <div class="right-side">
            <h3 class="user-name">Jayden Smith - <span class="bold-text">160cm</span></h3>
            <p class="user-size">Size: 48</p>
        </div>
    </section>
</template>

<style scoped>
.sample-outfit {
    width: 250px;
    height: 375px;
    border-radius: 8px;
    object-fit: cover;
}

.information-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    width: 100%;
}

.left-side {
    width: 50px;
}

.user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover; 
}

.right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    width: 100%;
}

.user-name {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    width: 100%;
}

.user-size {
    font-size: 14px;
    margin: 0;
}
</style>

<script setup>
defineProps({
    imageURL: String
})
</script>