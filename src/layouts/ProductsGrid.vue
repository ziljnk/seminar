<template>
<section>
    <slot/>
</section>
</template>

<script setup></script>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    width: 100%;
    gap: 10px;
    overflow-x: hidden;
}
</style>  