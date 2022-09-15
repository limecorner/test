<template>
  <h3>Slot</h3>
  <div class="container">
    <Category title="遊戲">
      <ul>
        <li v-for="(item, index) in categories.games" :key="index">
          {{ item }}
        </li>
      </ul>
    </Category>
    <Category title="食">
      <img
        src="https://ibw.bwnet.com.tw/ac_gallery/2019/10/50e5bba8-a1bd-5410-9f7e-0a5e4bb83b76_620.jpg"
        alt=""
      />
    </Category>
  </div>
</template>

<script setup>
// import { ref } from "@vue/reactivity";
import { reactive } from "@vue/reactivity";
import Category from "./../components/Category.vue";

const obj = {
  games: ["遊戲1", "遊戲2"],
  food: ["食1", "食2"],
};

const categories = reactive(obj);
console.log(categories.games);
console.log(categories.food);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>