<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("Route params:", route.params); // Kiểm tra dữ liệu có đúng không

const productId = route.params.id;    
const productName = route.params.name;
</script>

<template>
    <div>
        <h1>Chi tiết sản phẩm</h1>
        <p>ID sản phẩm: {{ productId }}</p>
        <p>Tên sản phẩm: {{ productName }}</p>
    </div>
</template>
