<template>
  <h2>祖父層</h2>
  <child-component
    :msg="msg"
    msg2="這是attr"
    :msg3="'333'"
    @update-msg="updateMsg"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
import ChildComponent from "./../components/ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const msg = ref("Hi");
    function updateMsg(txt) {
      msg.value += txt;
      console.log(msg.value);
    }
    provide("msgkkk", msg);

    return {
      msg,
      updateMsg,
    };
  },
};
</script>