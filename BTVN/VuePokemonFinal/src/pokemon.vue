<script setup>
import {ref} from 'vue';
const props = defineProps([ 'data' ]);

</script>
<template>
    <RouterLink :to="`/detail/${props.data.name}/${props.data.id}`" class = "card-box">
        <p class="id">#{{ props.data.id }}</p>
        <img class="IMG-pokemon" :src="props.data.sprites.front_default" :alt=" props.data.name " height="100" width = "100">
        <p class="Name-pokemon">{{ props.data.name }}</p>
        <div class = "List-Types">
            <p :class="`general ${item.type.name}`" v-for="(item, index) in props.data.types" :key=index>
                {{ item.type.name }}
            </p>
        </div>
    </RouterLink>
</template>
<style scoped>
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
.card-box:hover{
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.id {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size:15px;
    color: #2C3E50;
    margin:0;
    margin-top: 5px;
}

.IMG-pokemon {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 0;
    margin-top: 0;
    width: 179.91px;
    height: auto;
    object-fit: contain;
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

.List-Types {
    font-size: 15px;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.general {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 13px;
    font-weight: bold;
    padding: 3px 4px;
    border-radius: 5px;
    color: #000000;
    background-color: #6360F0;
    text-transform: capitalize;
}

.general.fire {
    background-color: #FF421C;
}

.general.water {
    background-color: #6360F0;
}

.general.grass {
    background-color: #78CD54;
}

.general.electric {
    background-color: #F7D02C;
}

.general.ice {
    background-color: #96D9D6;
}

.general.fighting {
    background-color: #C22E28;
}

.general.poison {
    background-color: #A33EA1;
}

.general.ground {
    background-color: #E2BF65;
}

.general.flying {
    background-color: #A98FF3;
}

.general.psychic {
    background-color: #F95587;
}

.general.bug {
    background-color: #A6B91A;
}

.general.rock {
    background-color: #B6A136;
}

.general.ghost {
    background-color: #735797;
}

.general.dark {
    background-color: #705746;
}

.general.dragon {
    background-color: #6F35FC;
}

.general.steel {
    background-color: #B7B7CE;
}

.general.fairy {
    background-color: #D685AD;
}

.general.normal{
    background-color: #A8A77A;
}
</style>