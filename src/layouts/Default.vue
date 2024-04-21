<template>
    <div>
        <Navigation/>
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
</style>

<script setup>
import Navigation from "../components/Navigation.vue"
</script>
    