<script setup>
import DefaultLayout from '../layouts/Default.vue';
import ProductsGrid from '../layouts/ProductsGrid.vue';
import Product from '../components/Product.vue';
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from "vue"

let allProducts = ref([]);

onMounted(() => {
    fetch('http://localhost:2000/api/v1/products')
    .then(response => response.json())
    .then(data => {
        allProducts.value = data.products;
    })
    .catch(error => {
        console.error('Error:', error);
    });

})
</script>

<template>
    <DefaultLayout>
        <img class="banner" src="https://firebasestorage.googleapis.com/v0/b/seminar-d43fa.appspot.com/o/image.png?alt=media&token=f21548c2-e8d6-45d9-901f-696cf88488e0" alt="banner"/>
        <section class="filter-section">
            <p>All</p>
            <button class="filter-button">
                <AdjustmentsHorizontalIcon class="icon"/>
                <p>Filter</p>
            </button>
        </section>

        <ProductsGrid>
            <Product v-for="(product, index) in allProducts" :key="index" :productInformation="product"/>
        </ProductsGrid>
    </DefaultLayout>
</template>

<style scoped>
.banner {
    object-fit: cover;
    width: 100%;
}

.filter-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 50px;
}

.icon {
    width: 20px;
    height: 20px;
}

.filter-button {
    display: flex;
    background-color: white;
    padding-inline: 20px;
    border: 1px solid black;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 30px;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    cursor: pointer;
}

.filter-button:hover {
    background-color: #000;
}

.filter-button:hover p, .filter-button:hover .icon{
    color: #fff;
}
</style>
