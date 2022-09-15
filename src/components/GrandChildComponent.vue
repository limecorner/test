<template>
  <h2>孫層</h2>
  <p>Message from grandparent: {{ msg }}</p>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const msg = inject("msgkkk");

    return {
      msg,
    };
  },
};
</script>