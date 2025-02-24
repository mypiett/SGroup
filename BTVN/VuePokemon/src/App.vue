<script setup>
import {ref} from 'vue';
import { onMounted } from 'vue';
import { computed } from 'vue';
import pokemon from './pokemon.vue'
import headerPokemon from './headerPokemon.vue';
const dataList = ref([]);
const SearchName = ref('');
async function fetchData() {
    const  res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36')
    const { results } = await res.json();
    const pokemonPromise = results.map(async (el) => {
      const response = await fetch(el.url);
      return response.json();
    });
    dataList.value = await Promise.all(pokemonPromise);
}
onMounted(() =>{
    fetchData()
})

const filteredList = computed(() => {
    return dataList.value.filter(pokemon =>
        pokemon.name.toLowerCase().includes(SearchName.value.toLowerCase())
    );
});
</script>


<template>
  <div>
    <headerPokemon @Update-search="SearchName = $event"/>
    <p v-if="filteredList.length==0" class="no-result">No pokemon matched with "<span>{{ SearchName }}</span>"</p>
  </div>
  <div class="pokemon-container">
    <div class = "container">
        <pokemon v-for="item in filteredList" :key="item.id" :data="item" />
    </div>
  </div>
</template>


<style scoped>
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
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.no-result{
    margin-left: 9.5%;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 24px;
    color:#2C3E50;
}

.no-result span{
    font-weight: 700;
}
</style>