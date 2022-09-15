<template>
  <h2>Hi</h2>
  <div v-for="item in colorList" :key="item.name">
    <input type="radio" v-model="color" :value="item.color" :id="item.name" />
    <label :for="item.name">{{ item.name }} {{ item.color }} </label>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const colorList = [
  { name: "Red", color: "red" },
  { name: "Blue", color: "blue" },
];
const color = ref(colorList[0].color);
</script>

<style scoped>
h2 {
  color: v-bind("color");
}
</style>