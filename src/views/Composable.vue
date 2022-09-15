<template>
  <p v-if="true">Mouse position is at {{ x1 }}, {{ y1 }}</p>
  <p :style="styleObject">Mouse position is at {{ x2 }}, {{ y2 }}</p>
</template>

<script>
import { reactive } from "vue";
import useMouseTracker from "./../composables/useMouseTracker";
export default {
  setup() {
    const { x: x1, y: y1 } = useMouseTracker();
    const { x: x2, y: y2 } = useMouseTracker();
    const styleObject = reactive({
      color: "red",
      fontSize: "30px",
    });
    styleObject.color = "green";
    return {
      x1,
      y1,
      x2,
      y2,
      styleObject,
    };
  },
};
</script>