<template>
<RouterLink to="/about" class="product">
    <img src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/product.png?alt=media&token=e0007366-5992-478f-84c8-96741c0be327" alt="product"/>

    <div class="product-information">
        <h1>Denim Jacket</h1>
        <p>$500</p>
    </div>
</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.product {
    cursor: pointer;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(-145deg, #ffffff, #f0f0f0);
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