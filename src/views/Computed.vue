<template>
  <h1>Computed</h1>
  <div>
    <label for="">First Name &nbsp;</label>
    <input type="text" v-model="firstName" />
  </div>
  <div>
    <label for="">Last Name &nbsp;</label>
    <input type="text" v-model="lastName" />
  </div>
  <div>
    <label for="">Name &nbsp;</label>
    <span> {{ name }}</span>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const name = computed(() => firstName.value + " " + lastName.value);

    onMounted(() => {
      console.log("onMounted");
    });

    return {
      firstName,
      lastName,
      name,
    };
  },
};
</script>
