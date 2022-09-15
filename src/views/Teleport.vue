<template>
  <header>Header</header>
  <!-- origin -->
  <button @click="toggleOrigin">open origin</button>
  <div v-if="isOpenOrigin" class="modal">
    <button @click="toggleOrigin">Close</button>
  </div>

  <button @click="toggleTeleport">open Teleport</button>
  <teleport to="#app">
    <div v-if="isOpenTeleport" class="modal">
      <button @click="toggleTeleport">Close</button>
    </div>
  </teleport>

  <footer>Footer</footer>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const isOpenOrigin = ref(false);
const isOpenTeleport = ref(false);
const toggleOrigin = () => (isOpenOrigin.value = !isOpenOrigin.value);
const toggleTeleport = () => (isOpenTeleport.value = !isOpenTeleport.value);
</script>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background: blue;
  z-index: 100;
}
</style>