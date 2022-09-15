<template>
  <div class="RefAndReactive">
    <h1>RefAndReactive</h1>
    <div>
      <button @click="increaseRef">Button Ref</button>
      {{ countRef }}
    </div>
    <div>
      <button @click="increaseReactive">Button Reactive</button>
      {{ countReactive.index }}
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "RefAndReactive",
  setup() {
    const countRef = ref(0);
    const countReactive = reactive({ index: 0 });
    const increaseRef = () => {
      countRef.value++;
      console.log("countRef", countRef);
      console.log("countRef.value", countRef.value);
    };
    const increaseReactive = () => {
      countReactive.index++;
      console.log("countReactive", countReactive);
      console.log("countReactive.index", countReactive.index);
    };

    return {
      countRef,
      countReactive,
      increaseRef,
      increaseReactive,
    };
  },
};
</script>


