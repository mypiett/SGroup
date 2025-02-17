<script setup>
import { ref } from 'vue';

const searchText = ref('');
</script>

<template>
    <div>
        <div class="main-header">
            <div class="left-header">
                <a class="img-container" href="https://viblo.asia/newest">
                    <img class="img-logo" src="https://viblo.asia/logo_full.svg" alt="Viblo-logo">
                </a>
                <div class="list-menu">
                    <a class="text-header" href="#SDfdsfs">Bài Viết</a>
                    <a class="text-header" href="#SDfdsfs">Hỏi Đáp</a>
                    <a class="text-header" href="#SDfdsfs">Thảo Luận</a>
                </div>
            </div>
            <div class="right-header">
                <div class="search-border">
                    <input class="search-box" type="text" v-model="searchText" placeholder="Tìm kiếm trên Viblo" />
                    <div class="search-icon">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.main-header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between; 
    align-items: center; 
    background-color: white;
    padding: 5px 20px; 
    z-index:1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-header {
    display: flex;
    width: 49%;
    align-items: center;
    justify-content: center;
    padding:10px 15px;
    gap: 50px;
}

.img-container{
    width: 70px; 
    height: 30px;
    background-color: white;
}
.img-container:hover{
    background-color: white;
}

.img-logo{
    width: 100%; 
    height: 100%;
    background-color: white;
    padding: 0;
    margin:0;
}

.img-logo:hover{
    background-color: white;
}

.list-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #9B9B9B;
    gap: 40px;
}

.text-header{
    font-size: 14px;
    font-weight: 700;
    color: #9B9B9B;
}

.text-header:hover{
    color:#000000;
    background-color: white;
}

.right-header {
    display: flex;
    width: 49%;
    position: relative;
    left:-50px;
    align-items: center;
}

.search-border{
    max-width: 300px;
    width: 100%;
    display:flex;
    /* margin-bottom: 50px; */
}

.search-box{
    width: 100%;
    padding: 10.4px 69px 10.4px 24px;
    border:none;
    border-radius: 3px 0 0 3px;
    outline: 1px solid #00000036;
    box-shadow: #64646f33 0 7px 29px;
    font-size: 14px;
}

.search-icon{
    background-color: #5488C7;
    height:40px;
    color:white;
    aspect-ratio: 1/1;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 3px 3px 0;
    outline: 1px solid #00000036;
}
</style>
