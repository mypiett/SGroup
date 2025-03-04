<script setup>
import {ref} from 'vue';
import { onMounted } from 'vue';
import { computed } from 'vue';
import {RouterLink, RouterView, useRoute} from 'vue-router';
import pokemon from '../pokemon.vue'
import headerPokemon from '../headerPokemon.vue';
const router=useRoute();
const allPokemonList= ref([])
const dataList = ref([]);
const SearchName = ref('');
const limit=ref(36);
const isLoading = computed(() => dataList.value.length === 0);
async function fetchAllData() {
    const  res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=998`)
    const { results } = await res.json();
    const pokemonPromise = results.map(async (el) => {
      const response = await fetch(el.url);
      return response.json();
    });
    allPokemonList.value = await Promise.all(pokemonPromise);
    dataList.value=allPokemonList.value.slice(0,limit.value);
}

onMounted(() =>{
    fetchAllData();
})

const filteredList = computed(() => {
    if (SearchName.value){
        return allPokemonList.value
        .filter(pokemon =>
            pokemon.name.toLowerCase().includes(SearchName.value.toLowerCase()))
        .slice(0,36);
    }
    return dataList.value;
});

const loadMore = async()=>{
    limit.value *=2;
    dataList.value = allPokemonList.value.slice(0, limit.value);
}
</script>


<template>
    <div>
        <div>
            <headerPokemon @Update-search="SearchName = $event"/>
        </div>
        <div class="all">
            <div v-if="isLoading" class="loading">Getting data from PokéDev...</div>
            <div v-else class="all">
                <div class="pokemon-container">
                    <p v-if="filteredList.length==0" class="no-result">No pokemon matched with "<span>{{ SearchName }}</span>"</p>
                    <div class = "container">
                        <pokemon v-for="item in filteredList" :key="item.id" :data="item" />
                    </div>
                </div>
                <button v-if="!SearchName" class="LoadMore"  @click="loadMore">Load More</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.all{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.pokemon-container {
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left:0;
    padding-right: 0;
    margin-left: 9.5%;
    margin-right: 7%;
    gap:10px;
}
.container {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
}
.no-result{
    width:500px;
    position: relative;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 24px;
    color:#2C3E50;
}

.no-result span{
    font-weight: 700;
}

.LoadMore{
    position:relative;
    cursor:pointer;
    color:#FFFFFF;
    font-size: 16px;
    font-family: Arial;
    background-color: #FF4D4F;
    padding: 20px 25px;
    border:none;
    border-radius: 10px;
    margin-top: 60px;
    margin-bottom: 60px;
}

.LoadMore:hover{
    background-color: #ff7875;
}

.loading{
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 30px;
    color:#2C3E50;
}
</style>

