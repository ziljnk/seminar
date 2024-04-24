<template>
<nav>
    <img alt="community logo" src="../assets/community-logo.webp"/>
    <RouterLink to="/community" class="cursor-pointer rounded-button home">Home</RouterLink>
    <RouterLink to="/community/add-outfit" class="cursor-pointer rounded-button create">Create</RouterLink>
    <input placeholder="Search..."/>
    <BellIcon class="icon"/>
    <PaperAirplaneIcon class="icon"/>
    <UserCircleIcon class="icon"/>
</nav>
</template>
<script setup>
import { BellIcon, PaperAirplaneIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
</script>
<style scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    gap: 16px;
    padding-inline: 50px;
}

nav img {
    width: 50px;
    height: 50px;
}

nav input {
    flex-grow: 1;
    height: 34px;
    border-radius: 20px;
    border: none;
    padding: 0 20px;
    outline: none;
    background-color: #f8f8f8;
}

.rounded-button {
    padding: 8px 20px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    text-decoration: none;
    font-size: 12px;
}

.rounded-button.home {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
}

.rounded-button.home:hover {
    background-color: #fff;
    color: #000;
}

.rounded-button.create {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
}

.rounded-button.create:hover {
    background-color: #000;
    color: #fff;
}

.icon {
    padding: 8px;
    border-radius: 50%;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
}

.icon:hover {
    cursor: pointer;
    background-color: #d9d9d9;
}
</style>