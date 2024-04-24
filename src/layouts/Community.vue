<template>
    <div>
        <CommunityNavigation/>
        <main>
            <slot />
        </main>
    </div>
</template> 

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        padding-bottom: 500px;
    }

    main {
        padding-inline: 50px;
        padding-top: 50px;
    }
</style>

<script setup>
import CommunityNavigation from "../components/CommunityNavigation.vue"
</script>
    