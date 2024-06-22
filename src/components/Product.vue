<template>
<a :href="`/${_id}`" class="product">
    <img :src="productInformation.images[0]" alt="product"/>

    <div class="product-information">
        <h1>{{ name }}</h1>
        <p>${{ price }}</p>
    </div>
</a>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    productInformation: Object
})

let { name, price, _id } = props.productInformation
</script>

<style scoped>
.product {
    cursor: pointer;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(-145deg, #ffffff, #f0f0f0);

    text-decoration: none;
}

.product:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: linear-gradient(145deg, #ffffff, #ddd);
}

img {
    width: 100%;
}

.product-information {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
}

p, h1 {
    margin: 0;
}

a {
    text-decoration: none;
    color: #000;
}
</style>  