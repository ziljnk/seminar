<template>
    <nav>
        <Bars3Icon class="icon"/>
        <MagnifyingGlassIcon class="icon"/>
        <h1>LOUIS VUITTON</h1>
        <UserIcon class="icon"/>
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

h1 {
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
}
</style>

<script setup>
import { Bars3Icon, MagnifyingGlassIcon, UserIcon } from '@heroicons/vue/24/outline';
</script>