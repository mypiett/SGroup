<script setup>
import {ref} from 'vue';
const props = defineProps([ 'data' ]);

</script>
<template>
    <a class = "card-box">
        <p>#{{ props.data.id }}</p>
        <img :src="props.data.sprites.front_default" :alt=" props.data.name " height="100" width = "100">
        <p class="Name-pokemon">{{ props.data.name }}</p>
        <div class = "types-box">
            <p v-for="(item, index) in props.data.types" :key=index>
                {{ item.type.name }}
            </p>
        </div>
    </a>
</template>
<style scoped>
/* .card-box{
    width: 180px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */
.card-box {
    width:189.91px;
    border: 1px solid transparent;
    border-radius: 10px;
    padding-bottom: 15px;
    padding-left: 0px;
    padding-right: 0px;
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}
.Name-pokemon {
    font-size: 17.55px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin:0;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 5px;
    color: #000000;
}
.types-box{
    display:flex;
    gap: 10px;
}
.types-box p{
    border: 1px solid black;
    padding: 1px 2px;
}
</style>