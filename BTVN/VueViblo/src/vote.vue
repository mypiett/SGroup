<script setup>
    import { reactive,ref } from 'vue';
    const count = ref(0);
    function Increase(){
        count.value++;
    }
    function Decrease(){
        count.value--;
    }
</script>

<template>
    <div>
        <div class="vote-background">
            <div class="vote-container">
                <div class="triangle-Inc" @click="Increase">
                    <div class="inform">Upvote</div>
                </div>
                {{ count }}
                <div class="triangle-Dec" @click="Decrease">
                    <div class="inform">Downvote</div>
                </div>
                <div class="big-circle">
                    <font-awesome-icon :icon="['fas', 'bookmark']" /> 
                </div>
                <div class="big-circle">
                    A
                </div>
                <div style="margin-top: 20px;" class="small-circle">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div style="margin-top: 10px;" class="small-circle">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body{
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 24px;
}
.vote-background{
    position: sticky;
    top:100px;
    margin-top: 50px;
    width:5vw;
}
.vote-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inform{
    font-size: 15px;
    display:none;
    position: absolute;
    background-color: #333333;
    padding:5px 10px;
    border-radius: 3px;
    color:white;
    margin-left: 20px;
    /* top:50%; */
    /* right:10px; */
}
.triangle-Inc {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 15px solid #9B9B9B; 
  border-radius: 2px;
  cursor: pointer;
}
.triangle-Inc:hover{
    border-bottom-color: #5b5b5b;
}
.triangle-Inc:hover .inform{
    display:block;
}

.triangle-Dec {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 15px solid #9B9B9B; 
  border-radius: 2px;
  cursor: pointer;
}
.triangle-Dec:hover{
    border-top-color: #5b5b5b;
}
.triangle-Dec:hover .inform{
    display:block;
}
.big-circle {
  margin-top:30px;
  width: 40px;
  height: 40px;
  border: 2px solid #9B9B9B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color:#9B9B9B;
  text-align: center;
}

.small-circle {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid #9B9B9B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  color: #9B9B9B;
  text-align: center;
}


</style>