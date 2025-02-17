<script setup>
  import Myheader from './Myheader.vue';
  import Mybanner from './Mybanner.vue';
  import vote from './vote.vue';
  import post from './post.vue';
  import list from './list.vue';
  import signIn from './signIn.vue';
</script>

<template>
  <div>
    <Myheader />
    <Mybanner />
    <div class="main-background">
      <vote />
      <post />
      <list />
    </div>
    <signIn />
  </div>
</template>

<style scoped>
:global(body){
  overflow-x: hidden;
}

.main-background{
  position: absolute;
  left:170px;
  top:312px;
  width: 100vw;
  display:flex;
  justify-content: flex-start;
  padding: 0;
}
</style>