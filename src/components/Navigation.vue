<template>
    <nav>
        <Bars3Icon class="icon"/>
        <MagnifyingGlassIcon class="icon" @click="isOpened = true"/>
        <a href="/">LOUIS VUITTON</a>
        <UserIcon class="icon" />

        <VueSidePanel
            v-model="isOpened"
            lock-scroll
            height="71px"
            side="top"
            hide-close-btn
        >
            <div class="search-wrapper">
                <input class="search-input" placeholder="🔍 Search a product..."/>
            </div>
        </VueSidePanel>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 50px;
    background-color: white;
    box-shadow: inset 0 -1px 0 0 #e1e1e1;
    z-index: 9999;
}

.icon {
    width: 24px;
    height: 24px;
    margin-inline: 10px;
    cursor: pointer;
}

a {
    flex-grow: 1;
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    margin-block: 0.83em;
    font-weight: bold;
}

.search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-inline: 300px;
}

.search-input {
    border: none;
    background-color: #f8f8f8;
    line-height: 1.3;
    padding: 12px;
    border-radius: .25rem;
    box-shadow: none;
    font-weight: 400;
    font-size: 1rem;
    color: #000;
    outline: none;
    width: 100%;
}
</style>

<script setup>
import { Bars3Icon, MagnifyingGlassIcon, UserIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isOpened = ref(false);
</script>