<script setup>
import { useRoute } from 'vue-router';
import {ref, onMounted,computed} from 'vue';
const route = useRoute();
const pokemonData = ref(null);
const quote = ref(null);
const evolutionList = ref([]); 
const evolutionImg = ref([]);
const pokemonId = route.params.id;    
const pokemonName = route.params.name;
async function fetchDataDetail() {
    const  res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    pokemonData.value = await res.json();
    const speciesRes = await fetch(pokemonData.value.species.url); 
    quote.value = await speciesRes.json(); 
    localStorage.setItem("pokemon", JSON.stringify(pokemonData.value));
    fetchEvolution(quote.value.evolution_chain.url);
}

async function fetchEvolution(evolutionUrl) {
    const res = await fetch(evolutionUrl);
    const evolutionData = await res.json();
    
    let evoChain = [];
    let evoData = evolutionData.chain;

    while (evoData !== undefined && evoData !== null){
        evoChain.push({
            name: evoData.species.name,
            url: `https://pokeapi.co/api/v2/pokemon/${evoData.species.name}`
        });
        evoData = evoData.evolves_to[0];
    }

    evolutionList.value = evoChain;
    evolutionImg.value = await Promise.all(
        evoChain.map(async (evo) => {
            const res = await fetch(evo.url);
            const data = await res.json();
            return { name: evo.name, img: data.sprites.front_default };
        })
    );
}

const savedData = JSON.parse(localStorage.getItem("pokemon"));

const flavorText = computed(() => {
    const flavor = quote.value.flavor_text_entries.find(entry => entry.language.name === "en");
    return flavor.flavor_text.replace(/\n|\f/g, ' ');
});

const statTitle = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  "special-attack": 'SPA',
  "special-defense": 'SPD',
  speed: 'SPD'
};

if (savedData && savedData.id === Number(pokemonId)) {
    pokemonData.value = savedData;
    fetchDataDetail();
} else {
    fetchDataDetail().then(() => fetchEvolution(pokemonId));
}
</script>

<template>
    <div class="wrap">
        <div class="big-container">
        <a href="/" class="back">< Back</a>
        <img :src="pokemonData.sprites.front_default" :alt=" pokemonData.name " height="200" width = "200">
        <div class = "List-Types">
            <p :class="`general ${item.type.name}`" v-for="(item, index) in pokemonData.types" :key=index>
                {{ item.type.name }}
            </p>
        </div>
        <h2 style="text-transform: capitalize;">{{pokemonData.name}}</h2>
        <p class="quote">{{ flavorText }}</p>
        <div class="middle-border">
            <div>
                <h3>Height</h3>
                <p class="grey-border">{{pokemonData.height}}</p>
            </div>
            <div>
                <h3>Weight</h3>
                <p class="grey-border">{{pokemonData.weight}}</p>
            </div>
        </div>
        <h3>Abilities</h3>
        <div class="middle-border">
            <p class="grey-border" v-for="(item,index) in pokemonData.abilities" :key=index>
                {{ item.ability.name }}
            </p>
        </div>
        <h3>Stats</h3>
        <div class="middle-border">
            <div class="stats-border" v-for="(item,index) in pokemonData.stats" :key=index>
                <div v-if="item.stat.name==='speed'">
                    <p :class="`tag-label ${statTitle[item.stat.name]}second`">{{ statTitle[item.stat.name] }}</p>
                </div>
                <div v-else>
                    <p :class="`tag-label ${statTitle[item.stat.name]}`">{{ statTitle[item.stat.name] }}</p>
                </div>
                <p style="margin:0">{{ item.base_stat }}</p>
            </div>
        </div>
        <h3>Evolution</h3>
        <div class="middle-border">
            <div class="evolution" v-for="(evo, index) in evolutionImg" :key="index">
                <p style="text-transform: capitalize;">{{ evo.name }}</p>
                <img :src="evo.img" :alt="evo.name" width="100" height="100">
                <p v-if="index != evolutionImg.length-1">{{ `>` }} </p>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.wrap{
    position: relative;
    top:15px;
    display:flex;
    justify-content: center;
}
.big-container{
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 15px;
    width: 32%;
    text-align: center;
    color:#2C3E50;
}

.grey-border{
    width: 110px;
    text-transform: capitalize;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 10px;
    background-color: #F6F8FC;
    text-align: center;
}

.stats-border{
    width: 20px;
    display:flex;
    flex-direction: column;
    text-transform: capitalize;
    margin: 5px;
    padding: 5px;
    border-radius: 30px;
    background-color: #F6F8FC;
    text-align: center;
    gap:0;
    justify-content: center;
    align-items: center;
    box-shadow: #63636333 0 2px 8px;
}

.middle-border{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10%;
}

.tag-label{
    display: flex;
    margin:0;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    background-color: aqua;
    margin:0;
    padding: 0;
}

.tag-label.HP{
    background-color: #DF2140;
}
.tag-label.ATK{
    background-color: #FF994D;
}
.tag-label.DEF{
    background-color: #EECD3D;
}
.tag-label.SPA{
    background-color: #85DDFF;
}
.tag-label.SPD{
    background-color: #96DA83;
}
.tag-label.SPDsecond{
    background-color: #FB94A8;
}
.back{
    display: block;
    position: fixed;
    top: 5%;
    left: 5%;
    border-radius: 30px;
    padding: 5px 10px;
    box-shadow: #63636333 0 4px 8px;
    z-index: 999;
    color:black;
    text-decoration: none;
}
.evolution{
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 50px;
}
</style>

