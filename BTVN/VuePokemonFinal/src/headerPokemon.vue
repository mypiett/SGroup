<script setup>
import { ref } from 'vue';

const SearchName = ref(''); 
const emit = defineEmits(['Update-search']);
const UpdateSearch = ()=>{
    emit('Update-search',SearchName.value);
}
</script>

<template>
    <div class="header">
        <div class="title">
            <p>Pokemon API</p>
        </div>
        <div class="search-border">
            <input v-model="SearchName" @input="UpdateSearch" class="search-box" type="text" placeholder="Search some Pokemon..." style ="width: 100%;">
        </div>
    </div>
</template>

<style scoped>
.header{
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title{
    font-size:37.5px;
    font-weight: 400;
    color:#2C3E50;
    display:flex;
    justify-content: center;
    align-items: center;
}

.search-border{
    max-width: 500px;
    width: 100%;
    margin-bottom: 50px;
}

.search-box{
    width: 100%;
    padding: 20px;
    border:none;
    border-radius: 30px;
    outline: 1px solid #00000036;
    box-shadow: #64646f33 0 7px 29px;
    font-size: 16px;
}
</style>